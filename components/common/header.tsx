import React from 'react';
import Link from 'next/link';
import { getCurrentUser, setUser } from 'features/auth/userSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import Button from './button';
import cookie from 'js-cookie';
import { useRouter } from 'next/dist/client/router';

const Header = () => {
  const { user } = useAppSelector(getCurrentUser);
  const router = useRouter();
  const distpach = useAppDispatch();

  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white sm:items-baseline w-full border-b-2 h-18">
      <div className="mb-2 sm:mb-0 flex flex-row ">
        <div>
          <Link href="/">
            <a className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">
              Funny movies
            </a>
          </Link>
        </div>
      </div>
      {user.email ? (
        <div className="sm:mb-0 self-center flex flex-row align-middle items-center">
          <div>welcome: {user.email}</div>
          <Link href="/share-youtube">
            <a className="px-4 py-2 text-md no-underline hover:text-blue-dark ml-2 bg-indigo-500 rounded text-white">
              Share youtube
            </a>
          </Link>
          <Button
            buttonStyle="danger"
            type="submit"
            text="Logout"
            bgColor="red"
            handleClick={async () => {
              await cookie.remove('token');
              distpach(setUser({ userId: '', email: '', authToken: '' }));
              router.push('/');
            }}
          />
        </div>
      ) : (
        <div className="sm:mb-0 self-center">
          <Link href="/login">
            <a className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Login</a>
          </Link>
          <Link href="/register">
            <a className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Register</a>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
