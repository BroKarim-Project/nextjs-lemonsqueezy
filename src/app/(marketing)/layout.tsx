import { SiteHeader } from "@/components/site-header";


interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <div>
        <header>
          <div >
            <SiteHeader />
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
