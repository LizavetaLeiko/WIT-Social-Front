import { Box,Text, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure, Textarea, Flex } from "@chakra-ui/react";
import { useState } from "react";

interface IDefModal{
  isOpen: boolean,
  finalRef: any,
  title: string,
  text: string,
  onClose: any,
}

const DefModal = (props: IDefModal) =>{

  return<Modal finalFocusRef={props.finalRef} isOpen={props.isOpen} onClose={props.onClose}>
  <ModalOverlay />
  <ModalContent color={'#000'} maxW={'600px'} w={'100%'} m={'15% auto'}>
    <ModalHeader fontSize={'2xl'} textAlign={'center'} m={'10px 0 0 0'}>{props.title}</ModalHeader>
    <ModalCloseButton/>
    <ModalBody>
      <Text textAlign={'center'} m={'0 0 20px 0'}>{props.text}</Text>
    </ModalBody>
  </ModalContent>
</Modal>
}

export default DefModal;