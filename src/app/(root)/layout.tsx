import { AppStoreNoticeBanner, Footer, Header, ServicesBanner } from '@/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AppStoreNoticeBanner />
      <Header />
      <main className="min-h-screen bg-gray-50">
        {children}
        <ServicesBanner />
      </main>
      <Footer />
    </div>
  );
}
