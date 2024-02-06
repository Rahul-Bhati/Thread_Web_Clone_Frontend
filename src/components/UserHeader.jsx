import { Avatar, Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Portal, Text, VStack, useToast } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { useState } from "react";
import useShowToast from "../hooks/useShowToast";


const UserHeader = ({ user }) => {
     const toast = useToast();
     const currentUser = useRecoilValue(userAtom); // this is the current user who is logged in
     const [following, setFollowing] = useState(user.followers.includes(currentUser?._id));
     const showToast = useShowToast();
     const [updating, setUpdating] = useState(false); // this is for the update profile button

     // console.log(user,currentUser, following, setFollowing);

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

     const handleFollowUnFollow = async() => {
          if(!currentUser?._id){
               showToast("Error", "Please login to follow", 'error');
               return;
          }

          if(updating) return;
          setUpdating(true);

          try {
               const res = await fetch(`/api/users/follow/${user._id}`, {
                    method:"POST",
                    headers: {
                         "Content-Type": "application/json",
                    }
               });
               const data = await res.json();
               
               if (data.error){
                    showToast("Error", data.error, 'error');
                    return;
               } 

               
               if(following){
                    showToast("Success", `Unfollowed ${user.name}`, 'success');
                    user.followers.pop();
               }
               else{
                    showToast("Success", `Followed ${user.name}`, 'success');
                    user.followers.push(currentUser?._id);
               }
               
               setFollowing(!following);
          } catch (error) {
               showToast("Error", error, 'error')
          }
          finally{
               setUpdating(false);
          }
     }

     return (
       <VStack gap={4} align={"start"}>
         <Flex justifyContent={"space-between"} w={"full"}>
           <Box>
             <Text fontSize={"2xl"} fontWeight={"bold"}>
               {user.name}
             </Text>
             <Flex gap={2} alignItems={"center"}>
               <Text fontSize={"sm"}>{user.username}</Text>
               <Text
                 fontSize={{
                   base: "xs",
                   md: "sm",
                   lg: "md",
                   xl: "md",
                 }}
                 bg={"gray.dark"}
                 color={"gray.light"}
                 p={1}
                 borderRadius={"full"}
               >
                 thread.net
               </Text>
             </Flex>
           </Box>
           <Box>
             {user.profilePic && (
               <Avatar
                 size={{
                   base: "md",
                   md: "xl",
                   lg: "2xl",
                   xl: "2xl",
                 }}
                 name={user.name}
                 src={user.profilePic}
               />
             )}

             {!user.profilePic && (
               <Avatar
                 size={{
                   base: "md",
                   md: "xl",
                   lg: "2xl",
                   xl: "2xl",
                 }}
                 name={user.name}
                 src="https://bit.ly/broken-link"
               />
             )}
           </Box>
         </Flex>

         <Text>{user.bio}</Text>

         {currentUser?._id === user._id && (
           <Link to="/update" className="profile_link">
             <Button size={"sm"}>Update profile</Button>
           </Link>
         )}

         {currentUser?._id !== user._id && (
           <Button
             size={"sm"}
             isLoading={updating}
             onClick={handleFollowUnFollow}
           >
             {following ? "Unfollow" : "Follow"}
           </Button>
         )}

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
               <MenuButton>
                 <CgMoreO size={24} cursor="pointer" />
               </MenuButton>
               <Portal>
                 <MenuList bg={"gray.dark"}>
                   <MenuItem bg={"gray.dark"} onClick={copyURL}>
                     Copy link
                   </MenuItem>
                 </MenuList>
               </Portal>
             </Menu>
           </Flex>
         </Flex>

         <Flex w={"full"}>
           <Flex
             flex={1}
             borderBottom={"1px solid #fff"}
             justifyContent={"center"}
             pb={"3"}
             cursor={"pointer"}
           >
             <Text fontWeight={"bold"}>Threads</Text>
           </Flex>
           <Flex
             flex={1}
             borderBottom={"1px solid gray"}
             color={"gray.light"}
             justifyContent={"center"}
             pb={"3"}
             cursor={"pointer"}
           >
             <Text fontWeight={"bold"}>Replies</Text>
           </Flex>
         </Flex>
       </VStack>
     );
}

export default UserHeader