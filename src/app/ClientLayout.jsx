"use client";

import "./globals.css";
import { useMemo } from "react";
import Navbar from "@/components/Header/Navbar";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Footer from "@/components/Footer/Footer";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "@/Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ItemsBar from "@/components/Items/ItemsBar";
import Checkouts from "./checkouts/page";
import { usePathname } from "next/navigation";

function AppContent({ children }) {
  const open = useSelector((state) => state.itemsCart.open);
  const pathname = usePathname();
  const isCheckoutPage = useMemo(() => pathname === "/checkouts", [pathname]);
  console.log("AppContent rendered, isCheckoutPage:", isCheckoutPage);


  console.log("is the bar open", open);
  return (
    <>
      {!isCheckoutPage && (
        <div className={`relative ${open ? "blur-sm" : ""} transition-all duration-300`}>
          <Navbar />
          {children}    
          <Footer />
        </div>
      )}
      {open && <ItemsBar />}
    </>
  );
}

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  console.log("pathname:", pathname); // Add this line

  const isCheckoutPage = useMemo(() => pathname === "/checkouts", [pathname]);

  console.log("ClientLayout rendered, isCheckoutPage:", isCheckoutPage);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider withGlobalClasses>
          {/* ✅ Only render Checkouts on the /checkouts route */}
          {isCheckoutPage ? <Checkouts /> : <AppContent>{children}</AppContent>}
        </MantineProvider>
      </PersistGate>
    </Provider>
  );
}
