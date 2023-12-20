import { Nav } from "./_components/index";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
