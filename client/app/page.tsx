import Carousel from "@/components/carousel/WritersCarousel";

export default async function Home() {
  let postsData: PostsData = [];

  try {
    const res = await fetch(`${process.env.SERVER_URL}/posts`, {
      cache: "no-cache",
    });
    if (res.ok) postsData = await res.json();
  } catch (error) {
    postsData = null;
  }
  return (
    <div className="h-[100vh] w-full flex items-center px-3 sm:px-10 max-w-[1750px] mx-auto">
      <Carousel postsData={postsData} />
    </div>
  );
}

export type PostsData = Array<Post> | null;

export type Post = {
  _id: string;
  title: string;
  createdAt: Date;
  postUrl: string;
  writer: Writer;
};

export type Writer = {
  _id: string;
  name: string;
  imageUrl: string;
  pageUrl: string;
};
