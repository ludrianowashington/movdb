import Image from "next/image";

import logoMov from "../../../../public/logo-horizontal.png";

import styled from "styled-components";

// Styling component
const Navbar = styled.div`
  display: flex;

  width: 100%;
  height: 4rem;

  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.primary};
`;
const Wrap = styled.div`
  width: 15%;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  /* background-color: ${({ theme }) => theme.colors.background}; */
`;

// Function Main
export default function NavBar() {
  return (
    <>
      <Navbar>
        <Wrap>
          <Image
            alt="Logo Movdb"
            src={logoMov}
            width={140}
            height={40}
            layout="intrinsic"
          />
        </Wrap>
      </Navbar>
    </>
  );
}
