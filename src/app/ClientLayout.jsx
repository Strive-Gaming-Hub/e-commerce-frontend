"use client";

import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import '@mantine/core/styles.css';
import {MantineProvider } from '@mantine/core';
import Footer from "@/components/Footer/Footer";
import { Provider } from "react-redux";
import {store,persistor} from "@/Redux/store";
import { PersistGate } from "redux-persist/integration/react";



export default function ClientLayout({ children }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <MantineProvider withGlobalClasses>
          <Navbar />
          {children}
          <Footer />
        </MantineProvider></PersistGate>
      </Provider>
    </>
  );
}