import { Container, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

type Props = {
  icon: IconType,
  label: string,
  isActive: boolean,
  onClick: () => void
}

export function NavItem({ icon, label, isActive, onClick }: Props) {
  return (
    <Container
      px={6}
      display='flex'
      alignItems='center'
      h={10}
      borderTopRightRadius={20}
      borderBottomRightRadius={20}
      cursor='pointer'
      _hover={{
        background: 'brand.700'
      }}
      transition='linear'
      transitionDuration='.3s'
      bg={isActive ? 'primary.50' : 'transparent'}
      onClick={onClick}
    >
      <Icon
        as={icon}
        width={6}
        height={6}
        mr={6}
      />

      <Text
        fontSize='sm'
        fontWeight='medium'
      >
        {label}
      </Text>
    </Container>
  )
}