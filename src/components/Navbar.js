import React ,{useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import News from "./News";
import LoadingBar from "react-top-loading-bar";


 function Navbar() {
  const [progress, setProgress] = useState(0)

 
    return (
      <div>
        <Router>
          <LoadingBar color='#f11946' progress={progress} />
          <nav
            className="navbar sticky-top navbar-expand-lg bg-body-tertiary bg-dark"
            data-bs-theme="dark"
          >
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">NewsMonkey</Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"> <Link className="nav-link active" aria-current="page" to="/">Home</Link> </li>
                  <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link></li>
                  <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                  <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link></li>
                  <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link></li>
                  <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link></li>
                  <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
                {/* <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
              </div>
            </div>
          </nav>

          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category="entertainment" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    );
  
}

export default Navbar;
