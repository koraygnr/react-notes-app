import React from 'react'
import { Link, Show, Hide } from '@chakra-ui/react'


function Footer() {
  return (

    <>
    <Show above='sm'>
    </Show>
    <Hide below='lg'>
      <Link
      position="absolute"
      bottom="1em"
      color="gray.500"
      fontWeight="300"
      fontSize="0.8rem"
      href='https://github.com/koraygnr'
      mb="16px"
      >
      Created by Koray Güner
      </Link>
    </Hide>
    </>

  )
}

export default Footer