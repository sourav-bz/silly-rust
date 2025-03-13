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
      images: blog.image
        ? [
            {
              url: blog.image,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: blog.image ? [blog.image] : undefined,
    },
    alternates: {
      canonical: `https://sillyrust.com/blogs/${blog.slug}`,
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
