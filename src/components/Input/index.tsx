import { Input } from "@chakra-ui/react";
import type { FC } from "react";
import type { InputProps } from "../../interfaces/input";

const InputComponent: FC<InputProps> = ({
  placeholder = "",
  size = "md",
  ...props
}) => {
  return (
    <>
      <Input
        type="text"
        variant="filled"
        placeholder={placeholder}
        borderRadius={"10px"}
        fontSize={"sm"}
        width={"auto"}
        size={size}
        {...props}
      />
    </>
  );
};

export default InputComponent;
