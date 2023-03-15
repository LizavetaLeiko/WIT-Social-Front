import DefaultBtn from "@/components/common/defaultBtn/DefaultBtn";
import CreatePostForm from "@/components/createPostForm/CreatePostForm";
import CreateVacOrRes from "@/components/createVacOrRes/CreateVacOrRes";
import { useAppSelector } from "@/redux/types";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";


const UserPage = () =>{

  const user = useAppSelector((state) =>state.userSlice.user); 
  useEffect(() =>{
    console.log(user)
  })

  const {onOpen: firstModalOnOpen, isOpen: firstModalIsOpen, onClose: firstModalOnClose} = useDisclosure();
  const {onOpen: secondModalOnOpen, isOpen: secondModalIsOpen, onClose: secondModalOnClose} = useDisclosure();
  const refPost = useRef(null);
  const refVac = useRef(null);

  const [typeOfPost, setTypeOfPost] = useState<string>('');

  const handleTypeOfPost = (e: any) =>{
    setTypeOfPost(e.target.value)
    secondModalOnOpen()
  }

  return(<Flex justify={'center'} align={'start'} ref={refPost}>
    <Flex justify={'space-between'} ref={refVac} p={'40px 20px'} align={'start'} h={'100vh'} w={'65%'} gap={'10px'}>
    <Box w={'100%'} fontSize={'xl'}>
      <Box backgroundColor={"whiteAlpha.300"} p={'10px 20px 20px'} borderRadius={'5px'} marginBottom={'5px'}>
        <Text fontSize={'4xl'}>{user.userDataId?.name}</Text>
        <Text opacity={'70%'}>@{user.nickname}</Text>
      </Box>
      <Flex marginBottom={'5px'} flexDirection={'column'} gap={'10px'} backgroundColor={"whiteAlpha.300"} p={'20px'} borderRadius={'5px'}>
        <Flex gap={'10px'}>
          <Text fontWeight={'light'}>Speciality:</Text>
          <Text>{user.userDataId.speciality}</Text>
        </Flex>
        <Flex gap={'10px'}>
          <Text fontWeight={'light'}>Birth-day:</Text>
          <Text>{user.userDataId.bDay}</Text>
        </Flex>
        <Flex gap={'10px'}>
          <Text fontWeight={'light'}>Location:</Text>
          <Text>{user.userDataId.location}</Text>
        </Flex>
        <Flex gap={'10px'}>
          <Text fontWeight={'light'}>About me:</Text>
          <Text>{user.userDataId.description}</Text>
        </Flex>
      </Flex>
      <Flex  backgroundColor={"whiteAlpha.300"} gap={'10px'} p={'10px 20px 20px'} borderRadius={'5px'} marginBottom={'5px'} padding={'10px'}>
        <DefaultBtn title={"Create new post"} onClick={firstModalOnOpen} maxW={'100%'} fWeight={'500'} padding={'15px'}/>
        <DefaultBtn title={"Create vacancy"} onClick={handleTypeOfPost} maxW={'100%'} fWeight={'500'} padding={'15px'} value={'vacancy'}/>
        <DefaultBtn title={"Create resume"} onClick={handleTypeOfPost} maxW={'100%'} fWeight={'500'} padding={'15px'} value={'resume'}/>
      </Flex>
      <CreatePostForm isOpen={firstModalIsOpen} finalRef={refPost} onClick={undefined} onClose={firstModalOnClose}/>
      <CreateVacOrRes isOpen={secondModalIsOpen} finalRef={refVac} onClick={undefined} title={typeOfPost === 'vacancy' ? "Create vacancy" : "Create resume"} onClose={secondModalOnClose}/>
      </Box>
    <Box>
      <Box marginBottom={'10px'}>
        <Image width={300}
          height={450}
          src={"/assets/imgs2/defaultPhoto.png"}
          alt="User photo"/>
      </Box>
      <DefaultBtn title={"messages"} maxW={'300px'} onClick={undefined}/>
    </Box>
  </Flex>
  </Flex>)
}

export default UserPage;