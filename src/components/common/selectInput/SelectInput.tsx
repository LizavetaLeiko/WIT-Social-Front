import { Box, Select, Text } from "@chakra-ui/react";
import { v4 } from "uuid";

interface ISelect{
  arr: Array<string>,
  onChange: any,
  title: string,
  required?: boolean,
  value: string,
}


const SelectInput = (props : ISelect) =>{
  return(
    <Box>
      <Text fontSize={'xl'} m={'10px 0'}>{props.title}</Text>
      <Select m={'0 0 30px 0'} onChange={props.onChange} placeholder={props.value} required={props.required ? props.required : true }>
            {
              props.arr.map((item)=>{
                return(
                    <option style={{padding: '0 5px', border: '0.5px solid #933EFF'}} key={v4()} value={item}>
                      {item}
                    </option>
                  )
              })
            }
      </Select>
    </Box>
    
  )
}

export default SelectInput;