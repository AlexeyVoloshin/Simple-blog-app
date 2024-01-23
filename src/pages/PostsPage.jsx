import React from 'react';
import { RenderList } from '../components/RenderList';
import { fetchData } from '../actions';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Icons from '../components/Icons';

export const PostsPage = () => {
  const navigate = useNavigate();
  const { posts } = useLoaderData();

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-full relative">
      <div
        role="button"
        tabIndex="0"
        onClick={prevPage}
        className="text-regal-blue absolute top-7 left-0">
        <Icons.ArrowIcon />
      </div>
      <div className="h-full px-8 py-6 flex flex-col items-center ">
        <div className="mb-8">
          <h2>Posts</h2>
        </div>
        {posts?.length ? (
          <RenderList data={posts} />
        ) : (
          <p className="noItems">No Posts</p>
        )}
      </div>
    </div>
  );
};

async function loader({ params }) {
  const posts = await fetchData(`posts?userId=${params.id}`);
  return { posts };
}

export default {
  Layout: PostsPage,
  loader,
};
