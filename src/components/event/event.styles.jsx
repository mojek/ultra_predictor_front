import styled from "styled-components";

export const EventContainer = styled.div`
  h2 {
    font-weight: 300;
    font-size: 2rem;
    line-height: 44px;
    padding: 0;
    margin: 0;
  }
  .event-date {
    font-size: 1.3rem;

    border-bottom: 1px solid #8a8a8a;
    time:nth-child(2n):before {
      content: " - ";
    }
  }
  @media (max-width: 992px) {
    h2 {
      font-size: 1.9rem;
    }
    .event-date {
      font-size: 1.3rem;

      border-bottom: none;
    }
  }
`;
