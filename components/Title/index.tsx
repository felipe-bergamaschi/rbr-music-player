import { Text } from '@chakra-ui/react'

type Props = {
  children: React.ReactNode
}

export function Title({ children }: Props) {
  return (
    <Text
      fontSize='xl'
      fontWeight='medium'
      mb={4}
    >
      {children}
    </Text>
  )
}