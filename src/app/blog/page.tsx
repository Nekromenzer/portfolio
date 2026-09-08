import SiteBackground from "@/components/common/SiteBackground";
import BlogNav from "@/components/blog/BlogNav";
import { getBlogPosts } from "@/lib/blog";
import { ArrowUpRight, CalendarDays, PenLine } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Maneesha Barandeniya",
  description:
    "Articles and engineering notes by Maneesha Barandeniya on React, Next.js, frontend systems, and product delivery.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Maneesha Barandeniya",
    description:
      "Articles and engineering notes by Maneesha Barandeniya on React, Next.js, frontend systems, and product delivery.",
    type: "website",
    images: [
      {
        url: "/profile.png",
        alt: "Maneesha Barandeniya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Maneesha Barandeniya",
    description:
      "Articles and engineering notes by Maneesha Barandeniya on React, Next.js, frontend systems, and product delivery.",
    images: ["/profile.png"],
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const regularPosts = posts.filter((post) => post.slug !== featuredPost?.slug);

  return (
    <main className="site-shell blog-shell" data-active-section="blog">
      <SiteBackground sideMarkInitial="MG" sideMarkLabel="Blog" />
      <BlogNav />

      <section className="section blog-hero">
        <p className="eyebrow">BLOG</p>
        <div>
          <h1>Frontend systems and product delivery.</h1>
          <p>
            Practical notes from building React, Next.js, React Native, SaaS,
            fintech, and enterprise mapping products.
          </p>
        </div>
      </section>

      {featuredPost ? (
        <section className="section blog-featured-section">
          <Link href={`/blog/${featuredPost.slug}`} className="blog-featured">
            <div className="blog-featured-cover">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.coverAlt}
                fill
                sizes="(max-width: 980px) 100vw, 44vw"
                priority
              />
            </div>
            <div>
              <span>{featuredPost.category}</span>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.description}</p>
            </div>
            <footer>
              <span>
                <CalendarDays size={15} aria-hidden />
                {new Intl.DateTimeFormat("en", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(featuredPost.date))}
              </span>
              <span>{featuredPost.readingTime}</span>
              <ArrowUpRight size={18} aria-hidden />
            </footer>
          </Link>
        </section>
      ) : null}

      {regularPosts.length > 0 ? (
        <section className="section blog-index">
          <div className="section-heading">
            <p className="eyebrow">LATEST</p>
            <h2>All posts.</h2>
          </div>

          <div className="blog-grid">
            {regularPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                <span className="blog-card-cover">
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                </span>
                <span className="blog-card-icon">
                  <PenLine size={18} aria-hidden />
                </span>
                <div>
                  <span>{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
                <footer>
                  <span>{post.readingTime}</span>
                  <ArrowUpRight size={16} aria-hidden />
                </footer>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
