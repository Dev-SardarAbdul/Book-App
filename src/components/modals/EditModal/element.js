import styled from "styled-components";

export const MainEditModal = styled.div`
  min-height: 50vh;
  overflow: hidden;

  .form-control {
    &:focus {
      box-shadow: none;
    }
  }

  .form-label {
    font-size: 16px;
    font-weight: 600;
    color: rgb(22, 33, 62);
  }
`;

export const MainHeader = styled.h4`
  text-align: center;
  font-weight: 600;
  color: rgb(22, 33, 62);
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 575.98px) {
    justify-content: center;
  }
`;

export const CancelBtn = styled.button`
  border: none;
  background-color: rgb(22, 33, 62);
  border-radius: 4px;
  padding: 5px 20px;
  color: #fff;
  font-size: 20px;
  width: 120px;

  &:active {
    border: none;
  }
`;
export const SubmitBtn = styled.button`
  border: none;
  background-color: #f56eb3;
  border-radius: 4px;
  padding: 5px 20px;
  color: #fff;
  font-size: 20px;
  width: 120px;

  &:active {
    border: none;
  }
`;
