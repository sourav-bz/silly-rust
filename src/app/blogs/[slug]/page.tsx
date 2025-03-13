import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import BlogContent from "@/components/BlogContent";
import BlogJsonLd from "@/components/BlogJsonLd";
import { Metadata } from "next";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return {};
  }

  const publishedTime = new Date(blog.date).toISOString();
  const modifiedTime = new Date().toISOString();
  const blogUrl = `https://sillyrust.com/blogs/${blog.slug}`;
  const imageUrl = blog.image || "https://sillyrust.com/images/og-square.png";

  return {
    title: `${blog.title} | Silly Rust`,
    description: blog.description,
    keywords: `Rust, Bevy, game development, ECS, ${blog.title}`,
    authors: [{ name: blog.author }],
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [blog.author],
      url: blogUrl,
      siteName: "Silly Rust",
      images: [
        {
          url: imageUrl,
          width: 124,
          height: 124,
          alt: blog.title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: blog.title,
      description: blog.description,
      creator: "@sourav_bz",
      images: [imageUrl],
    },
    alternates: {
      canonical: blogUrl,
    },
  };
}

type CustomPageProps = {
  params: { slug: string } & Promise<any>;
};

export default function PostPage({ params }: CustomPageProps) {
  const { slug } = params;

  const blog = allBlogs.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <BlogJsonLd blog={blog} />
      <BlogContent blog={blog} />
    </>
  );
}
