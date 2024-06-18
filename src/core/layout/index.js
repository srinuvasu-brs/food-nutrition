import React from "react";

export const Layout = (props) => {

  const { children } = props;

  return (
    <>
      <header>
        <div className="d-flex bg-gradient">
          <div className="d-flex flex-grow-1">
            <nav className="courseTitle">
              <button className="navbar-brand border-0">
                <img src={require("../../Food logo.png")} alt="logo" />
              </button>
            </nav>
            <div className="flex-grow-1">
              <div className="ReactTitle ps-3  d-flex align-items-center">
                <img src={require("../../react-2@2x.png")} alt="logo" />
                <h3 className="mb-0">Food Nutrition</h3>
              </div>
              <div className="d-flex ps-3 align-items-center">
                <div className="flex-grow-1">
                  <h4>Food Nutrition</h4>
                  <p className="pb-0 mb-0">
                  Purpose: Food and nutrition database in the world. We can find the nutrition list for the food items.
                  </p>
                </div>
                <div className="link me-3">
                  <p className="mb-0 py-0">
                    {" "}
                    <a href="https://developer.nutritionix.com/docs/v2">
                    https://developer.nutritionix.com/docs/v2
                    </a>
                    <img
                      src={require("../../noun-link.png")}
                      className="ms-2"
                      alt="logo"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main role="main" className="container pt-5">
        {children}
      </main>

      <footer className="footer footer-dark">
        <div className="d-flex justify-content-between px-5">
          <div>
            <p>PROVIDE ENERGY, CONTRIBUTE TO BODY STRUCTURE AND REGULATE CHEMICAL PROCESSES IN THE BODY.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
