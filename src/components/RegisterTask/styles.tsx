import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.form`
  padding: 2rem;
  max-width: 1300px;
  margin: 0 auto;
  align-items: center;
  text-align: center;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid var(--black);
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  padding-left: 0;

  &:focus-visible {
    outline: none !important;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: var(--white);

  &:hover {
    filter: brightness(0.8);
  }
`;
