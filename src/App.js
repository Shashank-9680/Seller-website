// src/App.js
import React, { useState } from "react";
import { carData } from "./data";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "./components/Searchbar";
import { BsSearch } from "react-icons/bs";
import CarCard from "./components/CarCard";
import { MdOutlineArrowDropDown } from "react-icons/md";
import PaginationBar from "./components/PaginationBar";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const itemsPerPage = 6;
const totalItems = carData.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
import "./App.css";
import CarSearchApp from "./components/CarCard";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const { page } = useParams();
  const currentPage = parseInt(page, 10) || 1;

  const [searchTerm, setSearchTerm] = useState("");

  const handlePageChange = (newPage) => {
    // window.location.href = `/page/${newPage}`;
    navigate(`/page/${newPage}`);
  };

  const filteredCars = carData.filter((car) =>
    car.make.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCars = filteredCars.slice(startIndex, endIndex);
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <div className="search-bar">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />{" "}
              <BsSearch></BsSearch>
            </div>
          </Container>
          <Container>
            {" "}
            <div className="navbar-item">
              <div>Relevance</div>
              <MdOutlineArrowDropDown></MdOutlineArrowDropDown>
            </div>
          </Container>
          <Container>
            <div className="navbar-item">
              <div>All Brands</div>
              <MdOutlineArrowDropDown></MdOutlineArrowDropDown>
            </div>
          </Container>
        </Navbar>
        {/* <div className="card-container">
          {currentCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div> */}
        <Container>
          <Row>
            {currentCars.map((car) => (
              <CarCard key={car.id} car={car}></CarCard>
            ))}
          </Row>
        </Container>

        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Container>
    </div>
  );
}

export default App;
