import { Metadata } from 'next';
import { BLOG_POSTS, getBlogPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post Not Found | Pan Infra' };
  }
  return {
    title: `${post.title} | Pan Infra Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "8rem", background: "#FFFFF2" }}>

      {/* Article Header */}
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
            <Link href="/blog" style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", color: "#ee2e22", textDecoration: "none" }}>
              ← Back to Insights
            </Link>
            <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", color: "#ee2e22" }}>
              {post.category}
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)",
            fontSize: "clamp(2rem, 5vw, 3.375rem)",
            fontWeight: 700,
            color: "#005c97",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}>
            {post.title}
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#2d6a9f", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            {post.excerpt}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.5rem 0", borderTop: "1px solid rgba(0,92,151,0.12)", borderBottom: "1px solid rgba(0,92,151,0.12)" }}>
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={48}
              height={48}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <div>
              <span style={{ display: "block", color: "#005c97", fontWeight: 500, fontSize: "0.95rem" }}>{post.author.name}</span>
              <span style={{ fontSize: "0.8rem", color: "#4a7fa3" }}>{post.readTime} · {post.date}</span>
            </div>
            {/* Social Share */}
            <div style={{ marginLeft: "auto", display: "flex", gap: "1rem", color: "#4a7fa3" }}>
              <button title="Share on Twitter" style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", padding: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button title="Share on LinkedIn" style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", padding: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div style={{ maxWidth: "1040px", margin: "0 auto 5rem", padding: "0 2rem", position: "relative", height: "clamp(260px, 40vw, 550px)" }}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          style={{ objectFit: "cover", borderRadius: "2px" }}
          priority
        />
      </div>

      {/* Content Body */}
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "#2d6a9f" }}
        />
      </div>

      {/* Read More */}
      <div style={{ maxWidth: "720px", margin: "5rem auto 0", padding: "2.5rem 2rem 0", borderTop: "1px solid rgba(0,92,151,0.12)" }}>
        <Link
          href="/blog"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "100%", background: "#ee2e22", color: "#ffffff",
            padding: "1rem", fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.2em",
            textDecoration: "none", borderRadius: "2px",
          }}
          className="btn-dark-hover"
        >
          Read More Articles
        </Link>
      </div>

      {/* Blog content styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-body p { margin-bottom: 2rem; }
        .blog-body h2 {
          font-family: var(--font-playfair, "Playfair Display", Georgia, serif);
          font-size: 2.25rem; font-weight: 700; color: #005c97;
          margin-top: 3.5rem; margin-bottom: 1.5rem; letter-spacing: -0.02em;
        }
        .blog-body ul { margin-bottom: 2rem; padding-left: 1.5rem; list-style-type: disc; }
        .blog-body li { margin-bottom: 1rem; }
        .blog-body strong { color: #005c97; font-weight: 700; }
        .blog-body blockquote {
          border-left: 4px solid #ee2e22; padding-left: 1.5rem; margin-left: 0;
          font-family: var(--font-playfair, "Playfair Display", Georgia, serif);
          font-size: 1.6rem; line-height: 1.4; color: #2d6a9f;
          font-style: italic; margin-top: 3rem; margin-bottom: 3rem;
        }
      `}} />
    </article>
  );
}
