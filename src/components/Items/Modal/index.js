import styled from "styled-components";

export default function Modal() {
  return (
    <Overlay>
      <ModalView>
        <SectionLeft>
          <Image />
        </SectionLeft>
        <SectionRight>
          <Title>Title</Title>
          <Genres>Action, Adventures, Fiction</Genres>
          <ReleaseDate>25/11/2018/</ReleaseDate>
          <VoteAverage>4.7</VoteAverage>
          <Description>
            asdfiua asçlinasdf açsidf asdf nsapgrçlksd vnr{" "}
          </Description>
        </SectionRight>
      </ModalView>
    </Overlay>
  );
}
