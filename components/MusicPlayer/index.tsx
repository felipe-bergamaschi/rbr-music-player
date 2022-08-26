import { Text, Flex, Container, Image, Icon } from '@chakra-ui/react'
import { MdClose, MdPause, MdPlayCircleOutline } from 'react-icons/md'

import { SoundProps } from '@services'

type Props = {
  sound: SoundProps | null,
  playing: boolean,
  onStop: () => void,
  onPausePlay: () => void,
}

export function MusicPlayer({ sound, onStop, playing, onPausePlay }: Props) {
  if (sound === null) return null

  return (
    <Container
      position='absolute'
      bottom={0}
      left={0}
      maxW='100%'
      h='72px'
      bg='brand.800'
      py={0}
      px={[4]}
    >
      <Flex
        alignItems='center'
        justifyContent='space-between'
        h='100%'
      >
        <Flex gap={4}>
          <Image
            src={sound.image}
            borderRadius={5}
            w={10}
            h={10}
          />

          <Flex flexDirection='column'>
            <Text
              fontSize='sm'
              fontWeight='medium'
            >
              {sound.artist}
            </Text>

            <Text
              fontSize='xs'
              fontWeight='medium'
              color='text.700'
              noOfLines={1}
            >
              {sound.musicName}
            </Text>
          </Flex>
        </Flex>

        <Flex gap={4}>
          <Icon
            as={MdClose}
            width={6}
            height={6}
            onClick={onStop}
          />

          {playing ? (
            <Icon
              as={MdPause}
              width={6}
              height={6}
              onClick={onPausePlay}
            />
          ) : (
            <Icon
              as={MdPlayCircleOutline}
              width={6}
              height={6}
              onClick={onPausePlay}
            />
          )}

        </Flex>
      </Flex>
    </Container>
  )
}