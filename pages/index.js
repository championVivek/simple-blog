import { useState, useEffect } from "react";
import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blogs/Blogs";
import imageUrlBuilder from "@sanity/image-url";
import Paginations from "../components/Pagination/Pagination";

export default function Home({ posts }) {
  const [mappedPosts, setMappedPosts] = useState("");

  useEffect(() => {
    if (posts.length) {
      const imageBuilder = imageUrlBuilder({
        projectId: "jehiv4pg",
        dataset: "production",
      });

      setMappedPosts(
        posts.map((p) => {
          return {
            ...p,
            mainImage: imageBuilder.image(p.mainImage),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  return (
    <div>
      <Head>
        <title>Readit</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner />
      <Paginations
        data={mappedPosts}
        RenderComponent={Blogs}
        pageLimit={3}
        dataLimit={4}
      />
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[_type == "post" ]');
  const url = `https://jehiv4pg.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  if (!result.result || !result.result.length) {
    return {
      props: {
        props: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
