/* eslint-disable @typescript-eslint/no-explicit-any */

import styled from 'styled-components'

export const DivStyle = styled.div`
  border: solid 2px black;
  border-radius: 40px;
  margin: 1em;
  padding: 1px 158px;
  background: white;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "pink" : "white")};
`;


// <DivStyle active={position === id ? true : false}>{sentence}</DivStyle>
