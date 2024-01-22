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
    <div className="h-full">
      <div
        role="button"
        tabIndex="0"
        onClick={prevPage}
        className="text-regal-blue">
        <Icons.ArrowIcon />
      </div>
      <div className="h-full px-8 py-6 flex flex-col items-center ">
        <div className="mb-8">
          <h2>Posts</h2>
        </div>
        <RenderList data={posts} />
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
