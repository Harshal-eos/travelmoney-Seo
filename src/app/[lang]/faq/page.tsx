import { Wrench, Clock } from 'lucide-react'
import { Card, CardContent } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import Link from 'next/link'
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { use } from 'react';

export default function FAQ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);

  return (
    <>
      <Navbar lang={lang} />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="w-full max-w-lg">
          <Card className="shadow-xl rounded-2xl border border-gray-200 bg-white">
            <CardContent className="flex flex-col items-center text-center space-y-6 py-12">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 text-yellow-600">
                <Wrench size={40} />
              </div>
              <h1 className="text-2xl font-semibold text-gray-800">Page Under Construction</h1>
              <p className="text-gray-500 max-w-md">
                We&apos;re currently working hard to bring you this page. Please check back later or return to the homepage.
              </p>
              <div className="flex gap-4 mt-4">
                <Link href={`/${lang}`}>
                  <Button className="rounded-xl">Go Home</Button>
                </Link>
                <Button variant="outline" className="rounded-xl" disabled>
                  <Clock className="mr-2 h-4 w-4" /> Coming Soon
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  )
}
