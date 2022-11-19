import React from 'react'
import { Box } from '@chakra-ui/react'
import NoteBox from '../NoteBox'
import Search from '../Search'


function Section() {
  return (
    
    <Box w="100%" minW="300px" bg='gray.200' p="10" overflow="auto">
      <Search/>
      <NoteBox/>
    </Box>
  )
}

export default Section