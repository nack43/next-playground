import styled from "styled-components";
import React, { useState } from "react";

const Container = styled.div`
  width: 100px;
  height: 100vh;
  background: red;
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const BottomSheet = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 200px;
  background: blue;
  border-radius: 10px 10px 0 0;
  z-index: 2;
`;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <button onClick={() => setIsOpen(true)}>open</button>
      {isOpen && (
        <>
          <BottomSheet>
            <p>i am bottom sheeet</p>
            <button onClick={() => setIsOpen(false)}>close</button>
          </BottomSheet>
          <Background onClick={() => setIsOpen(false)} />
        </>
      )}
    </Container>
  );
}
