import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CarouselContainer from "../Carousel";
import Accordion from "react-bootstrap/Accordion";

function Home() {
  return (
    <>
      <CarouselContainer />
      <div className="container">
        <h2 className="home__title">We do the YAY things</h2>
        <p className="home__text">
          Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
          rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
          finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
          consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
          euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
          a, varius eget massa.
        </p>

        <div className="tabs__container d-none d-md-block ">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="first" title="First">
              <div className="firstTabContainer">
                <img
                  src="/Tab images/tab-1.jpg"
                  alt="Bike in shop"
                  className="tab__img"
                />
                <div className="tab__text">
                  <p className="tab__paragraph">
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div className="tab__socials">
                    <p>SHARE</p>
                    <ul>
                      <li>
                        <i class="fab fa-facebook-f"></i>
                      </li>
                      <li>
                        <i class="fab fa-twitter"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="second" title="Second">
              <div className="secondTabContainer">
                <img
                  src="/Tab images/tab-2.jpg"
                  alt="Old camera"
                  className="tab__img"
                />
                <div className="tab__text">
                  <p className="tab__paragraph">
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div className="tab__socials">
                    <p>SHARE</p>
                    <ul>
                      <li>
                        <i class="fab fa-facebook-f"></i>
                      </li>
                      <li>
                        <i class="fab fa-twitter"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="third" title="Third">
              <div className="thirdTabContainer">
                <img
                  src="/Tab images/tab-3.jpg"
                  alt="Broken tv"
                  className="tab__img"
                />
                <div className="tab__text">
                  <p className="tab__paragraph">
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div className="tab__socials">
                    <p>SHARE</p>
                    <ul>
                      <li>
                        <i class="fab fa-facebook-f"></i>
                      </li>
                      <li>
                        <i class="fab fa-twitter"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="accordion__container d-md-none">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>First</Accordion.Header>
            <Accordion.Body>
              <div className="firstTabContainer">
                <img
                  src="/Tab images/tab-1.jpg"
                  alt="Bike in shop"
                  className="tab__img"
                />
                <div className="tab__text">
                  <p className="tab__paragraph">
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div className="tab__socials">
                    <p>SHARE</p>
                    <ul>
                      <li>
                        <i class="fab fa-facebook-f"></i>
                      </li>
                      <li>
                        <i class="fab fa-twitter"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Second</Accordion.Header>
            <Accordion.Body>
              <div className="secondTabContainer">
                <img
                  src="/Tab images/tab-2.jpg"
                  alt="Old camera"
                  className="tab__img"
                />
                <div className="tab__text">
                  <p className="tab__paragraph">
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div className="tab__socials">
                    <p>SHARE</p>
                    <ul>
                      <li>
                        <i class="fab fa-facebook-f"></i>
                      </li>
                      <li>
                        <i class="fab fa-twitter"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Third</Accordion.Header>
            <Accordion.Body>
              <div className="thirdTabContainer">
                <img
                  src="/Tab images/tab-3.jpg"
                  alt="Broken tv"
                  className="tab__img"
                />
                <div className="tab__text">
                  <p className="tab__paragraph">
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div className="tab__socials">
                    <p>SHARE</p>
                    <ul>
                      <li>
                        <i class="fab fa-facebook-f"></i>
                      </li>
                      <li>
                        <i class="fab fa-twitter"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default Home;
