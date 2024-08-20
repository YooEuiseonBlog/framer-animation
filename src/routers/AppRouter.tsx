import { createBrowserRouter } from "react-router-dom";
import Root from "../screens/Root";
import Home from "../screens/Home";
import VariantsPage from "../screens/VariantsPage";
import VariantsPage2 from "../screens/VariantsPage2";
import GesturesPage from "../screens/Gestures";

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
      {
        path: "variants2",
        element: <VariantsPage2 />,
      },
      {
        path: "gestures",
        element: <GesturesPage />,
      },
    ],
  },
]);

export default AppRouter;
