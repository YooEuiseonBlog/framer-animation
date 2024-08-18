import { createBrowserRouter } from "react-router-dom";
import Root from "../screens/Root";
import Home from "../screens/Home";
import VariantsPage from "../screens/VariantsPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "variants",
        element: <VariantsPage />,
      },
    ],
  },
]);

export default AppRouter;
