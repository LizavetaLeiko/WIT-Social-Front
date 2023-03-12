import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface IInput {
  onChange: any,
  label: string,
  isRequired?: boolean,
  placeholder: string,
}

const TextInput = (props: IInput) =>{
  return<FormControl isRequired={props.isRequired ? props.isRequired : true } m={'0 0 40px 0'}>
  <FormLabel fontSize={'2xl'} m={'0 0 5px 0'}>{props.label}</FormLabel>
  <Input type='text' variant='flushed' onChange={props.onChange} placeholder={props.placeholder}/>
</FormControl>
}

export default TextInput;