import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={1200} replies={482} postImg='/post1.png' postTitle="Let's talk about thread." />
      <UserPost likes={120} replies={182} postImg='/post2.png' postTitle="Nice Tutorial" />
      <UserPost likes={20} replies={42} postImg='/post3.png' postTitle="I love fashion" />
      <UserPost likes={200} replies={4820} postTitle="This is my first thread about web developer" />
    </>
  )
}

export default UserPage