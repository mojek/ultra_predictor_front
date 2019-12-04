import styled from "styled-components";

export const Toolbar = styled.header`
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
  .navbar-expand-lg .navbar-nav .nav-link{
    color:#272727;
    /* font-size:0.9rem; */
    &:hover{
      border-bottom: 1px dotted #272727;
    }
  }
`;
