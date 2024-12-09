import ResponsiveAppBar from "@/components/ResponsiveMenu";
import "@/styles/globals.css";
import { GlobalContextProvider } from "./store/globalContext";

export default function App({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}
