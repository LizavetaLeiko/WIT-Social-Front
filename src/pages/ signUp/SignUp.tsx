import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DefaultBtn from "@/components/common/defaultBtn/DefaultBtn";
import TextInput from "@/components/common/TextInput/TextInput";
import CreateVacancy from "@/components/createVacOrRes/CreateVacOrRes";
import PasswordInput from "@/components/common/passwordInput/PasswordInput";


const SignUp = () =>{

  const {onOpen, isOpen, onClose} = useDisclosure();

  const finalRef = React.useRef(null)

  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('User');
  const [firstPassword, setFirstPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [secondPassword, setSecondPassword] = useState<string>("");
  const [notSame, setNotSame] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);

  const regularExpressionPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value)
  }

  const changeUserName = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setUserName(e.target.value)
  }

  const changeFirstPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstPassword(() => event.target.value);
    if (event.target.value.match(regularExpressionPassword)) {
      setError(false);
      console.log(firstPassword, error)
    } else {
      setError(true);
      console.log(firstPassword, error)
    }
  };

  const changeSecondPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondPassword(() => event.target.value);
    if(firstPassword === event.target.value){
      setNotSame(false);
    } else{
      setNotSame(true);
    }
  };

  useEffect(() => {
    if ( error || notSame || !email || !userName) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [error, notSame, email, userName]);

  return(<Flex justify={'center'} p={'100px 20px'} align={'flex-start'}>
    <Box maxWidth={'500px'} w={'100%'} textAlign={'center'} ref={finalRef}>
      <Text fontSize={'5xl'} fontWeight={'600'} m={'0 0 60px 0'}>Registration</Text>
      <TextInput placeholder="email" label="Enter your email" onChange={changeEmail} />
      <TextInput placeholder="nickname" label="Create your nickname" onChange={changeUserName}/>
      <PasswordInput title={"Create password"} onChange={changeFirstPassword} placeholder={"password"} helper={true} helperText={'Must contains at least 1 number, 1 Latin letter in upper and lower cases, and at least 8 symbols'}/>
      <PasswordInput title={"Repeate password"} onChange={changeSecondPassword} placeholder={"repeate password"} error={notSame} helperText={'Passwords are not the same'}/>
      <DefaultBtn title={"Sign Up"} margin={'50px 0 20px'} disabled={!formValid}/>
      <Button onClick={onOpen}>Open modal</Button>
      {
        isOpen && <CreateVacancy isOpen={isOpen} finalRef={finalRef} onClick={undefined} title={"Create resume"} onClose={onClose}/>
      }
    </Box>
  </Flex>)
}

export default SignUp;