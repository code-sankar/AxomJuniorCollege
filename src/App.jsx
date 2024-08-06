import React from "react";
import Layout from "./Layout";
import './App.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  About,
  Academics,
  Admission,
  BeyondAcademics,
  Career,
  Contact,
  Courses,
  Home,
  Notice,
  StudentAdmin
} from "./components/Pages";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="academics" element={<Academics />} />
        <Route path="admission" element={<Admission />} />
        <Route path="beyondAcademics" element={<BeyondAcademics />} />
        <Route path="career" element={<Career />} />
        <Route path="contact" element={<Contact />} />
        <Route path="notice" element={<Notice />} />
        <Route path="courses" element={<Courses />} />
        <Route path="studentportal" element={<StudentAdmin />} />

      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
