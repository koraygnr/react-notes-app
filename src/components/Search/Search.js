import React, { useEffect, useState } from 'react'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useDispatch } from "react-redux"
import { findNote } from "../../redux/notes/notesSlice"

function Search() {

    const [ search, setSearch ] = useState("")   
    const dispatch = useDispatch()

    
    useEffect ( () => {
        dispatch(findNote(search))
    },[search])


    return (
        <Box display="flex" m="0 auto" justifyContent="center" alignItems="center" textAlign="center" bg='white' rounded='xl' w="25%" minW="200px" boxShadow='lg' > 
        <Box position="fixed" zIndex="1" bg='white' rounded='xl'>
        <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                />
                <Input 
                type='text' 
                value={search}
                onChange={ (e) => setSearch(e.target.value)}
                placeholder='Note Search' 
                border="0" 
                focusBorderColor='none'
                fontWeight="300"
                spellCheck="false"
                 />
            </InputGroup> 
        </Box> 
            
        </Box>
    )
}

export default Search