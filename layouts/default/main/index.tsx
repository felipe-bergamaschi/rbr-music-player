import { Container } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}

export function Main({ children }: Props) {
  return (
    <Container
      // maxW='100vw'
      // height='100vh'
      // bg='brand.900'
      color='white'
    // centerContent
    >
      {children}
    </Container>
  )
}