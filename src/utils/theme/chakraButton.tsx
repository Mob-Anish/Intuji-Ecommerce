import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "normal",
    borderRadius: "md",
    _disabled: {
      pointerEvents: "none",
      _hover: {
        visibility: "visible",
      },
    },
  },
  sizes: {
    //used for small buttons like pagination next, prev
    xsm: {
      fontSize: "sm",
      px: 2,
      py: 2,
    },
    //used for navbar header sign up button
    sm: {
      fontSize: "sm",
      px: 4,
      py: "1.2rem",
    },
    //used for medium size button like button in student enquiry
    md: {
      fontSize: "md",
      px: 4,
      py: 4,
    },
    //used for large button like button in add student
    lg: {
      fontSize: "md",
      px: 8,
      py: 4,
    },
  },
  // Two variants: outline and solid
  variants: {
    secondaryOutline: {
      border: "2px solid",
      borderColor: "secondary",
      px: "2rem",
      py: "1.1rem",
      color: "secondary",
      _hover: { bg: "secondary", color: "white" },
    },
    primaryOutline: {
      border: "2px solid",
      borderColor: "primary",
      px: "2rem",
      py: "1.1rem",
      color: "primary",
      _hover: { bg: "primary", color: "white" },
    },
    // solid: {
    //   bg: "purple.500",
    //   color: "white",
    // },
    primary: {
      border: "none",
      color: "white",
      bg: "primary",
    },
    secondary: {
      border: "none",
      color: "white",
      bg: "secondary",
    },
    none: {
      border: "none",
      bg: "transparent",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "secondary",
  },
});
