import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProps {
  type: string;
  message: string;
}

export const showToast = ({ type, message }: ToastProps) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
  }
};

export default function ToastAnimated() {
  return <ToastContainer />;
}
