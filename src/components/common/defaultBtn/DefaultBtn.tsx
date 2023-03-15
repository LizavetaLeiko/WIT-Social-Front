import { Button } from "@chakra-ui/react";

interface IBtn{
  title: string,
  disabled?: boolean,
  onClick?: any,
  maxW?: string,
  padding?: string,
  margin?: string,
  fSize?: string,
  fWeight?: string,
  value?: string
}


const DefaultBtn = (props: IBtn) =>{

  return(
    <Button p={props.padding ? props.padding : '25px'} 
            isDisabled={props.disabled ? props.disabled : false}
            onClick={props.onClick} 
            m={props.margin ? props.margin : '0px'}  
            maxWidth={props.maxW ? props.maxW : '300px'}
            colorScheme={'brand.purple'}
            fontSize={props.fSize ? props.fSize : 'xl'}
            fontWeight={props.fWeight ? props.fWeight : '700'}
            w={'100%'}
            value={props.value ? props.value : ''}
            >
              {props.title}
    </Button>
  )
}

export default DefaultBtn;