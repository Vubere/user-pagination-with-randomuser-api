import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./pages/ErrorBoundary";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFoundPage";
import Loading from "./components/loading";

const User = lazy(() => import("./pages/Users"));
const Home = lazy(() => import("./pages/Home"));
const UserDisplay = lazy(() =>
  import("./components/UsersComponents/UserDisplay")
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/users" element={<User />}>
                <Route path=":pagenum" element={<UserDisplay />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
