import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Calculator from "./pages/Calculator";
import Tables from "./pages/Tables";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Calculator />
      },
      {
        path: "tabelas",
        element: <Tables />
      }
    ]
  }
]);

export default router;