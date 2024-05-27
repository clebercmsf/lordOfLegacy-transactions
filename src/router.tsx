import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Calculator from "./pages/Calculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Calculator />
      }
    ]
  }
]);

export default router;