import React from 'react'
import { Text, Box, Spacer } from '@chakra-ui/react'
import Form from "../Form"
import Footer from '../Footer'
import Category from '../Category'


function Aside() {
  return (

    <Box w="40%" minW="300px" display="flex" flexDirection='column' justifyContent="center" alignItems="center" bg='gray.200'>
      <Spacer/>
      <Text fontSize='3xl' fontWeight="300" color="gray.600"  p="3" textShadow='0 0 2px #4A5568'>My<span style={{ fontWeight: "500" }}>Notes</span></Text>
      {/* Form Component */}
      <Form />
      {/* Category Component */}
      <Category/>
      <Spacer/>
      {/* Footer Component */}
      <Footer/>
    </Box>
  )
}

export default Aside