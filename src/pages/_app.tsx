import { AppProps } from "next/app";
import { TranslationProvider } from "@/components/TranslationProvider";

import "./../styles/bootstrap.css";
import "./../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <TranslationProvider>
      <Component {...pageProps} />
    </TranslationProvider>
  );
}

export default MyApp;
