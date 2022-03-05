import { Box, Button, Container, FormControl, FormHelperText, FormLabel, HStack, Input, InputGroup, InputRightElement, Link, Stack, Text, VStack, Wrap } from '@chakra-ui/react'
import React from 'react'

export const Login = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
            <Container mt={"100px"} maxW='container.sm' centerContent borderColor="gray.100" borderWidth={4} borderRadius="2%" p={10} >
                    <FormControl variant="floatingLabel" >
                        <VStack spacing={0} mb={9} >
                            <Text>icono</Text>
                            <Text fontSize={50} fontWeight={"bold"}>Bienvenido</Text>
                        </VStack>

                        <FormLabel fontWeight={400} htmlFor='email'>Direccion de correo</FormLabel>
                        <Input id='email' type='email' />
                        
                        <FormLabel fontWeight={400} htmlFor='password'>Contraseña</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Link fontSize={20}>Olvidaste tu contrasenia?</Link>

                        <HStack justifyContent={"space-between"} m={2}>
                            <Link fontSize={50}>Crear cuenta</Link>
                            <Button colorScheme='blue'>Entrar</Button>
                        </HStack>
                    </FormControl>
            </Container>
    )
}
