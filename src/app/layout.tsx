import Footer from '@/components/layout/footer/Footer'
import { Providers } from '@/components/providers'
import ToasterApp from '@/components/ui/Toaster/Toaster'
import StyledComponentsRegistry from '@/lib/styled-components-registry'
import { GlobalStyles } from '@/styles/globalStyles'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

// Fonts
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

// Metadata
export const metadata: Metadata = {
  title: 'RNT Hub',
  description: 'Aplicação Next.js criada com RNT CLI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${roboto.variable}`} data-scroll-behavior="smooth">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ToasterApp />

          <Providers>
            {children}
            <Footer />
          </Providers>

        </StyledComponentsRegistry>
      </body>
    </html>
  )
}


