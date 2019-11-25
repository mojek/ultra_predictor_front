import styled from "styled-components";


export const EventContainer = styled.div`
  background:${props=>props.theme.white}; 
  cursor: pointer;
  margin: 1rem 0;
`;

export const EventHeader = styled.header`
  border-bottom: 1px solid ${props=>props.theme.lightgrey};
  padding: 1.5rem;
`;
export const EventContent = styled.header`
  
  padding: 1.5rem;
`;




export const EventName = styled.h2`
  padding: 0;
  margin: 0;
  color: ${props=>props.theme.dark};
  font-size: 1.5rem;
`;

export const Time = styled.time`
  background: ${props=>props.theme.green};
  color: ${props=>props.theme.white};
  font-size:0.8rem; 
  padding: 0.1rem 0.2rem;
  font-weight:bold;
`;
