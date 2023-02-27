import { Home } from "./pages/dashboard";
import { Layout } from "./components/layout";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Projects from "./pages/projects";
import AuthLayout from "./auth/AuthLayout";
import Login from "./auth/Login";
import SignUp from "./auth/signup";
import ForgetPassword from "./auth/password";

function App() {

  // Routing with latest version of react-router 
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route element={ <AuthLayout /> }>
          <Route index element={ <Login /> } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}
export default App; 
