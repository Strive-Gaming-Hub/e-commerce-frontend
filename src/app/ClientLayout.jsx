"use client";

import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import '@mantine/core/styles.css';
import {MantineProvider } from '@mantine/core';
import Footer from "@/components/Footer/Footer";
import { Provider, useDispatch, useSelector } from "react-redux";
import {store,persistor} from "@/Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ItemsBar from "@/components/Items/ItemsBar";


function AppContent({ children }) {
  const open = useSelector((state) => state.itemsCart.open);
  // const dispatch=useDispatch()
  console.log("is the bar open",open)
  return (
    <>
      <div className={`relative ${open ? "blur-sm" : ""} transition-all duration-300`} >
      <Navbar />
      {children}    
      <Footer />
      </div>
       
      {open && <ItemsBar />}
    </>
  );
}

export default function ClientLayout({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider withGlobalClasses>
          <AppContent>{children}</AppContent>
        </MantineProvider>
      </PersistGate>
    </Provider>
  );
}