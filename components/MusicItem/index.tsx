import { Icon, Text, Flex, Avatar } from '@chakra-ui/react'
import { MdPlayCircleOutline, MdOutlineFavorite } from 'react-icons/md'
import { SoundProps } from '@services'

export function MusicItem({ artist, bg, id, image, musicName, url }: SoundProps) {
  return (
    <Flex
      maxW='100%'
      px={4}
      py={2}
      alignItems='center'
      justifyContent='space-between'
      gap={4}
      cursor='pointer'
      _hover={{
        bg: 'brand.50'
      }}
      borderRadius={6}
    >
      <Flex
        alignItems='center'
        gap={4}
      >
        <Text
          fontSize='sm'
          fontWeight='medium'
        >
          {id}
        </Text>

        <Avatar
          src={image}
          borderRadius={5}
          w={10}
          h={10}
        />

        <Flex flexDirection='column' >
          <Text
            fontSize='sm'
            fontWeight='medium'
          >
            {artist}
          </Text>

          <Text
            fontSize='xs'
            fontWeight='medium'
            color='text.700'
            noOfLines={1}
          >
            {musicName}
          </Text>
        </Flex>
      </Flex>

      <Flex
        alignItems='center'
        gap={4}
      >
        <Icon
          as={MdOutlineFavorite}
          width={6}
          height={6}
        />

        <Icon
          as={MdPlayCircleOutline}
          width={6}
          height={6}
        />
      </Flex>
    </Flex>
  )
}