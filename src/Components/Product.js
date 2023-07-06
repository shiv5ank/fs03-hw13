import React from 'react'
import {  WrapItem,Center,Divider,CardFooter,ButtonGroup,Button,CardBody,Card,Image,Stack,Heading,Text } from '@chakra-ui/react'
function Product({data}) {
  
  return (
    
    <WrapItem>
      <Center w='500px' h="auto"  boxShadow='dark-lg' p='6px' rounded='md' >
      <Card maxW='sm'>
  <CardBody>
    <Image  boxSize='200px'
      src={data.image
      }
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{data.title}</Heading>
      <Text>
        {data.description
}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${data.price
}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
      </Center>
      
    </WrapItem>
    
 
  )
}

export default Product