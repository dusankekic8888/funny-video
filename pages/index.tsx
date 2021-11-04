import { MainLayout } from '@/component/layout';
import Video from '@/component/video';
import { NextPageWithLayout } from '@/type/layoutPropsType';
import { DataYoutube, VoteType } from '@/type/video';
import React, { useEffect } from 'react';
import useSWR from 'swr';
const items = ['UP_VOTE', 'DOWN_VOTE', null];
const Home: NextPageWithLayout = () => {
  const { data, error } = useSWR('/videos');

  return (
    <div className="w-3/4 mx-auto mt-10">
      {data &&
        data.length > 0 &&
        data.map((video: DataYoutube) => {
          const vote = items[Math.floor(Math.random() * items.length)];

          return <Video key={video.id} video={{ ...video, vote }} />;
        })}
    </div>
  );
};

Home.Layout = MainLayout;
Home.Title = 'Home';

export default Home;
