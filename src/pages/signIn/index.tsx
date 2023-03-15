import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DefaultBtn from "@/components/common/defaultBtn/DefaultBtn";
import TextInput from "@/components/common/TextInput/TextInput";
import PasswordInput from "@/components/common/passwordInput/PasswordInput";
import { useDispatch } from "react-redux";
import { login } from "@/redux/redusers/userReduser";



const SignIn = () =>{

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>("");
  const [visability, setVisability] = useState<boolean>(false);

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value)
  }

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };


  const toggleVisability = (event: React.FormEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    setVisability(!visability)
  }

  const dispatch = useDispatch();
  const handleLogin =() =>{
    dispatch(login({email: email, password: password}))
  }

  return(<Flex justify={'center'} p={'65px 20px'} align={'center'} h={'100vh'}>
    <Box maxWidth={'500px'} w={'100%'} textAlign={'center'}>
      <Text fontSize={'5xl'} fontWeight={'600'} m={'0 0 60px 0'}>SignIn</Text>
      <TextInput placeholder="email" label="Enter your email" onChange={changeEmail}/>
      <PasswordInput title={"Your password"} onChange={changePassword} placeholder={"password"}/>
      <DefaultBtn title={"Sign In"} margin={'50px 0 20px'} onClick={handleLogin}/>
    </Box>
  </Flex>)
}

export default SignIn;