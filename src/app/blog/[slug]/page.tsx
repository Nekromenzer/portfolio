import TopMeta from "@/components/design/TopMeta";
import SiteFooter from "@/components/design/SiteFooter";
import DockNav from "@/components/design/DockNav";
import "@/app/blog/blog.css";
import "@/app/design.css";
import { getBlogPost, getBlogPosts, markdownToHtml } from "@/lib/blog";
import { siteUrl } from "@/lib/site";
import { ArrowLeft, CalendarDays } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${siteUrl}${path}`;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog post not found | Maneesha Barandeniya",
    };
  }

  return {
    title: `${post.title} | Maneesha Barandeniya`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blog/${post.slug}`,
      siteName: "Maneesha Barandeniya",
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          alt: post.coverAlt,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <main className="dz dz-blog">
      <a className="dz-skip" href="#main">
        Skip to main content
      </a>
      <TopMeta />

      <article className="section blog-article" id="main">
        <Link href="/blog" className="blog-back-link">
          <ArrowLeft size={16} aria-hidden />
          BLOG
        </Link>

        <header className="blog-article-header">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <div>
            <span>
              <CalendarDays size={15} aria-hidden />
              {new Intl.DateTimeFormat("en", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date(post.date))}
            </span>
            <span>{post.readingTime}</span>
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>

        <div className="blog-article-cover">
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            sizes="(max-width: 980px) 100vw, 980px"
            priority
          />
        </div>

        <div
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              image: absoluteUrl(post.coverImage),
              datePublished: post.date,
              dateModified: post.date,
              author: {
                "@type": "Person",
                name: "Maneesha Barandeniya",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${siteUrl}/blog/${post.slug}`,
              },
              keywords: post.tags.join(", "),
            }).replace(/</g, "\\u003c"),
          }}
        />
      </article>
      <SiteFooter />
      <DockNav />
    </main>
  );
}
