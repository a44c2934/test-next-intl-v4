import { AppProps } from "next/app";
import { TranslationProvider } from "@/components/TranslationProvider";
import MainLayout from "@/components/Layout/MainLayout";

import "./../styles/bootstrap.css";
import "./../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
      <MainLayout page={pageProps}>
        <Component {...pageProps} />
      </MainLayout>
    </TranslationProvider>
  );
}

export default MyApp;
