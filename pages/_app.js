import ResponsiveAppBar from "@/components/ResponsiveMenu";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </>
  )
}
