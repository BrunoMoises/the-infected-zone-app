import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "styled-components";
import {darkTheme} from "@/styles/themes/dark";
import GlobalStyles from '../styles/global'
import AppTemplate from "@/components/AppTemplate";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <AppTemplate>
          <Component {...pageProps} />
        </AppTemplate>
      </ThemeProvider>
  );
}
