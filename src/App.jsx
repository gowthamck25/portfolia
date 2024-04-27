import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./styles/movable-sidebar.css";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import ExperienceDetails from "./features/work/Experience/ExperienceDetails";
import ProjectsDetails from "./features/work/Projects/ProjectsDetails";
import MiniProjectsDetails from "./features/work/MiniProjects/MiniProjectsDetails";
import CertificatesDetails from "./features/work/Certificates/CertificatesDetails";
import EducationDetails from "./features/work/Education/EducationDetails";

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/work" element={<Work />}>
              <Route
                path="/work"
                element={<Navigate replace to="/work/experience" />}
              />
              <Route path="/work/experience" element={<ExperienceDetails />} />
              <Route path="/work/projects" element={<ProjectsDetails />} />
              <Route
                path="/work/miniprojects"
                element={<MiniProjectsDetails />}
              />
              <Route
                path="/work/certificates"
                element={<CertificatesDetails />}
              />
              <Route path="/work/education" element={<EducationDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
