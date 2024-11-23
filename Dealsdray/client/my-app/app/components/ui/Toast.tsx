import { toast } from "react-toastify";

export const showSuccessToast = (message: string) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        style: {
            fontSize: "0.875rem",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#4caf50",
            color: "#fff",
        },
    });
};

export const showErrorToast = (message: string) => {
    toast.error(message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        style: {
            fontSize: "0.875rem",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#f44336",
            color: "#fff",
        },
    });
};
