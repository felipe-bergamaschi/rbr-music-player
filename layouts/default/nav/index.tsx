import { useState } from 'react'
import { NavItem } from '@components/NavItem'

import { Container } from '@chakra-ui/react'

import {
  MdHome,
  MdExplore,
  MdSettings
} from 'react-icons/md'

export function Nav() {
  const [activeSession, setActiveSession] = useState(0)

  return (
    <Container
      py={6}
      px={0}
    >
      <NavItem
        icon={MdHome}
        label='Início'
        isActive={activeSession === 0}
        onClick={() => setActiveSession(0)}
      />

      <NavItem
        icon={MdExplore}
        label='Explorar'
        isActive={activeSession === 1}
        onClick={() => setActiveSession(1)}
      />

      <NavItem
        icon={MdSettings}
        label='Configurações'
        isActive={activeSession === 2}
        onClick={() => setActiveSession(2)}
      />
    </Container>
  )
}