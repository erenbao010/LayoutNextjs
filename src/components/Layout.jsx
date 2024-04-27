"use client";
import React from "react";
import "../app/globals.css";
import NavBarSide from "@/components/NavBarSide";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopLeftImg from "@/components/topLeftImg";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Transition";
import { useRouter } from "next/navigation";
function Layout({ children }) {
  const router = useRouter();
  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full"></motion.div>
        <Transition></Transition>
      </AnimatePresence>
      <TopLeftImg></TopLeftImg>
      <NavBarSide></NavBarSide>
      {children}
    </div>
  );
}

export default Layout;
