import { ProgressBar } from "../progress-bar/progress-bar";

export const Layout = ({ children }) => {
  return (
    <>
      <header>
        <ProgressBar />
      </header>
      <main>{children}</main>
      <footer>FOOTER</footer>
    </>
  );
};
