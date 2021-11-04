import Button from '@/component/common/button';
import Input from '@/component/common/input';
import { MainLayout } from '@/component/layout';
import { setUser } from 'features/auth/userSlice';
import { useAppDispatch } from 'hooks';
import Cookies from 'js-cookie';
import { useRouter } from 'next/dist/client/router';
import * as React from 'react';
import { useState } from 'react';
import useSWR from 'swr';
import Api from '../actions/config';

function YouTubeGetID(urlYoutube: string) {
  const url = urlYoutube.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}
const ytApiKey = process.env.YOUTUBE_KEY || 'AIzaSyBYenl3ZcYQ8xaqLCUoGLxnXyVFyYKE0WM';

const ShareYoutube = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [isErrorLink, setIsErrorLink] = useState<string>('');
  const router = useRouter();
  const { data, error } = useSWR('me');
  React.useEffect(() => {
    if (Cookies.get('token') && data && data.email) dispatch(setUser(data));
  }, [data]);

  if (error) router.push('/');
  if (!data) return <div>loading...</div>;
  if (!data && !data?.email) router.push('/');

  const getDataYoutube = async (idVideo: string) => {
    const data: any = await Api.get(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + idVideo + '&key=' + ytApiKey
    );
    return { title: data.items[0].snippet.title, description: data.items[0].snippet.description };
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    const target = e.target as typeof e.target & {
      url: { value: string };
    };

    const urlYoutube = target.url.value;

    const idVideo = YouTubeGetID(urlYoutube);
    const { title, description } = await getDataYoutube(idVideo);

    if (urlYoutube && (urlYoutube.includes('youtube.com') || urlYoutube.includes('https://youtu.be'))) {
      Api.post('share-youtube', {
        email: data.email,
        userId: data.userId,
        url: urlYoutube,
        idVideo,
        title,
        description,
      })
        .then((data: any) => {
          setLoading(false);
          router.push('/');
        })
        .catch((error) => {
          console.log(error.message);
          setLoading(false);
        });
    } else {
      setIsErrorLink('url invalid');
      setLoading(false);
    }
  };
  return (
    <div className="h-full w-full max-w-sm flex items-center m-auto">
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-center">Share a Youtube movie</h1>
        <form
          className="mt-6"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
        >
          <div>
            <Input
              id="url"
              placeholder="Your link youtube"
              isBlock={true}
              classedLabel="text-sm"
              type="text"
              name="url"
              onChange={() => setIsErrorLink('')}
            />
          </div>
          {isErrorLink ? <small className="mt-2 text-red-500 italic"> {isErrorLink} </small> : null}

          <div className="mt-6">
            <Button loading={loading} buttonStyle="primary" type="submit" text="Share" classed="w-full" />
          </div>
        </form>
      </div>
    </div>
  );
};

ShareYoutube.Layout = MainLayout;
ShareYoutube.Title = 'Share link youtube';

export default ShareYoutube;
