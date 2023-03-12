import { AttachmentIcon } from "@chakra-ui/icons";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Textarea, ModalFooter, Button} from "@chakra-ui/react";
import { useState } from "react";
import DefaultBtn from "../common/defaultBtn/DefaultBtn";
import TextInput from "../common/TextInput/TextInput";

interface ICreatePostForm{
  isOpen: boolean,
  finalRef: any,
  onClick: any,
  onClose: any,
}

const CreatePostForm = (props: ICreatePostForm )=>{

  const [header, setHeader] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [file, setFile] = useState<any>('');

  const handleHeader = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setHeader(event.target.value)
  }
  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    setText(event.target.value)
  }


  return(
    <Modal finalFocusRef={props.finalRef} isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent color={'#000'} maxW={'600px'} w={'100%'}>
        <ModalHeader fontSize={'3xl'} textAlign={'center'} m={'25px 0'}>Create Post</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <TextInput onChange={handleHeader} label={"Header"} placeholder={"Hello"}/>
          <Textarea  resize={'none'} h={'350px'} variant='outline' onChange={handleText} placeholder={'Your post'}/>
          <Button marginTop={'25px'} backgroundColor={'transparent'}  _hover={{ bg: 'tranparent' }} _active={{ bg: 'tranparent' }}>
            <AttachmentIcon boxSize={'12'} padding={'10px '}/>
          </Button>
        </ModalBody>
      <ModalFooter justifyContent={'start'}  gap={'20px'}>
        <DefaultBtn title={"Create"} onClick={props.onClick}  maxW={'200px'} fWeight={'400'} padding={'25px'}/>
        <DefaultBtn title={"Cancel"} onClick={props.onClose} maxW={'200px'} fWeight={'400'} padding={'25px'}/>
      </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CreatePostForm;