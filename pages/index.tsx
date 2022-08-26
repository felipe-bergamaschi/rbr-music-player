import type { NextPage } from 'next'
import { DefaultLayout } from '@layouts'
import { Container, Flex, Center, Image } from '@chakra-ui/react'

import ReactPlayer from "react-player"
import { useEffect, useState } from 'react'

import { sounds } from '@services'
import { MusicItem } from '@components/MusicItem'
import { Title } from '@components/Title'

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Flex p={0} height='100%'>
        <Flex
          maxW='100%'
          p={6}
          flex={1}
          flexDirection='column'
        >
          <Title>
            O melhor de cada artista
          </Title>

          {sounds.map((sound) => (
            <MusicItem
              key={sound.id}
              artist={sound.artist}
              bg={sound.bg}
              id={sound.id}
              image={sound.image}
              musicName={sound.musicName}
              url={sound.url}
            />
          ))}
        </Flex>

        <Center
          position='relative'
          maxW='100%'
          maxH='100%'
          px={6}
          flex={1}
          bg={sounds[0].bg}
          overflow='hidden'
        // bgImage={sounds[0].image}
        // bgRepeat='no-repeat'
        // bgSize='cover'
        // style={{ filter: 'blur(8px)' }}
        >

          <Image
            zIndex='0'
            position='absolute'
            top={0}
            left={0}
            w='100%'
            h='100%'
            src={sounds[0].image}
            borderRadius={5}
            style={{ filter: 'blur(24px)' }}
            opacity={.7}
          // w={52}
          // h={52}
          />

          <Image
            zIndex='1'
            src={sounds[0].image}
            w={52}
            h={52}
          />

        </Center>
      </Flex>

      {/* <ReactPlayer
        // playing={state}

        url="https://soundcloud.com/ellaeyre/alok-ella-eyre-kenny-dope-feat-never-dull-deep-down"
      /> */}

      {/* <h1>asdasd</h1> */}
      {/* <iframe
        width="100%"
        height="450"
        scrolling="no"
        // frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1488114664&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      >
      </iframe> */}
    </DefaultLayout>
  )
}

export default Home
