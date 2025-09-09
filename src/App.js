import { RouterProvider } from "react-router-dom";
import { router } from "./router"; // ou `router` default

export default function App() {
  return <RouterProvider router={router} />;
}
