import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  coverImage: string;
  coverAlt: string;
  tags: string[];
  featured: boolean;
  content: string;
  readingTime: string;
};

type FrontMatter = Omit<BlogPost, "slug" | "content" | "readingTime">;

function parseFrontMatter(raw: string): { data: FrontMatter; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    throw new Error("Blog post is missing front matter.");
  }

  const fields: Record<string, string | string[] | boolean> = {};
  const lines = match[1].split("\n");
  let lastStringKey: string | null = null;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];

    if (/^\s+\S/.test(line) && !line.trim().startsWith("- ") && lastStringKey) {
      const currentValue = fields[lastStringKey];

      if (typeof currentValue === "string") {
        fields[lastStringKey] = `${currentValue} ${line.trim().replace(/^"|"$/g, "")}`;
      }

      continue;
    }

    const [rawKey, ...valueParts] = line.split(":");
    const key = rawKey.trim();
    const rawValue = valueParts.join(":").trim();

    if (!key) continue;

    if (rawValue === "") {
      const list: string[] = [];
      while (lines[index + 1]?.trim().startsWith("- ")) {
        index += 1;
        list.push(lines[index].trim().replace(/^- /, "").replace(/^"|"$/g, ""));
      }
      fields[key] = list;
      lastStringKey = null;
      continue;
    }

    if (rawValue === "true" || rawValue === "false") {
      fields[key] = rawValue === "true";
      lastStringKey = null;
      continue;
    }

    fields[key] = rawValue.replace(/^"|"$/g, "");
    lastStringKey = key;
  }

  return {
    data: {
      title: String(fields.title ?? "Untitled"),
      description: String(fields.description ?? ""),
      date: String(fields.date ?? ""),
      category: String(fields.category ?? "Notes"),
      coverImage: String(fields.coverImage ?? "/profile.png"),
      coverAlt: String(fields.coverAlt ?? fields.title ?? "Blog cover image"),
      tags: Array.isArray(fields.tags) ? fields.tags : [],
      featured: Boolean(fields.featured),
    },
    content: match[2].trim(),
  };
}

function getReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

export function getBlogPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = parseFrontMatter(raw);

      return {
        slug,
        ...data,
        content,
        readingTime: getReadingTime(content),
      };
    })
    .sort(
      (first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime(),
    );
}

export function getBlogPost(slug: string) {
  return getBlogPosts().find((post) => post.slug === slug);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatInline(value: string) {
  return escapeHtml(value)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.split("\n");
  const blocks: string[] = [];
  let listItems: string[] = [];
  let codeLines: string[] = [];
  let codeLanguage = "";
  let isInCodeBlock = false;

  const flushList = () => {
    if (listItems.length === 0) return;
    blocks.push(`<ul>${listItems.map((item) => `<li>${item}</li>`).join("")}</ul>`);
    listItems = [];
  };

  const flushCodeBlock = () => {
    if (!isInCodeBlock) return;

    const languageClass = codeLanguage
      ? ` class="language-${escapeHtml(codeLanguage)}"`
      : "";

    blocks.push(
      `<pre><code${languageClass}>${escapeHtml(codeLines.join("\n"))}</code></pre>`,
    );
    codeLines = [];
    codeLanguage = "";
    isInCodeBlock = false;
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      if (isInCodeBlock) {
        flushCodeBlock();
        continue;
      }

      flushList();
      isInCodeBlock = true;
      codeLanguage = trimmed.slice(3).trim().split(/\s+/)[0] ?? "";
      codeLines = [];
      continue;
    }

    if (isInCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (!trimmed) {
      flushList();
      continue;
    }

    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      listItems.push(formatInline(trimmed.slice(2)));
      continue;
    }

    flushList();

    if (trimmed.startsWith("### ")) {
      blocks.push(`<h3>${formatInline(trimmed.slice(4))}</h3>`);
    } else if (trimmed.startsWith("## ")) {
      blocks.push(`<h2>${formatInline(trimmed.slice(3))}</h2>`);
    } else if (trimmed.startsWith("> ")) {
      blocks.push(`<blockquote>${formatInline(trimmed.slice(2))}</blockquote>`);
    } else {
      blocks.push(`<p>${formatInline(trimmed)}</p>`);
    }
  }

  flushCodeBlock();
  flushList();
  return blocks.join("\n");
}
