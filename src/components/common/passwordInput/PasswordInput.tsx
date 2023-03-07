import {Text, Button, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

interface IPasswordInput{
  title: string,
  onChange: any,
  placeholder: string,
  helper?: boolean,
  helperText?: string,
  error?: boolean,
  errorText?: string,
}

const PasswordInput = (props: IPasswordInput) =>{
  
  const [visability, setVisability] = useState<boolean>(false);

  const toggleVisability = (event: React.FormEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    setVisability(!visability)
  }

  return(
    <FormControl isRequired m={'0 0 30px 0'}>
        <FormLabel fontSize={'xl'} m={'0 0 5px 0'}>{props.title}</FormLabel>
        <InputGroup>
          <Input variant='flushed' onChange={props.onChange} type={visability ? 'text' : 'password'} placeholder={props.placeholder}/>
          <InputRightElement width='4.5rem'>
            <Button bg={'transparent'} onClick={toggleVisability} variant="link">
              <Image src={'assets/imgs/eye1.svg'} width={25} height={25} alt={"Toggle visability"}/>
            </Button>
            </InputRightElement>
        </InputGroup>
        {
          props.helper &&
          <FormHelperText textAlign={'left'}>{props.helperText}</FormHelperText>
        }
        {
          props.error 
          &&
          <Text textAlign={'left'} m={'15px 0'} color={'red.500'}>{props.errorText}</Text>
        }
  </FormControl>
  )
}

export default PasswordInput;