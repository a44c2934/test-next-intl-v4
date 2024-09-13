import { AppProps } from "next/app";
import { TranslationProvider } from "@/components/TranslationProvider";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <TranslationProvider>
      <Component {...pageProps} />
    </TranslationProvider>
  );
}

export default MyApp;
