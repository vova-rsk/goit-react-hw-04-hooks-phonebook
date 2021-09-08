import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;

  input {
    margin-top: 4px;
    width: 160px;

    &:focus {
      border: 2px solid #286fe0;
      outline: none;
    }
  }
`;

export default Label;
