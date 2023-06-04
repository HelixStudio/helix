import toast from "react-hot-toast";

export const toastSuccess = (msg: string) => {
  toast.success(msg, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};
