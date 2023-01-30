import { Box,Text, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure, Textarea, Flex } from "@chakra-ui/react";
import { useState } from "react";
import DefaultBtn from '../common/defaultBtn/DefaultBtn';
import TextInput from "../common/TextInput/TextInput";
import SelectInput from "../common/selectInput/SelectInput";

interface ICreateVacOrRes{
  isOpen: boolean,
  finalRef: any,
  onClick: any,
  title: string,
  file?: boolean,
  onClose: any,
}

const CreateVacOrRes = (props: ICreateVacOrRes) =>{

  const directions = ['FrontEnd', 'BackEnd', 'FullStack', 'Mobile', 'DevOps', 'Game dev', 'QA', 'Analytics', 'Design', 'Magagement', 'Security', 'Administration', 'Support', 'Matketing', 'Sales', 'HR & Recruting', 'Other'];
  const levels = ['Trainy', 'Junior', 'Middle', 'Senior', 'Lead'];
  const years = [ '0+', '1+', '2+', '3+', '5+', '7+', '10+'];
  
  const [position, setPosition] = useState<string>('');
  const [location, setLocation] = useState<string>('Remote');
  const [direction, setDirection] = useState<string>(directions[0]);
  const [level, setLevel] = useState<string>(levels[0]);
  const [experience, setExperience] = useState<string>(years[0]);
  const [salaryFrom, setSalaryFrom] = useState<number>(0);
  const [salaryTo, setSalaryTo] = useState<number>(1000000);
  const [tech, setTech] = useState<Array<string>>([]);
  const [desc, setDesc] = useState<string>('');


  const changePosition = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setPosition(e.target.value)
  }

  const changeLocation = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setLocation(e.target.value)
  }

  const changeDirection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDirection(e.target.value);
  };

  const changeLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLevel(e.target.value);
  };

  const changeExperience = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setExperience(e.target.value);
  };

  const changeSalaryFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalaryFrom(+e.target.value);
  };

  const changeSalaryTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalaryFrom(+e.target.value);
  };

  const changeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setDesc(e.target.value)
  }


  return<Modal finalFocusRef={props.finalRef} isOpen={props.isOpen} onClose={props.onClose}>
  <ModalOverlay />
  <ModalContent color={'#000'} maxW={'700px'} w={'100%'}>
    <ModalHeader fontSize={'3xl'} textAlign={'center'} m={'25px 0 0'}>{props.title}</ModalHeader>
    <ModalCloseButton/>
    <ModalBody>
      <TextInput onChange={changePosition} label={"Position"} placeholder={"For example, Frontend developer"}/>
      <TextInput onChange={changeLocation} label={"Location"} placeholder={"For example, Moscow"} isRequired={false}/>
      <SelectInput arr={directions} onChange={changeDirection} title={'Direction'} value={direction}/>
      <SelectInput arr={levels} required={false} onChange={changeLevel} title={'Level'} value={level}/>
      <SelectInput arr={years} onChange={changeExperience} title={'Experience'} value={experience}/>
      <FormControl m={'0 0 30px 0'}>
        <FormLabel fontSize={'xl'} m={'10px 0 0'}>Salary (mounthly)</FormLabel>
        <Flex justify={'flex-start'} align={'center'} gap={'5px'}>
          <Input type='number' variant='flushed' placeholder={'500'} onChange={changeSalaryFrom}/>
          <Text>-</Text>
          <Input type='number' variant='flushed' placeholder={'1000'} onChange={changeSalaryTo}/>
          <Text m={'0 5px'}>$</Text>
        </Flex>
      </FormControl>
      <Textarea resize={'none'} h={'350px'} variant='outline' onChange={changeDesc} placeholder={'Describe your vacancy in detail'}/>
    </ModalBody>
    <ModalFooter>
      <DefaultBtn title={"Создать вакансию"} onClick={props.onClick} disabled={true} maxW={'200px'} margin={'15px'} fWeight={'400'} padding={'25px'}/>
      <DefaultBtn title={"Отменить"} onClick={props.onClick} disabled={true} maxW={'200px'} fWeight={'400'} padding={'25px'}/>
    </ModalFooter>
  </ModalContent>
</Modal>
}

export default CreateVacOrRes;