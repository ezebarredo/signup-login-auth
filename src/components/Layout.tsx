import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h2>Authentication ✅</h2>
      <Outlet />
    </>
  );
}
