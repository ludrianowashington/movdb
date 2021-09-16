// Importing components
import Navbar from "./layoutComponents/Navbar";
import FooterBar from "./layoutComponents/Footer";
import SideBar from "./layoutComponents/Sidebar";

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
      <Content>
        <SideBar />
        <Main>{children}</Main>
      </Content>
      <FooterBar />
    </>
  );
}
