import styled from "styled-components";

export const Back = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size:cover;
  background-position: center;
  background-image: url("${(props) => props.background}");
`;
