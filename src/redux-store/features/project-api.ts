import { apiSlice } from "../slice/apiSlice";

const projectApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      // GET all projects
      getProjects: builder.query({
         query: () => ({
            url: `/project`,
            method: "GET",
         }),
         providesTags: ["project"],
      }),

      // GET project by ID
      getProjectById: builder.query({
         query: (id) => ({
            url: `/project/${id}`,
            method: "GET",
         }),
         providesTags: ["project"],
      }),

      // CREATE project (multipart/form-data)
      createProject: builder.mutation({
         query: (formData) => ({
            url: `/project/`,
            method: "POST",
            body: formData,
         }),
         invalidatesTags: ["project"],
      }),

      // UPDATE project by ID (multipart/form-data)
      updateProject: builder.mutation({
         query: ({ id, formData }) => ({
            url: `/project/${id}`,
            method: "PUT",
            body: formData,
         }),
         invalidatesTags: ["project"],
      }),

      // DELETE project by ID
      deleteProject: builder.mutation({
         query: (id) => ({
            url: `/project/${id}`,
            method: "DELETE",
         }),
         invalidatesTags: ["project"],
      }),
      deleteProjectImage: builder.mutation({
         query: ({ projectId, imageUrl }) => ({
            url: `/project/${projectId}/image`,
            method: "DELETE",
            body: { imageUrl },
         }),
         invalidatesTags: ["project"],
      }),
   }),
});

export const {
   useGetProjectsQuery,
   useDeleteProjectImageMutation,
   useGetProjectByIdQuery,
   useCreateProjectMutation,
   useUpdateProjectMutation,
   useDeleteProjectMutation,
} = projectApi;
