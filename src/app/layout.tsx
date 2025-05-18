import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kyro AI - Ne perdez plus jamais un appel",
  description: "Assistant vocal IA pour salons et cabinets médicaux. Répondez à tous vos appels, 24h/24, 7j/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        <meta property="og:title" content="Kyro AI - Ne perdez plus jamais un appel" />
        <meta property="og:description" content="Assistant vocal IA pour salons et cabinets médicaux. Répondez à tous vos appels, 24h/24, 7j/7." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kyroai.fr/" />
        <meta property="og:image" content="/logo-kyroai.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kyro AI - Ne perdez plus jamais un appel" />
        <meta name="twitter:description" content="Assistant vocal IA pour salons et cabinets médicaux. Répondez à tous vos appels, 24h/24, 7j/7." />
        <meta name="twitter:image" content="/logo-kyroai.png" />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} font-inter antialiased bg-[#F2F2F2]`}
      >
        {children}
      </body>
    </html>
  );
}
