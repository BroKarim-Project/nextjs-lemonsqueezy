import { cn } from '@/lib/utils';
import MainNav from '@/components/main-nav';
import { SiteHeader } from '@/components/site-header';
import { marketingConfig } from '@/config/marketing';
import Banner from '@/components/banner';
import { ModalProvider } from '@/components/modal-provider';
import { authOptions } from '../api/auth/[...nextauth]/option';
import { getServerSession } from 'next-auth';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({ children }: MarketingLayoutProps) {
  const session = await getServerSession(authOptions);
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="container z-50">
          <div className=" h-20  py-6">
            <SiteHeader session={session} />
          </div>
        </header>
        <Banner />
        <ModalProvider />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
