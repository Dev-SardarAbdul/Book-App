import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  Author,
  BookListHeader,
  BtnWrapper,
  CardContainer,
  Category,
  DeleteBtn,
  EditBtn,
  FormContainer,
  MainHomeCom,
  Pages,
  Publisher,
  SubAuthor,
  SubmitBtn,
  TabOneContent,
  Year,
  WarningText,
} from "./element";
import { Tabs } from "antd";
import { bookData } from "../data/data";
import { notification, Modal } from "antd";
import { AiFillCheckCircle } from "react-icons/ai";
import { Form } from "react-bootstrap";
import axios from "axios";
import EditModal from "../modals/EditModal";

function HomeCom() {
  const [booksValue, setBooks] = useState();
  const [authorValue, setAuthor] = useState();
  const [subAuthorValue, setSubAuthor] = useState();
  const [yearValue, setYear] = useState();
  const [publisherValue, setPublisher] = useState();
  const [pagesValue, setPages] = useState();
  const [categoryValue, setCategory] = useState();
  const [booksData, setBooksData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Modal
  const showModal = () => {};
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //Notifications
  const deleteNotification = () => {
    notification.open({
      message: "Success!",
      description: `Book has been deleted from your inventory.`,
      icon: <AiFillCheckCircle style={{ color: "rgb(22, 33, 62)" }} />,
    });
  };

  const addNotification = () => {
    notification.open({
      message: "Success!",
      description: `Book has been added to your inventory. You can view your book in "Book List" tab after this refreshing page.`,
      icon: <AiFillCheckCircle style={{ color: "rgb(22, 33, 62)" }} />,
    });
  };

  //GetAllBooks

  const getBooksData = async () => {
    try {
      const res = await axios.get(
        "https://639f6b747aaf11ceb89a814e.mockapi.io/books"
      );
      setBooksData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooksData();
  }, []);

  //CreateNew

  const sendData = () => {
    axios.post("https://639f6b747aaf11ceb89a814e.mockapi.io/books", {
      booksValue,
      authorValue,
      subAuthorValue,
      yearValue,
      publisherValue,
      pagesValue,
      categoryValue,
    });
    addNotification();
    setBooks("");
    setAuthor("");
    setSubAuthor("");
    setYear("");
    setPublisher("");
    setPages("");
    setCategory("");
    getBooksData();
  };

  //Storing in localStorage

  const handleId = (data) => {
    setIsModalOpen(true);
    let {
      id,
      authorValue,
      booksValue,
      categoryValue,
      pagesValue,
      publisherValue,
      subAuthorValue,
      yearValue,
    } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("authorValue", authorValue);
    localStorage.setItem("booksValue", booksValue);
    localStorage.setItem("categoryValue", categoryValue);
    localStorage.setItem("pagesValue", pagesValue);
    localStorage.setItem("publisherValue", publisherValue);
    localStorage.setItem("subAuthorValue", subAuthorValue);
    localStorage.setItem("yearValue", yearValue);
  };

  //Delete

  const deleteBook = (id) => {
    axios
      .delete(`https://639f6b747aaf11ceb89a814e.mockapi.io/books/${id}`)
      .then(() => {
        getBooksData();
      });
    deleteNotification();
  };

  //Onchange

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

  return (
    <MainHomeCom>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        centered
        width={800}
        maskStyle={{ background: "rgba(0, 0, 0, 0.8)" }}
      >
        <EditModal onCancel={handleCancel} />
      </Modal>
      <Container>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: `Book List`,
              key: "1",
              children: (
                <>
                  <TabOneContent>
                    <BookListHeader>Your Books :</BookListHeader>
                    <CardContainer>
                      <Row>
                        {booksData.length === 0 ? (
                          <WarningText>
                            Oops. It seems that you don't have any book yet.
                            Please create your book at "Add New Book" tab to
                            view it here.
                          </WarningText>
                        ) : (
                          ""
                        )}

                        {booksData.map((book) => (
                          <Col
                            key={book.id}
                            sm={12}
                            md={6}
                            lg={6}
                            xl={4}
                            className="mt-5 d-flex justify-content-center"
                          >
                            <Card>
                              <Card.Body>
                                <Card.Title>
                                  Book Name : <span>{book.booksValue}</span>
                                </Card.Title>
                                <Card.Text>
                                  <Author>
                                    Author : <span>{book.authorValue}</span>
                                  </Author>
                                  <SubAuthor>
                                    Sub Author :{" "}
                                    <span>{book.subAuthorValue}</span>
                                  </SubAuthor>
                                  <Year>
                                    Year : <span>{book.yearValue}</span>
                                  </Year>
                                  <Publisher>
                                    Publisher :{" "}
                                    <span>{book.publisherValue}</span>
                                  </Publisher>
                                  <Pages>
                                    Pages : <span>{book.pagesValue}</span>
                                  </Pages>
                                  <Category>
                                    Category : <span>{book.categoryValue}</span>
                                  </Category>
                                  <BtnWrapper>
                                    <EditBtn onClick={() => handleId(book)}>
                                      Edit
                                    </EditBtn>
                                    <DeleteBtn
                                      onClick={() => deleteBook(book.id)}
                                    >
                                      Delete
                                    </DeleteBtn>
                                  </BtnWrapper>
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                      </Row>
                    </CardContainer>
                  </TabOneContent>
                </>
              ),
            },
            {
              label: `Add New Book`,
              key: "2",
              children: (
                <>
                  <TabOneContent>
                    <BookListHeader>Add New Book :</BookListHeader>
                    <FormContainer>
                      <Form onSubmit={(e) => e.preventDefault()}>
                        <Form.Group className="mb-3">
                          <Form.Label>Book Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Book Name"
                            value={booksValue}
                            onChange={hanldeBooks}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Author</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Author Name"
                            value={authorValue}
                            onChange={handleAuthor}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Sub Author: </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Sub Author Name"
                            value={subAuthorValue}
                            onChange={handleSubAuthor}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Year: </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter Year"
                            value={yearValue}
                            onChange={handleYear}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Publisher: </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Publisher Name"
                            value={publisherValue}
                            onChange={handlePublisher}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Pages: </Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter Pages "
                            value={pagesValue}
                            onChange={handlePages}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Category: </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Category "
                            value={categoryValue}
                            onChange={hanldeCategory}
                          />
                        </Form.Group>

                        <SubmitBtn onClick={sendData}>Create Book</SubmitBtn>
                      </Form>
                    </FormContainer>
                  </TabOneContent>
                </>
              ),
            },
          ]}
        />
      </Container>
    </MainHomeCom>
  );
}

export default HomeCom;
