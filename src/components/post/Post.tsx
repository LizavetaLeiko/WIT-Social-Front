import { PostsApi } from "@/redux/redusers/postsApi";
import { IPost } from "@/utils/Interfaces";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const Post = (props: IPost) =>{

  return(<Box>
    <Flex>
      <Image src={"/assets/imgs2/defaultPhoto.png"} alt="User photo" width={50} height={50}/>
      <Box>
        <Text>{}</Text>
        <Text></Text>
      </Box>
    </Flex>
    <Text></Text>
    <Text></Text>
  </Box>)
}

export default Post;
