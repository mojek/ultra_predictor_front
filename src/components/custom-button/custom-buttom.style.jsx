import styled from "styled-components";

export const ButtonContainer = styled.button`
  min-width: 10rem;
  width: auto;
  height: 3rem;
  letter-spacing: 0.5px;
  line-height: 3rem;
  padding: 0 2.2rem 0 2.2rem;
  font-size: 1rem;
  background-color: ${props => props.theme.dark};
  color: white;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color:  ${props => props.theme.dark};
    border: 1px solid  ${props => props.theme.dark};
  }
`;
