import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import AllBoxes from "../components/AllBoxes";
import Container from "../components/Container";
import ReviewsSection from "../ReviewsSection";
import AllReviews from "../components/AllReviews";
import SeminarsSection from "../components/SeminarsSection";
import AllSeminars from "../components/AllSeminars";
function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Container />
            <ReviewsSection />
             <SeminarsSection />
          </>
        }/>
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/allboxes" element={<AllBoxes />} />
        <Route path="/reviews" element={<AllReviews />} />
        <Route path="/seminars" element={<AllSeminars />}/>
      </Routes>
    </>
  );
}

export default Home;