import React, { FC, FormEvent, useEffect, useState } from 'react';
import { DataYoutube, VoteType } from '@/type/video';
import ReactPlayer from 'react-player';
import Api from '../actions/config';
import { ThumbsDown, ThumbsUp } from 'react-feather';
import vote from 'pages/api/vote';
import { getCurrentUser } from 'features/auth/userSlice';
import { useAppSelector } from 'hooks';

interface T {
  video: DataYoutube;
}

const Video: FC<T> = ({ video }) => {
  const { user } = useAppSelector(getCurrentUser);

  return (
    <div className="bg-gray-100 h-full mb-3">
      <div className="mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200 w-full flex flex-row h-80 p-4">
        <ReactPlayer className="rounded-t-lg w-2/5" controls height="auto" url={video.url} />
        <div className="px-8 w-3/5 h-full overflow-hidden overflow-ellipsis">
          <h1 className="hover:cursor-pointer text-red-600 font-bold text-md tracking-tight truncate">
            {video.title || 'Title movie'}
          </h1>

          <div className="flex flex-row items-center">
            <small className="italic mr-4">Shared by: {video.email}</small>
            {user.email && (
              <div className="flex">
                {(video?.vote === 'UP_VOTE' || !video?.vote) && <ThumbsUp className="cursor-pointer mr-4" size="30" />}
                {(video?.vote === 'DOWN_VOTE' || !video?.vote) && (
                  <ThumbsDown className="cursor-pointer" color="#000000" stroke="#000000" strokeWidth={3} size="30" />
                )}
              </div>
            )}
          </div>
          <small className="flex items-center">
            <span>{Math.floor(Math.random() * 201)}</span> <ThumbsUp size="14" className="mr-4" />{' '}
            <span>{Math.floor(Math.random() * 201)}</span> <ThumbsDown size="14" />
          </small>
          <small className="italic">Description:</small>
          <p className="hover:cursor-text pb-3 text-gray-600 leading-6 break-words text-justify">
            {video.description || 'Description'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
