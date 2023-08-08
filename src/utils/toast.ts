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

export const toastError = (msg: string) => {
  toast.error(msg, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};

export const toastPlain = (msg: string) => {
  toast(msg, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};
