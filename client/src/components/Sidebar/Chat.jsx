import React, { useState } from 'react';
import {
  Box, Flex, Spacer, Avatar, AvatarBadge, Stack, Text, IconButton,
  Input, InputGroup,
  InputRightElement, Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel,
} from '@chakra-ui/react';
import {
  FiPhone,
  FiVideo, FiColumns,
  FiSquare, FiPlusCircle, FiImage, FiPaperclip, FiSend, FiSmile,
} from 'react-icons/fi';
import Scrollbars from 'react-custom-scrollbars';

export default function Chat() {
  const [isShowInfo, setShowInfo] = useState(false);
  function toggleInfoLayout() {
    setShowInfo(!isShowInfo);
  }
  return (
    <Flex h="100vh">
      <Flex
        direction="column"
        bg="gray.400"
        flex="1"
        position="relative"
        borderRight={isShowInfo ? '1px' : '0px'}
        borderColor="gray.200"
      >
        <Flex
          position="absolute"
          h="80px"
          w="100%"
          alignItems="center"
          px={4}
          bg="white"
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Avatar name="Quang" size="md">
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
          <Stack spacing={0} ml={4}>
            <Text fontSize="lg" fontWeight="semibold">Hoàng Việt</Text>
            <Text fontSize="sm" color="gray.500">Online</Text>
          </Stack>
          <Spacer />
          <IconButton aria-label="Call" icon={<FiPhone />} variant="ghost" fontSize="xl" borderRadius={4} colorScheme="purple" />
          <IconButton aria-label="Video Call" icon={<FiVideo />} variant="ghost" fontSize="xl" borderRadius={4} colorScheme="purple" />
          <IconButton
            aria-label="Show Info"
            icon={!isShowInfo ? <FiColumns /> : <FiSquare />}
            variant="ghost"
            fontSize="xl"
            borderRadius={4}
            colorScheme="purple"
            onClick={toggleInfoLayout}
          />
        </Flex>
        {/* Chat Space */}
        <Flex direction="column-reverse" align="flex-end" flex="1" bg="white">
          <h1>chat heare</h1>
        </Flex>

        {/* Chat Space */}
        <Flex h="55px" bg="white" alignItems="center" px={2}>
          <IconButton aria-label="Call" icon={<FiPlusCircle />} variant="ghost" fontSize="xl" borderRadius={4} colorScheme="purple" />
          <IconButton aria-label="Video Call" icon={<FiImage />} variant="ghost" fontSize="xl" borderRadius={4} colorScheme="purple" />
          <IconButton aria-label="Video Call" icon={<FiPaperclip />} variant="ghost" fontSize="xl" borderRadius={4} colorScheme="purple" />
          <InputGroup size="md" mx={2} bg="gray.100" borderRadius="full">
            <Input
              placeholder="Aa"
              borderRadius="full"
            />
            <InputRightElement>
              <IconButton icon={<FiSmile />} variant="ghost" fontSize="xl" isRound colorScheme="purple" />
            </InputRightElement>
          </InputGroup>
          <IconButton icon={<FiSend />} variant="ghost" fontSize="xl" colorScheme="purple" borderRadius={4} />
        </Flex>
      </Flex>
      {isShowInfo && (
        <Flex direction="column" w="380px" align="center" mt={6}>
          <Avatar name="Quang" size="xl" mb={4}>
            <AvatarBadge boxSize=".8em" bg="green.500" border="4px" />
          </Avatar>
          <Text fontSize="lg" fontWeight="semibold">Hoàng Việt</Text>
          <Text fontSize="sm" color="gray.500">Online</Text>
          <Accordion defaultIndex={[0]} allowMultiple w="100%" mt={6}>
            <AccordionItem border="0px">
              <h2>
                <AccordionButton py={3} borderRadius={10}>
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    Tùy chỉnh đoạn chat
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="0px">
              <h2>
                <AccordionButton py={3} borderRadius={10}>
                  <Box flex="1" textAlign="left" fontWeight="semibold">
                    File phương tiện được chia sẻ
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      )}
    </Flex>
  );
}
