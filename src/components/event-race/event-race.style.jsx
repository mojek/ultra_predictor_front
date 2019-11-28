import styled from "styled-components";

export const RaceContainer = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.white};
  border-radius: 0.3rem;
  padding: 0.3rem;
  &:last-child {
    margin: 0;
  }
  &:hover {
    border-bottom: 1px dotted ${props => props.theme.lightgrey};
    background: #F9F9F9;
    
  }
`;

export const RaceHeader = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 0.2rem;
`;

export const RaceContent = styled.div`
  font-size: 0.8rem;
  display: flex;
  
  justify-content: space-between;
  margin-left: 0.1rem;
  @media all and (max-width: 640px) {
    flex-flow:column wrap;  
  }
`;

export const RaceContentElement = styled.div`
  flex: 1 0 20%;
  
  
`;
