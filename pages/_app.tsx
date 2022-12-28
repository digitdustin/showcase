import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return <Component {...pageProps} />;
}
