import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

// why use callback? because we are using toast in useEffect and we don't want to re-render the component again and again so we use callback to prevent re-rendering

const useShowToast = () => {
     const toast = useToast();
     const showToast = useCallback((title, description, status) => {
          toast({
               title,
               description,
               status,
               duration: 3000,
               isClosable: true,
          });
     },[toast]);
     return showToast;
}

export default useShowToast