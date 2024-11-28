import { Routes, Route, Outlet } from "react-router-dom";
import Blog from "./pages/Blog";
import Create from "./pages/Create";
import EditBlog from "./pages/EditBlog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyBlog from "./pages/MyBlog";
import Register from "./pages/Register";
import ViewBlog from "./pages/ViewBlog";
import AuthLayout from "./AuthLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Authenticated routes */}
        <Route element={<AuthLayout />}>
          <Route path="/user" element={<Blog />} />
          <Route path="/user/create" element={<Create />} />
          <Route path="/user/edit" element={<EditBlog />} />
          <Route path="/user/myblog" element={<MyBlog />} />
          <Route path="/user/view" element={<ViewBlog />} />
        </Route>
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
