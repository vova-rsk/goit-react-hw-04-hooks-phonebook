import styled from '@emotion/styled';

const ListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  padding-left: 20px;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    width: 4px;
    height: 4px;
    background-color: #000;
    border: 1px solid #000;
    border-radius: 50%;
  }

  span {
    display: inline-block;
  }

  button {
    display: inline-block;
    padding: 1px 4px;
    margin-left: 10px;
    border: 0.5px solid #b7b7b7;
    border-radius: 4px;
    font-size: 11px;
    line-height: 1;

    &:hover {
      -webkit-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);
      box-shadow: 0px 1px 3px 2px rgba(34, 60, 80, 0.2);
    }

    &:active {
      background-color: #286fe0;
    }
  }
`;

export default ListItem;
