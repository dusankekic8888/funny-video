import React, { FC, FormEvent } from 'react';
import Link from 'next/link';
import { GitHub as GithubIcon } from 'react-feather';
import Input from './common/input';
import Button from './common/button';

interface T {
  loading: boolean;
  authType: 'register' | 'login';
  error: string | null;
  onSubmit: (arg: FormEvent) => void;
  onChange: () => void;
}

const AuthForm: FC<T> = ({ authType, error, onSubmit, onChange, loading = false }) => {
  const isLogin = authType === 'login';

  return (
    <div className="h-full w-full max-w-sm flex items-center m-auto">
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-center">
          {authType === 'login' ? 'Login to FunnyMovies' : 'Create account'}
        </h1>
        <form
          className="mt-6"
          onSubmit={(e) => {
            e.preventDefault();

            onSubmit(e);
          }}
        >
          <div>
            <Input
              id="email"
              placeholder="Your email"
              isBlock={true}
              classedLabel="text-sm"
              type="text"
              onChange={() => onChange()}
            />
          </div>
          <div className="mt-4">
            <Input
              id="password"
              placeholder="Your password"
              isBlock={true}
              classedLabel="text-sm"
              type="password"
              onChange={() => onChange()}
            />
          </div>
          <div className="mt-6">
            <Button
              loading={loading}
              buttonStyle="primary"
              type="submit"
              text={isLogin ? 'Login' : 'Sign up'}
              classed="w-full"
            />
          </div>
          {error ? <p className="mt-2 text-red-500"> {error} </p> : null}

          <p className="mt-8 text-xs font-light text-center text-gray-400">
            {isLogin ? (
              <>
                Don&apos;t have an account?{' '}
                <Link href="/register">
                  <a className="font-medium text-gray-800 hover:underline">Create One</a>
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link href="/login">
                  <a className="font-medium text-gray-800 hover:underline">Login</a>
                </Link>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
