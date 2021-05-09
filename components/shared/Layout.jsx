import { useRouter } from "next/router";
import Meta from "./Meta";

const Layout = ({ children }) => {
  // const router = useRouter();
  // const isAdmin = router.pathname === "/admin";
  return (
    <main>
      <Meta />
      {children}
      {/* {!isAdmin && <Header />}
      {children}
      {!isAdmin && <Footer />} */}
    </main>
  );
};

export default Layout;
