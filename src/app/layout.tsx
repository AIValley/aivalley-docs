import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import Image from "next/image";

import './globals.css'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={
    <>
      <Image
        className="dark:invert"
        src="/logo-full.png"
        alt="AI Valley logo"
        width={100}
        height={20}
        priority
      />
      <span style={{ marginLeft: '.6em', fontWeight: 800, fontSize: '1.2em' }}>
        Docs
      </span>
    </>
  }
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © rss.Today</Footer>
 
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="utf8"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
      </Head>
      <body>
        <Layout
//          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/AIValley/aivalley-docs/blob/main"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}