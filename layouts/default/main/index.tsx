import { Container } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}

export function Main({ children }: Props) {
  return (
    <Container
      maxW='100%'
      height='100%'
      p={0}
    >
      {children}
    </Container>
  )
}