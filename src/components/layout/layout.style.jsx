import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 0 auto;
  max-width: ${props => props.theme.container_width};
  padding: 0 1rem;
`;

export const Toolbar = styled.header`
  max-width: ${props => props.theme.container_width};
  display:flex;
  margin: 0 auto;
  text-align: left;
  padding: 1rem 1.2rem;
  font-size: 2rem;
  @media all and (max-width: 640px) {
    flex-flow:column wrap;  
    text-align:center;
  }
  
 
`;
export const Logo = styled.div`
flex: 1;
font-family: "Neucha", cursive;
span {
    font-size: 1.1rem;
    display:block;
    top:-0.8rem;
    position:relative;
    opacity:0.6;
  }

`
export const MainMenu = styled.nav`
  margin: 0 auto;
  font-size: 1rem;
  margin-top: 1rem;
  flex: 2;
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    li {
      margin-left: 1rem;
      a {
        border-bottom: 1px solid transparent;
        color: ${props => props.theme.dark};
        text-decoration: none;
        display: inline-flex;
        &:hover {
          border-bottom: 1px solid ${props => props.theme.green};
        }
      }
    }
  }
`;
