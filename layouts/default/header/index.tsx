import Image from 'next/image'

import {
  Grid,
  GridItem,
  Text,
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
} from '@chakra-ui/react'

import {
  MdMenu,
  MdSearch,
  MdNotifications
} from 'react-icons/md'

export function Header() {
  return (
    <Grid
      templateAreas={`"logo search profile" `}
      gridTemplateColumns={[
        '200px auto auto',
        '256px auto auto'
      ]}
      h='64px'
      px={6}
    >
      <GridItem
        area={'logo'}
        display='flex'
        alignItems='center'
      >
        <Icon
          as={MdMenu}
          width={6}
          height={6}
          mr={4}
          display={[
            'block',
            'block',
            'none'
          ]}
        />

        <Image
          src="/assets/svg/logo.svg"
          height={32}
          width={32}
        />

        <Text
          fontSize={[
            'md',
            'xl',
            '1xl',
            '2xl',
          ]}
          fontWeight='medium'
          px={4}
        >
          RBR Music
        </Text>
      </GridItem>

      <GridItem
        area={'search'}
        alignItems='center'
        display={[
          'none',
          'none',
          'flex'
        ]}
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Icon
              as={MdSearch}
              width={6}
              height={6}
            />}
          />

          <Input
            type='text'
            variant='outline'
            placeholder='Pesquisar'
            bg='none'
            borderColor='brand.50'
            focusBorderColor='primary.50'
            _placeholder={{ opacity: 1, color: 'text.500' }}
            color='text.900'
          />
        </InputGroup>
      </GridItem>

      <GridItem
        area={'profile'}
        display='flex'
        alignItems='center'
        justifyContent='end'
      >
        <Icon
          as={MdSearch}
          width={6}
          height={6}
          mr={4}
          display={[
            'block',
            'block',
            'none'
          ]}
        />

        <Icon
          as={MdNotifications}
          width={6}
          height={6}
          mr={4}
        />

        <Avatar name='Berga' src='https://bit.ly/dan-abramov' />
      </GridItem>
    </Grid>


    // <Container
    //   maxW='100%'
    //   h='64px'
    //   color='white'
    //   display='flex'
    //   alignItems='center'
    //   px={4}
    // >

    //   Header

    // </Container>
  )
}