import { apiSlice } from "../slice/apiSlice";
const projectApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getProjects: builder.query({
         query: () => ({
            url: `/project`,
         }),
         providesTags: ["project"],
      }),
   }),
});
export const { useGetProjectsQuery } = projectApi;
