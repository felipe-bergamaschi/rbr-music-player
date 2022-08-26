import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#181818',
    800: '#202020',
    700: '#373737',
    50: '#ffffff33'
  },
  primary: {
    900: '#dd1212',
    500: '#dd121280',
    50: '#dd12121a',
  },
  text: {
    900: '#fff',
    700: '#aaa',
    500: '#ffffff80',
    50: '#ffffff33'
  }
}

const theme = extendTheme({
  colors,
  fonts: {
    body: `'Roboto', sans-serif`,
    heading: `'Roboto', sans-serif`,
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
