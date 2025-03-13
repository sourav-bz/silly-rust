import { Blog } from "contentlayer/generated";

interface BlogJsonLdProps {
  blog: Blog;
}

export default function BlogJsonLd({ blog }: BlogJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: blog.image,
    datePublished: new Date(blog.date).toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Silly Rust",
      logo: {
        "@type": "ImageObject",
        url: "https://sillyrust.com/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sillyrust.com/blogs/${blog.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
