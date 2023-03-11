import AnalyticsWrapper from "@/component/analytics.component";
import "./globals.css";

export const metadata = {
  title: "Wordify - User friendly dictionary app",
  description:
    "The app provides an intuitive interface that enables users to search for words easily and quickly. Users can enter a word into the search bar and get immediate results, including the word's definition, pronunciation, and usage examples. The app may also suggest similar words or provide related words to expand the user's vocabulary",
  url: "https://wordify-pro.vercel.app/",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://wordify-pro.vercel.app/",
    title: "User friendly dictionary app",
    description:
      "The app provides an intuitive interface that enables users to search for words easily and quickly. Users can enter a word into the search bar and get immediate results, including the word's definition, pronunciation, and usage examples. The app may also suggest similar words or provide related words to expand the user's vocabulary",
    images: [],
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-default min-h-screen"}>{children}</body>
      <AnalyticsWrapper />
    </html>
  );
}
