import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SinglePage = lazy(() => import("../pages/SinglePage"));
const SingleComicPage = lazy(() =>
  import("../pages/singleComicPage/singleComicPage")
);
const SingleCharacterPage = lazy(() =>
  import("../pages/singleCharacterPage/SingleCharacterPage")
);

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route element={<MainPage />} path="/" />
              <Route element={<ComicsPage />} path="comics" />
              <Route
                element={
                  <SinglePage Component={SingleComicPage} dataType="comic" />
                }
                path="/comics/:id"
              ></Route>
              <Route
                element={
                  <SinglePage Component={SingleCharacterPage} dataType="char" />
                }
                path="/characters/:id"
              ></Route>
              <Route element={<Page404 />} path="*"></Route>
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
