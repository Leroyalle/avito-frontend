import { AppStoreNoticeBanner, Footer, Header, ServicesBanner } from '@/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppStoreNoticeBanner />
      <Header />
      <main>
        {children}
        <ServicesBanner />
      </main>
      <Footer />
    </div>
  );
}
