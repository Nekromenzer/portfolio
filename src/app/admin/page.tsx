import type { Metadata } from "next";
import "../design.css";

export const metadata: Metadata = {
  title: "Portfolio CMS",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <main className="dz">
      <section className="section">
        <h1>Publish a blog post</h1>
        <p>Edit Markdown posts in GitHub. Publishing to main rebuilds the site.</p>
        <p>
          <a href="https://github.com/Nekromenzer/portfolio/tree/main/content/blog">
            Manage blog posts on GitHub
          </a>
        </p>
        <p>Sign in to GitHub with repository write access to save changes.</p>
      </section>
    </main>
  );
}
