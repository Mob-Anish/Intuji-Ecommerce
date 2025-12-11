import { useToast } from "@chakra-ui/react";

export const CustomToast = () => {
  const toast = useToast();
  // status are: "success", "info", "warning", "error"

  const showToast = ({ message, status, title }: any) => {
    toast({
      title: title,
      description: message,
      status: status,
      position: "top-right",
      isClosable: true,
      duration: 3000,
      variant: "left-accent",
    });
  };

  return { showToast };
};
