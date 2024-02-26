import React from "react";
import NavBar from "@/components/NavBar";
import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import ProjectPage from "@/components/ProjectPage";
import ContactPage from "@/components/ContactPage";



const IndexPage = () =>{
  return(
    <div>
      <NavBar/>
      <HomePage/>
      <AboutPage/>
      <ProjectPage/>
      <ContactPage/>


    </div>
  );
};


export default IndexPage;