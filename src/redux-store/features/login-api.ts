import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginApi = async (credentials: any) => {
   try {
      const response = await axios.post(
         `https://sohagsheik-server.vercel.app/api/v1/signin`,
         credentials
      );

      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
   } catch (error: any) {
      throw new Error(error?.response?.data?.message || "Login failed");
   }
};
