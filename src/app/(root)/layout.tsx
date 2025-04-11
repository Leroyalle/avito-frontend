import { AppStoreNoticeBanner, Header } from '@/components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AppStoreNoticeBanner />
      <Header />
      {children}
    </div>
  );
}
