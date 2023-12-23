import { Image, Flex, useColorMode } from "@chakra-ui/react"

const Header = () => {
     const { colorMode, toggleColorMode } = useColorMode();
     return (
          <Flex justifyContent={"center"} mt={6} mb={12}>
               <Image
                    src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
                    alt="Thread Logo"
                    width={6}
                    cursor={"pointer"}
                    onClick={toggleColorMode}
               />
          </Flex>
     )
}

export default Header