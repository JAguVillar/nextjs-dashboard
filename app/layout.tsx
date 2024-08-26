import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts/fonts'
import { Metadata } from 'next';

// You can also include a metadata object from any layout.js or page.js file to add additional page information like title and description. Any metadata in layout.js will be inherited by all pages that use it.

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialised`}>{children}</body>
    </html>
  );
}
