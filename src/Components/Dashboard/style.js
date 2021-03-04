import styled from "styled-components";

export const DivName = styled.div`
  border-bottom: 0.1rem solid #5777a8;
  display: flex;
  margin-left: 1rem;
  text-align: left;

  &:last-child {
    border: none;
  }
`;

export const H3Name = styled.h3`
  width: 50%;
`;

export const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;
export const ImgButton = styled.img`
  height: 30px;
`;
