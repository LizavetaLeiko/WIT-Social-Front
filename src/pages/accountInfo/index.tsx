import DefaultBtn from "@/components/common/defaultBtn/DefaultBtn";
import TextInput from "@/components/common/TextInput/TextInput";
import { userDataApi } from "@/redux/redusers/userDataApi";
import { Box, Flex, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { userBaseInfoApi } from "@/redux/redusers/userBaseInfoApi";

const AccountInfo = ()=>{
  
  const [name, setName] = useState<string>('');
  const [speciality, setSpeciality] = useState<string>("");
  const [location, setLocation] = useState<string>('');
  const [bDay, setBDay] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setName(e.target.value)
  }

  const changeSpeciality = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeciality(event.target.value);
  };

  const changeLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const changeBDay = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBDay(event.target.value);
  };

  const changeDesc = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDesc(event.target.value);
  };

  const aploadPhoto = async (file: any) =>{
    const data = new FormData();
    data.append('photo', file);
    data.append('WITaccountPhotos', 'AccountPhoto');

    try{
      const res = await axios.post('https://res.cloudinary.com/accountphotos/upload', data)
      const { photoURL } = res.data;
      console.log(photoURL)
      return photoURL;
    }
    catch(e){
      console.log(e)
    }
  }


  const [setUserData, {isLoading, error}] = userDataApi.useSetUserDataMutation();
  const { data: UserBaseInfo } = userBaseInfoApi.useGetUserBaseInfoQuery('63ecdd30bc318d56ef2fcbe9')


  const handleSetUserData = async()=>{
      await setUserData({
        name: name, 
        speciality: speciality, 
        location: location,
        userId: {
          email: UserBaseInfo?.email,
          nickname: UserBaseInfo?.nickname,
        },
        bDay: bDay,
        description: desc
      });
  }

  return(
    <Flex justify={'center'} p={'100px 20px'} align={'flex-start'}>
    <Box maxWidth={'500px'} w={'100%'} textAlign={'left'}>
    <Text fontSize={'5xl'} fontWeight={'600'} m={'0 0 60px 0'} textAlign={'center'}>Account Information</Text>
      <FormControl isRequired={false} m={'0 0 40px 0'}>
        <FormLabel fontSize={'xl'} m={'0 0 10px 0 '}>Your photo</FormLabel>
        <Box position={'relative'}>
          <Input position={'relative'} cursor={'pointer'} zIndex={'5'} type='file' onChange={aploadPhoto} h={'150px'} w={'150px'} opacity={'0'} />
          <Box position={'absolute'} zIndex={'4'} top={'0'} left={'0'}>
            <Image src={'assets/imgs/plus.svg'} alt={"Add photo"} width={150} height={150}/>
          </Box>
        </Box>

      </FormControl>
      <TextInput placeholder="Ivan Ivanov" label="Add your name" onChange={changeName}/>
      <TextInput placeholder="Backend developer (middle)" label="Add your speciality" onChange={changeSpeciality}/>
      <FormControl isRequired={false} m={'0 0 40px 0'}>
        <FormLabel fontSize={'xl'} m={'0 0 10px 0'}>Your B-day</FormLabel>
        <Input type='date' onChange={changeBDay} placeholder={'01.01.2000'} maxW={'200px'} w={'100%'}/>
      </FormControl>
      <TextInput placeholder="Minsk (Belarus)" label="What is your location?" onChange={changeLocation} isRequired={false}/>
      <Textarea resize={'none'} h={'350px'} variant='outline' onChange={changeDesc} placeholder={'Tell something about you'}/>
      <DefaultBtn title={"Save"} margin={'50px 0 20px'} maxW={'230px'} fWeight={'600'} padding={'27px'} onClick={handleSetUserData}/>
    </Box>
  </Flex>
  )
}

export default AccountInfo;