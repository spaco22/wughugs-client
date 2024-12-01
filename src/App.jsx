import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import NewUserPage from "./Pages/NewUserPage/NewUserPage";
import UserPage from "./Pages/UserPage/UserPage";
import AddWug from "./Pages/AddWugPage/AddWug";
import WugPage from "./Pages/WugPage/WugPage";
import EditWug from "./Pages/EditWug/EditWug";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/new-user" element={<NewUserPage />} />

          <Route path="/:username" element={<UserPage />} />

          <Route path="/add-wug" element={<AddWug />} />

          <Route path="/wugs/:wugId" element={<WugPage />} />

          <Route path="/wugs/:wugId/edit" element={<EditWug />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
