import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
   reducerPath: "api",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://sohagsheik-server.vercel.app/api/v1",
      prepareHeaders: (headers) => {
         // const token = getCookie("token");
         // if (token) {
         //   headers.set("Authorization", `Bearer ${token}`);
         // }
         return headers;
      },
   }),
   tagTypes: ["project", "users"],
   endpoints: () => ({}),
});
