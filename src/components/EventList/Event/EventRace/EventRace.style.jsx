import styled from "styled-components";

export const RaceContainer = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.white};
  padding: 0.3rem;
  &:last-child {
    margin: 0;
  }
  &:hover {
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

export const RaceHeader = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

export const RaceContent = styled.div`
  font-size: 0.7rem;
  display: flex;
  flex-wrap: wrap;
`;

export const RaceContentElement = styled.div`
  flex: 1 0 35%;
  margin-right: 1rem;
`;
