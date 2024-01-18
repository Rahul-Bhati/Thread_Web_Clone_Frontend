import { Avatar, Box, Flex, Menu, MenuButton, MenuItem, MenuList, Portal, Text, VStack, useToast } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";


const UserHeader = ({ user }) => {
     const toast = useToast();
     const copyURL = () => {
          navigator.clipboard.writeText(window.location.href).then(() => {
               toast({
                    title: 'Profile link copied.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
               })
          })
     }
     return (
          <VStack gap={4} align={"start"}>
               <Flex justifyContent={"space-between"} w={"full"}>
                    <Box>
                         <Text fontSize={"2xl"} fontWeight={"bold"}>{user.name}</Text>
                         <Flex gap={2} alignItems={"center"}>
                              <Text fontSize={"sm"}>{user.username}</Text>
                              <Text fontSize={{
                                   base: "xs", md: "sm", lg: "md", xl: "md"
                              }} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>thread.net</Text>
                         </Flex>
                    </Box>
                    <Box>
                         {user.profilePic && <Avatar size={{
                              base: "md", md: "xl", lg: "2xl", xl: "2xl"
                         }} name={user.name} src={user.profilePic} />}

                         {!user.profilePic && <Avatar size={{
                              base: "md", md: "xl", lg: "2xl", xl: "2xl"
                         }} name={user.name} src="https://bit.ly/broken-link" />}
                    </Box>
               </Flex>

               <Text>{user.bio}</Text>
               <Flex w={"full"} justifyContent={"space-between"}>
                    <Flex gap={2} alignItems={"center"}>
                         <Text color={"gray.light"}>{user.followers.length} followers</Text>
                         <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
                         <Link className="profile_link">instagram.com</Link>
                    </Flex>
                    <Flex>
                         <Box className="icon-container">
                              <BsInstagram size={24} cursor="pointer" />
                         </Box>
                         <Menu>
                              <MenuButton><CgMoreO size={24} cursor="pointer" /></MenuButton>
                              <Portal>
                                   <MenuList bg={"gray.dark"}>
                                        <MenuItem bg={"gray.dark"} onClick={copyURL}>Copy link</MenuItem>
                                   </MenuList>
                              </Portal>
                         </Menu>
                    </Flex>
               </Flex>

               <Flex w={"full"} >
                    <Flex flex={1} borderBottom={"1px solid #fff"} justifyContent={"center"} pb={'3'} cursor={"pointer"}>
                         <Text fontWeight={"bold"}>Threads</Text>
                    </Flex>
                    <Flex flex={1} borderBottom={"1px solid gray"} color={"gray.light"} justifyContent={"center"} pb={'3'} cursor={"pointer"}>
                         <Text fontWeight={"bold"}>Replies</Text>
                    </Flex>
               </Flex>
          </VStack>
     )
}

export default UserHeader