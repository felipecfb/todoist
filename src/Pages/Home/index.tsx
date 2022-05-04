import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { RegisterTask } from "../../components/RegisterTask";
import { TaskList } from "../../components/TaskList";

export default function Home() {
  return (
    <>
      <Header />
      <RegisterTask />
      <TaskList />
      <Footer />
    </>
  );
}
