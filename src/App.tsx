import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/layout";
import About from "./pages/about/about";
import BlogCreate from "./pages/blog-create/blog-create";
import Blog from "./pages/blog/blog";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/ka" />} />

      <Route path=":lang">
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts/:id" element={<Blog />} />
          <Route path="create" element={<BlogCreate />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Route>
      </Route>
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
