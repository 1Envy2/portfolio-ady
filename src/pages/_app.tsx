import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";
import { Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'], // Tentukan berat (weight) font yang Anda butuhkan
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider className={manrope.className}>
      <Component {...pageProps} />
    </HeroUIProvider>
  );
}
