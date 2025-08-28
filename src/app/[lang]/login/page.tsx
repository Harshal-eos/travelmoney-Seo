import LoginForm from './LoginForm';
import { use } from 'react';

export default function Login({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  
  return <LoginForm lang={lang} />;
}
