import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import WitIcon from "./witIcon";

const Header = () => {
  return (
    <Flex
      as="header"
      w={"100%"}
      p={"25px"}
      color={"white"}
      justify={'flex-start'}
      align={'flex-start'}
      gap={'35px'}
      fontFamily={'fonts.heading'}
      h={'65px'}
      flexDirection={'column'}
      position={'fixed'}
    >
      <WitIcon/>
      <Flex gap={'15px'} justify={'center'} align={'flex-start'} maxW={'800px'} flexDirection={'column'}  fontSize={'xl'}>
        <Link>My page</Link>
        <Link>Dialogs</Link>
        <Link>News</Link>
        <Link>Vacancies</Link>
        <Link>Resume</Link>
        <Link>Subscriptions</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
