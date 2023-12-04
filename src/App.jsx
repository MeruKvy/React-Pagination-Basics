import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./global.css";

const Posts = lazy(() => import("./views/Posts"));
const Products = lazy(() => import("./views/Products"));
const PublicLayout = lazy(() => import("./layouts/PublicLayout"));
const Main = lazy(() => import("./views/Main"));


function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<PublicLayout/>}>
          <Route path="/"  element={<Main/>} />
          <Route path="/posts" element={<Posts />}/>
          <Route path="/products" element={<Products />}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
