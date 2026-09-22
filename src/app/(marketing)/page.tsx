import { redirect } from 'next/navigation';

export default function MarketingRootPage({
  searchParams,
}: {
  searchParams: { intro?: string };
}) {
  // Temporary redirect to the authenticated dashboard until the marketing landing page is built.
  // Preserves query parameters like ?intro=1
  if (searchParams.intro) {
    redirect(`/dashboard?intro=${searchParams.intro}`);
  }
  
  redirect('/dashboard');
}
