import Image from "next/image";

import logoMov from "../../../../public/logo-horizontal.png";

<<<<<<< HEAD
import Image from "next/image";
import logo from '../../../../public/logo-horizontal.png'
=======
import styled from "styled-components";
>>>>>>> 737e667ccf31c2bf4834d10967d537865fc40642

// Styling component
const Navbar = styled.div`
  display: flex;

  width: 100%;
  height: 4rem;

  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.primary};
`;
const Wrap = styled.div`
  width: 15rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  /* background-color: ${({ theme }) => theme.colors.background}; */
`;
const Text = styled.span`
  font-size: 29px;
  font-family: sans-serif;
  color: ${({ theme }) => theme.colors.textDark};
`;
// Function Main
export default function NavBar() {
  return (
    <>
      <Navbar>
        <Wrap>
<<<<<<< HEAD
          <Image 
            alt='Logo MovDB'
            src={logo}
            width={160}
            height={35}
            layout='intrinsic'
=======
          <Image
            alt="Logo Movdb"
            src={logoMov}
            width={140}
            height={40}
            layout="intrinsic"
>>>>>>> 737e667ccf31c2bf4834d10967d537865fc40642
          />
        </Wrap>
      </Navbar>
    </>
  );
}
