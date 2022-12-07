import { useState } from "react";

import ProjectsNavbar from "../components/ProjectsNavbar";
import { Category } from "../types";

const Projects = () => {

  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      
      setActive(category);
      return;
    }

    
    
    
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <div className="relative grid grid-cols-12 gap-4 my-3">
       
           
          </div>
        
      </div>
    
  );
};

export default Projects;
