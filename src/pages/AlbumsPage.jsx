import React from 'react';
import { RenderList } from '../components/RenderList';
import { fetchData } from '../actions';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Icons from '../components/Icons';

export const AlbumsPage = () => {
  const navigate = useNavigate();
  const { albums } = useLoaderData();

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
          <h2>Albums</h2>
        </div>
        {albums?.length ? (
          <RenderList data={albums} />
        ) : (
          <p className="noItems">No albums</p>
        )}
      </div>
    </div>
  );
};

async function loader({ params }) {
  const albums = await fetchData(`albums?userId=${params.id}`);
  return { albums };
}

export default {
  Layout: AlbumsPage,
  loader,
};
