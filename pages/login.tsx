import AuthForm from '@/component/auth';
import { MainLayout } from '@/component/layout';
import { getCurrentUser, setUser } from 'features/auth/userSlice';
import { useAppDispatch, useAppSelector } from 'hooks';
import cookie from 'js-cookie';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import Api from '../actions/config';
const Register = () => {
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector(getCurrentUser);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (user.email) router.push('/');
  }, [user]);

  return (
    <AuthForm
      loading={loading}
      authType="login"
      error={error}
      onSubmit={(e) => {
        const target = e.target as typeof e.target & {
          email: { value: string };
          password: { value: string };
        };

        const email = target.email.value;
        const password = target.password.value;
        setLoading(true);
        Api.post('login', {
          email,
          password,
        })
          .then((data: any) => {
            if (data && data.token) {
              dispatch(setUser(data.user));
              //set cookie
              cookie.set('token', data.token, { expires: 2 });
            }
            setLoading(false);
            router.push('/');
          })
          .catch(() => {
            setLoading(false);
          });
      }}
      onChange={() => error && setError(null)}
    />
  );
};

Register.Layout = MainLayout;
Register.title = 'FunnyMovies - Register';

export default Register;
