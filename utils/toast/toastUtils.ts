import { toast } from "react-hot-toast";

export const notify = (type: string, message: string) => {
  type === "success" && toast.success(message);
  type === "error" && toast.error(message);
  type === "loading" && toast.loading(message);
};
