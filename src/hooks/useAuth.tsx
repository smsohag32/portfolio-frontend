import { RootState } from "@/redux-store";
import { useSelector } from "react-redux";

export const useAuth = () => {
   const { user, token, isLoading } = useSelector((state: RootState) => state.auth);
   return { user, token, isLoading };
};
