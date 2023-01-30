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
}


const DefaultBtn = (props: IBtn) =>{

  return(
    <Button p={props.padding ? props.padding : '30px'} 
            disabled={props.disabled ? props.disabled : false} 
            onClick={props.onClick} 
            m={props.margin ? props.margin : '0px'}  
            maxWidth={props.maxW ? props.maxW : '300px'}
            colorScheme={'brand.purple'}
            fontSize={props.fSize ? props.fSize : 'xl'}
            fontWeight={props.fWeight ? props.fWeight : '700'}
            w={'100%'}
            >
              {props.title}
    </Button>
  )
}

export default DefaultBtn;