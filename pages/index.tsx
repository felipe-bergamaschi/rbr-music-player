import type { NextPage } from 'next'
import { DefaultLayout } from '@layouts'
import { Container, Flex, Center, Image } from '@chakra-ui/react'

import ReactPlayer from "react-player"
import { useEffect, useRef, useState } from 'react'

import { sounds, SoundProps } from '@services'
import { MusicItem } from '@components/MusicItem'
import { Title } from '@components/Title'
import { MusicPlayer } from '@components/MusicPlayer'

type state = {
  url: string | undefined;
  pip: boolean;
  playing: boolean;
  controls: boolean;
  light: boolean;
  volume: number;
  muted: boolean;
  played: number;
  loaded: number;
  duration: number;
  playbackRate: number;
  loop: boolean;
  visible: boolean;
}

type ProgressProps = {
  played: number;
  playedSeconds: number;
  loaded: number;
  loadedSeconds: number;
}

const Home: NextPage = () => {
  const ref = useRef(null)
  const [currentMusic, setCurrentMusic] = useState<SoundProps | null>(null)
  const [player, setPlayer] = useState<state>({
    url: undefined,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    visible: false,
  })

  function handlePlay(sound: SoundProps) {
    if (sound.id !== currentMusic?.id) setCurrentMusic(sound)

    setPlayer((value) => ({
      ...value,
      url: sound.url,
      played: 0,
      playing: true,
      loaded: 0,
      pip: false
    }))
  }

  function handlePlayStop() {
    setCurrentMusic(null)
    setPlayer((value) => ({ ...value, url: undefined, playing: false }))
  }

  function handlePause() {
    setPlayer((value) => ({ ...value, playing: !value.playing }))
  }

  useEffect(() => {
    setPlayer((value) => ({ ...value, visible: true, }))
  }, [])

  return (
    <DefaultLayout>
      <Flex p={0} height='100%'>
        <Flex
          maxW='100%'
          p={[
            4,
            4,
            6,
          ]}
          flex={1}
          flexDirection='column'
        >
          <Title>
            O melhor de cada artista
          </Title>

          {sounds.map((sound) => (
            <MusicItem
              key={sound.id}
              sound={sound}
              onClick={handlePlay}
            />
          ))}
        </Flex>

        <Center
          position='relative'
          maxW='100%'
          maxH='100%'
          px={6}
          flex={1}
          bg={currentMusic?.bg ? currentMusic.bg : 'transparent'}
          overflow='hidden'
          display={[
            'none',
            'none',
            'none',
            'none',
            'flex',
          ]}
        >
          {currentMusic && (<>
            <Image
              zIndex='0'
              position='absolute'
              top={0}
              left={0}
              w='100%'
              h='100%'
              src={currentMusic.image}
              borderRadius={5}
              style={{ filter: 'blur(24px)' }}
              opacity={.7}
            />

            <Image
              zIndex='1'
              src={currentMusic.image}
              w={52}
              h={52}
            />
          </>)}
        </Center>
      </Flex>

      <MusicPlayer
        sound={currentMusic}
        playing={player?.playing}
        onPausePlay={handlePause}
        onStop={handlePlayStop}
      />

      <Container
        position='absolute'
        bottom={0}
        left={0}
        zIndex={-1}
      >
        {player.visible && (
          <ReactPlayer
            ref={ref}
            className='react-player'
            width='1px'
            height='1px'
            url={player.url}
            pip={player.pip}
            playing={player.playing}
            controls={player.controls}
            light={player.light}
            loop={player.loop}
            playbackRate={player.playbackRate}
            volume={player.volume}
            muted={player.muted}
          />
        )}
      </Container>
    </DefaultLayout>
  )
}

export default Home
