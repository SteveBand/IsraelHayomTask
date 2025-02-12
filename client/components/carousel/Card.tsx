import Link from "next/link";
import React from "react";
import { Post } from "@/app/page";

type Props = {
  post: Post;
};

const Card = (props: Props) => {
  const { post } = props;

  const writer = post.writer;

  return (
    <div className="h-100 flex justify-center items-center flex-col sm:flex-row gap-3">
      <div className="rounded-full overflow-hidden border-custom-red border-[1px] w-[150px] h-[150px] sm:w-[125px] sm:h-[125px]">
        <img
          className="w-full h-full"
          src={writer.imageUrl}
          alt={writer.name}
        />
      </div>
      <div className="text-center sm:text-right">
        <Link href={writer.pageUrl}>
          <h4 className="text-[22px] font-semibold text-custom-black">
            {writer.name}
          </h4>
        </Link>
        <Link
          href={post.postUrl}
          className="text-[16px] text-custom-gray font-bold h-20 block overflow-hidden"
        >
          <p className="max-w-32 overflow-hidden line-clamp-2 sm:line-clamp-3">
            {post.title}
          </p>
        </Link>
        <Link
          href={writer.pageUrl}
          className="text-custom-red text-[14px] sm:text-left block font-bold"
        >
          קרא עוד
          <i className="border-custom-red border-r-[3px] border-b-[3px] p-[3px] rotate-[135deg] inline-block mr-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default Card;
