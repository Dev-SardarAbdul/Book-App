import React, { useState, useEffect } from "react";
import {
  MainEditModal,
  MainHeader,
  BtnWrapper,
  CancelBtn,
  SubmitBtn,
} from "./element";
import { Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { notification } from "antd";
import { AiFillCheckCircle } from "react-icons/ai";

function EditModal({ onCancel }) {
  const [booksValue, setBooks] = useState();
  const [authorValue, setAuthor] = useState();
  const [subAuthorValue, setSubAuthor] = useState();
  const [yearValue, setYear] = useState();
  const [publisherValue, setPublisher] = useState();
  const [pagesValue, setPages] = useState();
  const [categoryValue, setCategory] = useState();
  const [id, setId] = useState(null);

  const addNotification = () => {
    notification.open({
      message: "Success!",
      description: `Book Details Updated. You can view updated details of your book after refreshing this page.`,
      icon: <AiFillCheckCircle style={{ color: "rgb(22, 33, 62)" }} />,
    });
  };

  const updateData = () => {
    axios.put(`https://639f6b747aaf11ceb89a814e.mockapi.io/books/${id}`, {
      booksValue,
      authorValue,
      subAuthorValue,
      yearValue,
      publisherValue,
      pagesValue,
      categoryValue,
    });
    addNotification();
    onCancel();
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubAuthor = (e) => {
    setSubAuthor(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handlePublisher = (e) => {
    setPublisher(e.target.value);
  };
  const handlePages = (e) => {
    setPages(e.target.value);
  };
  const hanldeCategory = (e) => {
    setCategory(e.target.value);
  };
  const hanldeBooks = (e) => {
    setBooks(e.target.value);
  };

  useEffect(() => {
    setBooks(localStorage.getItem("booksValue"));
    setAuthor(localStorage.getItem("authorValue"));
    setSubAuthor(localStorage.getItem("subAuthorValue"));
    setCategory(localStorage.getItem("categoryValue"));
    setPages(localStorage.getItem("pagesValue"));
    setPublisher(localStorage.getItem("publisherValue"));
    setYear(localStorage.getItem("yearValue"));
    setId(localStorage.getItem("ID"));
  }, []);
  return (
    <MainEditModal>
      <MainHeader>Update Book Info</MainHeader>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row className=" mt-4">
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Update Book Name : </Form.Label>
              <Form.Control
                type="text"
                placeholder="Updated Book Name"
                value={booksValue}
                onChange={hanldeBooks}
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Update Author Name :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Updated Author Name"
                value={authorValue}
                onChange={handleAuthor}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Update Sub Author Name :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Updated Sub Author Name "
                value={subAuthorValue}
                onChange={handleSubAuthor}
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Update Year :</Form.Label>
              <Form.Control
                type="number"
                placeholder="Updated Year"
                value={yearValue}
                onChange={handleYear}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Update Publisher Name :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Updated Publisher Name"
                value={publisherValue}
                onChange={handlePublisher}
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Update Pages :</Form.Label>
              <Form.Control
                type="number"
                placeholder="Updated Pages"
                value={pagesValue}
                onChange={handlePages}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Update Category :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Updated Category"
            value={categoryValue}
            onChange={hanldeCategory}
          />
        </Form.Group>

        <BtnWrapper>
          <CancelBtn onClick={onCancel}>Cancel</CancelBtn>
          <SubmitBtn onClick={updateData}>Update</SubmitBtn>
        </BtnWrapper>
      </Form>
    </MainEditModal>
  );
}

export default EditModal;
