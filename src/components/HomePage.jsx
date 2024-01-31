import { Flex, Spinner } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import useShowToast from "../hooks/useShowToast"
import Post from "./Post"

const HomePage = () => {
     const toast = useShowToast();
     const [loading, setLoading] = useState(true);
     const [posts, setPosts] = useState([]);

     useEffect(() => {
          const getFeedPosts = async () => {
               setLoading(true);
               try {
                    const res = await fetch("/api/posts/feed", {
                         method: "GET",
                         headers: {
                              "Content-Type": "application/json",
                         },
                    });
                    const data = await res.json();
                    if (data.error) {
                         toast("Error", data.error, "error");
                         return;
                    }

                    setPosts(data);
               } catch (error) {
                    toast("Error", error.message, "error");
               } finally {
                    setLoading(false);
               }
          }

          getFeedPosts();
     }, [])

     return (
          <>
          {!loading && posts.length === 0 && <h1>Follow some user to see the feed.</h1>}
               {loading && (
                    <Flex justifyContent={"center"}>
                         <Spinner size={"xl"} />
                    </Flex>
               )}
               
               {posts.map((post) => (
                    <Post key={post._id} post={post} postedBy={post.postedBy} />
               ))}

          </>
     )
}

export default HomePage