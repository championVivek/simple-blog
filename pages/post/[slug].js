import { useEffect, useState } from "react";
import Head from "next/head"
import BlogDetails from "../../components/BlogDetails/BlogDetails";
import Banner from "../../components/Banner/Banner";
import imageUrlBuilder from "@sanity/image-url";

export default function BlogPage({ title, body, image }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imageBuilder = imageUrlBuilder({
      projectId: "0zx12v6s",
      dataset: "production",
    });

    setImageUrl(imageBuilder.image(image));
  }, [image]);

  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
      <Banner ThisIsBlog />
      <BlogDetails
        blogTitle={title}
        blogImage={imageUrl}
        body={body}
      />
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[_type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = `https://jehiv4pg.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());

  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      },
    };
  }
};
