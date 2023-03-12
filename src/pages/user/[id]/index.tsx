import DefaultBtn from "@/components/common/defaultBtn/DefaultBtn";
import CreatePostForm from "@/components/createPostForm/CreatePostForm";
import { userDataApi } from "@/redux/redusers/userDataApi";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";


const UserPage = () =>{

  const { data: userData,  error, isLoading } = userDataApi.useGetUserDataQuery('63ecdd30bc318d56ef2fcbe9')

  useEffect( ()=>{
    console.log(userData)
  }, [])

  const {onOpen, isOpen, onClose} = useDisclosure();
  const finalRef = useRef(null)


  return(<Flex justify={'center'} align={'start'}>
    <Flex justify={'space-between'} p={'80px 20px'} align={'start'} h={'100vh'} w={'65%'} gap={'10px'}>
    <Box w={'100%'} fontSize={'2xl'} ref={finalRef}>
      <Box backgroundColor={"whiteAlpha.300"} p={'10px 20px 20px'} borderRadius={'5px'} marginBottom={'5px'}>
        <Text fontSize={'5xl'}>{userData?.name}</Text>
        <Text opacity={'70%'}>@{userData?.userId.nickname}</Text>
      </Box>
      <Flex marginBottom={'5px'} flexDirection={'column'} gap={'10px'} backgroundColor={"whiteAlpha.300"} p={'20px'} borderRadius={'5px'}>
        <Flex gap={'10px'}>
          <Text fontWeight={'light'}>Speciality:</Text>
          <Text>{userData?.speciality}</Text>
        </Flex>
        <Flex gap={'10px'}>
          <Text fontWeight={'light'}>Birth-day:</Text>
          <Text>{userData?.bDay}</Text>
        </Flex>
        <Flex gap={'10px'}>
          <Text fontWeight={'light'}>Location:</Text>
          <Text>{userData?.location}</Text>
        </Flex>
        <Flex gap={'10px'}>
          <Text fontWeight={'light'}>About me:</Text>
          <Text>{userData?.description}</Text>
        </Flex>
      </Flex>
      <Box backgroundColor={"whiteAlpha.300"} p={'10px 20px 20px'} borderRadius={'5px'} marginBottom={'5px'} padding={'10px'}>
        <DefaultBtn title={"Create new post"} onClick={onOpen} maxW={'100%'} fSize={'2xl'} fWeight={'500'}/>
      </Box>
      <CreatePostForm isOpen={isOpen} finalRef={finalRef} onClick={undefined} onClose={onClose}/>
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