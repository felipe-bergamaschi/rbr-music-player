import { Container } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

import { Nav } from './nav'
import { Header } from './header'
import { Main } from './main'

type Props = {
  children: React.ReactNode
}

export function DefaultLayout({ children }: Props) {
  const smNav = `
    "header"
    "main"
  `

  const mdNav = `
    "header header"
    "nav main"
  `

  return (
    <Container
      maxW='100vw'
      minW='360px'
      h='100vh'
      bg='brand.900'
      color='white'
      p={0}
    >
      <Grid
        templateAreas={[
          smNav,
          smNav,
          mdNav,
        ]}
        gridTemplateRows={'64px 1fr'}
        gridTemplateColumns={[
          '1fr',
          '1fr',
          '256px 1fr'
        ]}
        h='100vh'
      >
        <GridItem bg='brand.800' area={'header'}>
          <Header />
        </GridItem>

        <GridItem
          area={'nav'}
          display={[
            'none',
            'none',
            'block',
            'block'
          ]}
        >
          <Nav />
        </GridItem>

        <GridItem area={'main'}>
          <Main>
            {children}
          </Main>
        </GridItem>
      </Grid>
    </Container>
  )
}