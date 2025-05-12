/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue" style={{
        minHeight: "70vh",
      }}> 
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(photos/baby-site/LBI-2024-31-cropped.jpg)",
            backgroundPosition: "left bottom",
          }}
          ref={pageHeader}
        ></div>
        <Container className="vh-50">
          <div className="content-center brand">
            <h1 className="h1">Baby Musselman</h1>
            <h3>Coming September 2025</h3>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
