import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Comment = () => {
  const router = useRouter();

  return (
    <div className="container px-5 sm:px-20 my-10">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10"
        onClick={() => {
          router.back();
        }}
      >
        Back
      </button>

      <div className="mb-5">Title: {router?.query?.title}</div>
      <div className="mb-5">Description: {router?.query?.description}</div>
    </div>
  );
};

export default Comment;
