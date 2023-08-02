import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import { ComicsPage, MainPage, Page404, SingleComicPage } from "../pages";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route element={<MainPage />} path="/" />
            <Route element={<ComicsPage />} path="comics" />
            <Route element={<SingleComicPage />} path="comics/:comicId" />
            <Route element={<Page404 />} path="*"></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
