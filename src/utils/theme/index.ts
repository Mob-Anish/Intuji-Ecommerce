import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Button } from "./chakraButton";

const customTheme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
    mono: `'Montserrat', sans-serif`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: mode("black", "black")(props),
        fontWeight: "500", // Set the default font weight to 500
        backgroundColor: mode("#F3F3F3", "#F3F3F3")(props),
        overflowY: "scroll",
        scrollbarWidth: "thin", // for Firefox
        "&::-webkit-scrollbar": {
          width: "12px", // adjust as needed
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: mode("#888", "#888")(props), // adjust as needed
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: mode("#f1f1f1", "#f1f1f1")(props), // adjust as needed
        },
      },
    }),
  },
  fontWeights: {
    normal: 500,
    medium: 600,
    bold: 700,
  },
  colors: {
    primary: "#1C599F", //blue button
    fadedPrimary: "#F2F8FF",
    secondary: "#D83248", //red button
    lightbg: "#C0D5EC", //lightblue button

    heading: "#515151", //page heading
    darkText: "#4B4B4B", //Layout header text color
    mediumText: "#8B8B8B", //text on table head, search ...
    lightText: "#414141", //common small texts
    customBlack: "#333333", //sidebar text
    fadedText: "#B1B1B1", //placeholder color
    fadedBorder: "#9F9F9F", //input border color

    mainbg: "#F3F3F3", //main container bg
    headingbg: "#ECECEC", //table heading bg,search background
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.875rem",
    // Add more custom font sizes here
  },
  space: {
    "2": "0.5rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    // Add more custom space values here
  },
  radii: {
    none: "0",
    sm: "0.25rem",
    md: "0.625rem",
    lg: "0.75",
    // Add more custom border radius values here
  },
  components: {
    Button,
    Switch: {
      baseStyle: {
        track: {
          // bg: mode('#D83248', '#D83248'),
          _checked: {
            bg: mode("#30953D", "#30953D"), // Set active track color
          },
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
    Text: {
      baseStyle: {
        color: mode("#515151", "#515151"),
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: "14px",
      },
    },
    Select: {
      baseStyle: {
        field: {
          cursor: "pointer",
        },
      },
    },
  },
});
export default customTheme;
