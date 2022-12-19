import styled from "styled-components";

export const MainHomeCom = styled.div`
  background-color: #16213e;
  overflow: hidden;

  .container {
    margin-top: 2rem;
    margin-bottom: 2rem;

    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #fff;
      font-size: 24px;
      text-decoration: underline;
      text-decoration-color: #f56eb3 !important;
      text-underline-offset: 10px;
    }

    .ant-tabs-tab-btn {
      color: #fff;
      font-size: 24px;
      margin-left: 50px;
    }

    .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap,
    .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-wrap {
      justify-content: center;
    }

    .ant-tabs-bottom > .ant-tabs-nav:before,
    .ant-tabs-bottom > div > .ant-tabs-nav:before,
    .ant-tabs-top > .ant-tabs-nav:before,
    .ant-tabs-top > div > .ant-tabs-nav:before {
      border-bottom: none;
    }
    .ant-tabs-ink-bar {
      display: none !important;
    }
  }
`;

export const TabOneContent = styled.div`
  margin-top: 2rem;
`;

export const AddBookHeader = styled.h2``;

export const BookListHeader = styled.h2`
  color: #fff;
  font-weight: 400;
`;

export const CardContainer = styled.div`
  .card {
    width: 350px;
    padding-bottom: 5px;
  }

  .card-title {
    color: #16213e;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;

    span {
      color: #f56eb3;
    }
  }
`;

export const Author = styled.div`
  color: #16213e;
  text-transform: capitalize;
  font-size: 18px;
  margin-top: 20px;
  font-weight: 600;

  span {
    color: #f56eb3;
    font-weight: 400;
  }
`;

export const SubAuthor = styled.div`
  color: #16213e;
  font-size: 18px;
  margin-top: 5px;
  font-weight: 600;
  text-transform: capitalize;

  span {
    color: #f56eb3;
    font-weight: 400;
  }
`;

export const Year = styled.div`
  color: #16213e;
  font-size: 18px;
  margin-top: 5px;
  font-weight: 600;
  text-transform: capitalize;

  span {
    color: #f56eb3;
    font-weight: 400;
  }
`;

export const Publisher = styled.div`
  color: #16213e;
  font-size: 18px;
  margin-top: 5px;
  font-weight: 600;
  text-transform: capitalize;

  span {
    color: #f56eb3;
    font-weight: 400;
  }
`;

export const Pages = styled.div`
  color: #16213e;
  font-size: 18px;
  margin-top: 5px;
  text-transform: capitalize;
  font-weight: 600;

  span {
    color: #f56eb3;
    font-weight: 400;
  }
`;

export const Category = styled.div`
  color: #16213e;
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  margin-top: 5px;

  span {
    color: #f56eb3;
    font-weight: 400;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: #16213e;
  border-radius: 4px;
  padding: 5px 15px;
  color: #fff;
  width: 80px;

  &:hover {
    box-shadow: 0 0 12px rgba(70, 150, 240, 0.7);
  }
`;

export const EditBtn = styled.button`
  border: none;
  background-color: #f56eb3;
  border-radius: 4px;
  padding: 5px 15px;
  color: #fff;
  width: 80px;

  &:hover {
    box-shadow: 0 0 12px rgba(245, 110, 179, 0.7);
  }
`;

export const FormContainer = styled.div`
  .form-control {
    width: 500px;

    @media (max-width: 575.98px) {
      width: 100%;
    }

    &:focus {
      box-shadow: none;
    }
  }

  .form-label {
    color: #fff;
  }
`;

export const SubmitBtn = styled.button`
  border: none;
  background-color: #f56eb3;
  border-radius: 4px;
  padding: 5px 20px;
  color: #fff;
  font-size: 20px;
  margin-top: 20px;

  @media (max-width: 575.98px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    box-shadow: 0 0 12px rgba(245, 110, 179, 0.7);
  }

  &:active {
    border: none;
  }
`;

export const WarningText = styled.h2`
  color: #fff;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  margin-top: 2rem;
`;
