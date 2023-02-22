import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function News() {
  return (
    <>
      <div className="container">
        <h2 className="news__title">News</h2>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2 button__group" aria-label="First group">
            <Button className="active__button">1</Button>
            <Button className="button__notActive">2</Button>
            <Button className="button__notActive">3</Button>
            <Button className="button__notActive">4</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <div className="row gy-4">
          <div className="col-12 col-md-6 col-lg-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/News images/news-1.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary" className="news__button">
                  MORE
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/News images/news-2.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary" className="news__button">
                  MORE
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/News images/news-3.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary" className="news__button">
                  MORE
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/News images/news-4.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary" className="news__button">
                  MORE
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/News images/news-5.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary" className="news__button">
                  MORE
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/News images/news-6.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary" className="news__button">
                  MORE
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/News images/news-7.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary" className="news__button">
                  MORE
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="/News images/news-8.jpg" />
              <Card.Body>
                <Card.Title>Nunc porttitor vel</Card.Title>
                <Card.Text>
                  Nunc malesuada eget est fringilla dapibus.
                </Card.Text>
                <Button variant="primary" className="news__button">
                  MORE
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button className="active__button">1</Button>
            <Button className="button__notActive">2</Button>
            <Button className="button__notActive">3</Button>
            <Button className="button__notActive">4</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    </>
  );
}

export default News;
