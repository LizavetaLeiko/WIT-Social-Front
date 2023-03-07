import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme} from '@chakra-ui/react'
import defaultTheme from '../theme/theme'
import Layout from '@/hoc/layout/Layout';
import { Provider } from 'react-redux';
import { setupStore } from '@/redux/store';

export default function App({ Component, pageProps }: AppProps) {

  const theme = extendTheme(defaultTheme);
  const store = setupStore();

  return(
  <Provider store={store}>
  <ChakraProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
  </Provider>
  )
}
