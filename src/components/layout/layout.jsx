import { ProgressBar } from "../progress-bar/progressBar";

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
