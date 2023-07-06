import React from 'react'
import { Heading,Box,Button} from '@chakra-ui/react'
function Contact({setIsProduct}) {
  return (
  <Box textAlign='center'><Heading color='red'>Product Catlog</Heading>
  <Button mt='20px' onClick={()=>(setIsProduct(true))}></Button>
  </Box>
  )
}

export default Contact