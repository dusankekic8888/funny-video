import AuthForm from '@/component/auth';
import { MainLayout } from '@/component/layout';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import Api from '../actions/config';

const Register = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  return (
    <AuthForm
      loading={loading}
      error={error}
      authType="register"
      onSubmit={(e) => {
        const target = e.target as typeof e.target & {
          email: { value: string };
          password: { value: string };
        };

        const email = target.email.value;
        const password = target.password.value;
        setLoading(true);
        Api.post('register', {
          email,
          password,
        }).then((data: any) => {
          setLoading(false);
          router.push('/login');
        });
      }}
      onChange={() => error && setError(null)}
    />
  );
};

Register.Layout = MainLayout;
Register.title = 'FunnyMovies - Register';

export default Register;
