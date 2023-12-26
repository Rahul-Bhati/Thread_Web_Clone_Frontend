import { Flex, Avatar, Text, Image, Box, Divider, Button } from "@chakra-ui/react"
import { useState } from "react"
import { BsThreeDots } from "react-icons/bs"
import Actions from "../components/Actions";
import Comment from "../components/Comment";

const PostPage = () => {
     const [liked, setLiked] = useState(false);
     return (
          <>
               {/* user name and avatar */}
               <Flex>
                    <Flex w={"full"} alignItems={"center"} gap={3}>
                         <Avatar src="/zuck-avatar.png" size={"md"} name='Mark Zuckerberg' />
                         <Flex>
                              <Text fontSize={"sm"} fontWeight={"bold"}>Mark Zuckerbarg</Text>
                              <Image src='/verified.png' w='4' h={4} ml={4} />
                         </Flex>
                    </Flex>

                    <Flex gap={4} alignItems={"center"}>
                         <Text fontSize={"sm"} color={"gray.light"}>1d</Text>
                         <BsThreeDots />
                    </Flex>
               </Flex>

               {/* Posts detail */}
               <Text my={3}>I am trying to make the world a more open place.</Text>
               <Box borderRadius={6} overflow={"hidden"} border={"1px solid"} borderColor={"gray.light"}>
                    <Image src='/post1.png' w={"full"} />
               </Box>

               <Flex gap={3} my={3}>
                    <Actions liked={liked} setLiked={setLiked} />
               </Flex>

               <Flex gap={2} alignItems={"center"}>
                    <Text color={"gray.light"} fontSize={"sm"}>1353 replies</Text>
                    <Box w={0.5} h={0.5} bg={"gray.light"} borderRadius={"full"}></Box>
                    <Text color={"gray.light"} fontSize={"sm"}>{200 + (liked ? 1 : 0)} likes</Text>
               </Flex>

               <Divider my={4} />

               <Flex justifyContent={"space-between"}>
                    <Flex gap={2} alignItems={"center"}>
                         <Text fontSize={"2xl"}>👋</Text>
                         <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
                    </Flex>
                    <Button>Get</Button>
               </Flex>

               <Divider my={4} />

               {/* comment */}
               <Comment comment={"look really good!"} createdAt="2d" likes={100} username="dan-abramov" userAvatar="https://bit.ly/dan-abramov" />
               <Comment comment={"sounds good!"} createdAt="1d" likes={120} username="ryan-florence" userAvatar="https://bit.ly/ryan-florence" />
               <Comment comment={"i liked it!"} createdAt="21d" likes={50} username="kent-c-dodds" userAvatar="https://bit.ly/kent-c-dodds" />
          </>
     )
}

export default PostPage