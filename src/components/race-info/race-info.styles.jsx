import styled from "styled-components";
export const RaceContainer = styled.div`
  font-size: 1.2rem;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 1.4rem;
  margin-bottom: 1rem;
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  h4 {
    font-size: 1.55rem;
  }
  span {
    display: block;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
    /* identical to box height */
    text-transform: capitalize;
  }
  .race-info-container {
    flex-wrap: nowrap;
  }
  .race-info {
    flex: 0 1 16.666%;
    border-right: 1px solid #dcdcdc;
    margin-right: 1rem;
    &:last-child {
      border-right: none;
      margin-right: 0;
    }
  }

  @media (max-width: 992px) {
    border: none;
    .race-info-container {
      flex-wrap: wrap;
    }
    .race-info {
      flex: 0 0 44%;
      border-right: 0;
      margin-right: 0;
      border-bottom: 1px solid #dcdcdc;
      padding: 0.7rem 0;
    }
  }
`;
