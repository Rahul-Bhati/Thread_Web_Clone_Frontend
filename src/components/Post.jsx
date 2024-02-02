import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import Actions from "./Actions";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";

const Post = ({ post, postedBy, key }) => {
  const [liked, setLiked] = useState(false);
  console.log(postId, post, postedBy)
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const toast = useShowToast();
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("/api/users/profile/" + postedBy);
        const data = await res.json();
        //    console.log(data);

        if (data.error) {
          toast("Error", data.message, "error");
          return;
        }

        setUser(data);
      } catch (error) {
        toast("Error", error.message, "error");
        setUser(null);
      }
    };

    getUser();
  }, []);
  return (
    <>
      <Link to={`/${user?.username}/post/${key}`}>
        <Flex gap={3} mb={4} py={5}>
          {/* profile image and the vertical line or comment people img */}
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Avatar
              size={"md"}
              name={user?.username}
              src={user?.profilePic}
              onClick={(event) => {
                event.preventDefault();
                navigate(`/${user?.username}`);
              }}
            />
            <Box w={"1px"} h={"full"} my={2} bg={"gray.light"}></Box>
            <Box position={"relative"} w={"full"}>
              {post.replies.length === 0 && (
                <Text textAlign={"center"}>🥱</Text>
              )}
              {post.replies[0] && (
                <Avatar
                  size={"xs"}
                  name="Dan Abrahmov"
                  src={post.replies[0].userProfilePic}
                  position={"absolute"}
                  top={0}
                  padding={"2px"}
                  left={"15px"}
                />
              )}
              {post.replies[1] && (
                <Avatar
                  size={"xs"}
                  name="Ryan Florence"
                  src={post.replies[1].userProfilePic}
                  position={"absolute"}
                  bottom={0}
                  padding={"2px"}
                  right={"-5px"}
                />
              )}

              {post.replies[2] && (
                <Avatar
                  size={"xs"}
                  name="Kent Dodds"
                  src={post.replies[2].userProfilePic}
                  position={"absolute"}
                  bottom={0}
                  padding={"2px"}
                  left={"4px"}
                />
              )}
            </Box>
          </Flex>

          {/* Post image and post detail */}
          <Flex flexDirection={"column"} flex={1} gap={2}>
            <Flex justifyContent={"space-between"} w={"full"}>
              <Flex w={"full"} alignItems={"center"}>
                <Text
                  fontSize={"sm"}
                  fontWeight={"bold"}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(`/${user?.username}`);
                  }}
                >
                  {user?.username}
                </Text>
                <Image src={"/verified.png"} w={4} h={4} ml={1} />
              </Flex>
              <Flex alignItems={"center"} gap={4}>
                <Text
                  fontSize={"xs"}
                  width={36}
                  textAlign={"right"}
                  color={"gray.light"}
                >
                  {formatDistanceToNow(post.createdAt)} ago
                </Text>
              </Flex>
            </Flex>

            <Text fontSize={"sm"}>{post.text}</Text>
            {post.img && (
              <Box
                borderRadius={6}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"gray.light"}
              >
                <Image src={post.img} w={"full"} />
              </Box>
            )}

            <Flex gap={3} my={1}>
              {/* <Actions post={post} /> */}
            </Flex>
          </Flex>
        </Flex>
      </Link>
    </>
  );
};

export default Post;
