import { ListingWrapper } from '@/components';

export default async function Listing({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  return <ListingWrapper listingId={id} />;
}
