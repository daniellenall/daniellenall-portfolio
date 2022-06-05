import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer } from "./components/layout";
import { Home, About, Contact, Projects } from "./pages";

ReactDOM.render(
    <Router>
        <div className="wrapper">
            <Navigation />
            <div className="main">
                <header className="App-header">
                </header>
                    <section id="about" className="section">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </section>
                    <Footer />
            </div>
        </div>

    </Router>,


    document.getElementById("root")
);

serviceWorker.unregister();