import styled from "styled-components";

export const InputWrapper = styled.div`
  max-width: 350px;
  margin: 4rem auto 0;
  .input_container {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    border-bottom: 1px solid ${(props) => props.theme.giraffeGray};
    .input_form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 115px;
    }
  }
  .input_button_container {
    display: flex;
    margin-top: 4rem;
    justify-content: flex-end;
    width: 100%;
    a {
      width: max-content;
    }
    a:last-of-type {
      margin-left: auto;
    }
  }
`;
