import MerchantsContent from './MerchantsContent';
import { use } from 'react';

export default function Merchants({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  
  return <MerchantsContent lang={lang} />;
}
