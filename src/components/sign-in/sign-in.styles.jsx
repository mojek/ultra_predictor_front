import styled from "styled-components";

export const SignInContainer = styled.div`
  display:flex;
  flex-direction: column;
  background: ${props => props.theme.white};
  cursor: pointer;
  margin: 1rem 0;
  border-radius: 0.3rem;
  padding: 2rem;
  
  h2 {
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    /* text-align:center; */
  }
  span {
 
    color: ${props => props.theme.dark};
    font-size: 0.8rem;
    /* font-style: italic; */
`;
