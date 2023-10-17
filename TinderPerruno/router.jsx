import { Route, Routes } from "react-router-dom";
import Home from "./src/Pages/Home";
import ErrorPage from "./src/Pages/ErrorPage";

const RouterApp = () => {
  return <LogedInRoutes />;
};


const LogedInRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </>
  );
};
export default RouterApp;