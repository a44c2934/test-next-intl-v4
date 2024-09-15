import { AppProps } from "next/app";
import { TranslationProvider } from "@/components/TranslationProvider";

import "./../styles/bootstrap.css";
import "./../styles/globals.css";
import NavbarHead from "@/components/Layout/NavbarHead";
import MainLayout from "@/components/Layout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <TranslationProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </TranslationProvider>
  );
}

export default MyApp;
