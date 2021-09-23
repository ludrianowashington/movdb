import { useContext, useState } from 'react';
import {SearchProvider} from '../contexts/search';

import Image from 'next/image';

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 95vh;

  padding: 0 13px 13px;
`;

export default function Home() {  

  // if (error) return <div>An error occured: {error.message}</div>;

  return (
    <Container> 
    </Container>
  );
}


