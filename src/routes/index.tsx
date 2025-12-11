import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Landing from "../pages/home";
import ProductDetailPage from "../pages/producDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
    </>
  )
);

export default router;
