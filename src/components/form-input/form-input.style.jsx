import styled from "styled-components";


export const FormInputContaier = styled.div`
  position: relative;
  margin: 3rem 0;
  .form-input-label {
      color: ${props => props.theme.lightgrey};
      font-size: 0.8rem;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      transition: 300ms ease all;
      &.shrink {
        top: -1rem;
        font-size: 0.8rem;
        color: ${props => props.theme.dark};
      }
 }
  .form-input {
    background: none;
    background-color: white;
    color: ${props => props.theme.dark};
    font-size: 1rem;
    padding: 0.7rem;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
    margin: 2rem 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
        top: -1rem;
        font-size: 0.8rem;
        color: ${props => props.theme.dark};
    }
    input[type="password"] {
      letter-spacing: 0.3em;
    }
 
  }
`;
