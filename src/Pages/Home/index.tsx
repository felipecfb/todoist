import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { TaskContent } from "../../components/TaskContent";


export default function Home() {
  return (
    <>
      <Header />
      <TaskContent />
      <Footer />
    </>
  );
}
