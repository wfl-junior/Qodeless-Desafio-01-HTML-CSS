import { Fragment } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const App: React.FC = () => (
  <Fragment>
    <Header />
    <Main />
    <Footer />
  </Fragment>
);
