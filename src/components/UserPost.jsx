import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react"
import { BsThreeDots } from "react-icons/bs"
import { Link } from "react-router-dom"

const UserPost = () => {
     return (
          <>
               <Link to={"mark/post/1"}>
                    <Flex gap={3} mb={4} py={5}>
                         {/* profile image and the vertical line or comment people img */}
                         <Flex flexDirection={"column"} alignItems={"center"}>
                              <Avatar size={"md"} name={"Mark"} src={"/zuck-avatar.png"} />
                              <Box w={'1px'} h={"full"} my={2} bg={"gray.light"}></Box>
                              <Box position={"relative"} w={"full"}>
                                   <Avatar size={"xs"} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' position={"absolute"} top={0} padding={'2px'} left={"15px"} />
                                   <Avatar size={"xs"} name='Ryan Florence' src='https://bit.ly/ryan-florence' position={"absolute"} bottom={0} padding={'2px'} right={"-5px"} />
                                   <Avatar size={"xs"} name='Kent Dodds' src='https://bit.ly/kent-c-dodds' position={"absolute"} bottom={0} padding={'2px'} left={"4px"} />
                              </Box>
                         </Flex>

                         {/* Post image and post detail */}
                         <Flex flexDirection={"column"} flex={1} gap={2}>
                              <Flex justifyContent={"space-between"} w={"full"}>
                                   <Flex w={"full"} alignItems={"center"}>
                                        <Text fontSize={"sm"} fontWeight={"bold"}>Mark</Text>
                                        <Image src={"/verified.png"} w={4} h={4} ml={1} />
                                   </Flex>
                                   <Flex alignItems={"center"} gap={4}>
                                        <Text fontSize={"sm"} color={"gray.light"}>1d</Text>
                                   <BsThreeDots />
                                   </Flex>
                              </Flex>

                              <Text fontSize={"sm"}>This is my first post.</Text>
                              <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
                                   <Image src={"/post1.png"} w={"full"} />
                              </Box>
                         </Flex>

                    </Flex>
               </Link>
          </>
     )
}

export default UserPost