import type { IProps } from "../../../interfaces/home";
import HomeFooter from "./footer";
import HomeNavbar from "./navbar";

const HomeLayout = ({ children }: IProps) => {
  return (
    <>
      <HomeNavbar />
      {children}
      <HomeFooter />
    </>
  );
};

export default HomeLayout;
