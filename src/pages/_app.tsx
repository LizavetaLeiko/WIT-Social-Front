import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme} from '@chakra-ui/react'
import defaultTheme from '../theme/theme'
import Layout from '@/hoc/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {

  const theme = extendTheme(defaultTheme);

  return(
  <ChakraProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>)
}
