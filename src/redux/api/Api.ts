// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getFeaturedProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/products",
      }),
    }),
  }),
});

export const { useGetFeaturedProductsQuery } = baseApi;
