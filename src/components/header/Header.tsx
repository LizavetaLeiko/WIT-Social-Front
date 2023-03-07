import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
  return (
    <Flex
      as="header"
      w={"100%"}
      p={"10px 25px"}
      color={"white"}
      justify={'flex-start'}
      align={'flex-start'}
      gap={'30px'}
      fontFamily={'fonts.heading'}
      h={'65px'}
      flexDirection={'column'}
      position={'fixed'}
    >
      <Flex justify={'space-between'} align={'center'} w={'100%'}>
      <Flex position="relative" w="85.5px" h="48px" justify={'center'} align={'center'} m={'0 0 20px 0'}>
        <Image
          width={85.5}
          height={34}
          src={"assets/imgs/wit1.svg"}
          alt="WIT social network"
        />
      </Flex>
      <Flex as="div" flexDirection={'column'} justify={'center'} align={'center'}>
        <Avatar name="user" size={"sm"}  bg={'brand.purple.500'} color={"white"}/>
        <Text  fontSize={'sm'}>Пользователь</Text>
      </Flex>
      </Flex>
      <Flex gap={'20px'} justify={'center'} align={'flex-start'} maxW={'800px'} flexDirection={'column'}  fontSize={'xl'}>
        <Link>Мои диалоги</Link>
        <Link>Новости</Link>
        <Link>Вакансии</Link>
        <Link>Подписки</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
