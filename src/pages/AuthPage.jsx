import { useRecoilState } from 'recoil'
import SignupCard from '../components/SignupCard'
import LoginCard from '../components/LoginCard'
import authScreenAtom from '../atoms/authAtoms'

const AuthPage = () => {
  const authScreenState = useRecoilState(authScreenAtom) ;

  return (
    <>
      {authScreenState[0] === "login" ? <LoginCard /> : <SignupCard />}
    </>
  )
}

export default AuthPage