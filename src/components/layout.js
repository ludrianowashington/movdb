// Importing components
import Navbar from "./layoutComponents/Navbar";
import FooterBar from "./layoutComponents/Footer";
import SideBar from "./layoutComponents/Sidebar";

import SearchBar from "./Items/SeachBar";

// Styling this component
import styled from "styled-components";

const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;
const Main = styled.main`
  width: 100%;
`;
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Content>
        <SideBar />
        <Main>{children}</Main>
      </Content>
      <FooterBar />
    </>
  );
}
