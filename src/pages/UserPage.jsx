import { useEffect, useState } from "react"
import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"
import { useParams } from "react-router-dom"
import useShowToast from "../hooks/useShowToast";


const UserPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState();
  const showToast = useShowToast();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();

        if(data.error) {
          showToast("Error", data.error, "error");
          return;
        }

        setUser(data);
      } catch (error) {
          showToast("Error", error, "error");
      }
    }

    getUser();
  }, [username, showToast]);

  if(!user)  return null;
  
  return (
    <>
      <UserHeader user={user}/>
      <UserPost likes={1200} replies={482} postImg='/post1.png' postTitle="Let's talk about thread." />
      <UserPost likes={120} replies={182} postImg='/post2.png' postTitle="Nice Tutorial" />
      <UserPost likes={20} replies={42} postImg='/post3.png' postTitle="I love fashion" />
      <UserPost likes={200} replies={4820} postTitle="This is my first thread about web developer" />
    </>
  )
}

export default UserPage