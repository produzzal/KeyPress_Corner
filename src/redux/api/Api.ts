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
    getAllProducts: builder.query({
      query: ({ searchTerm = "", minPrice, maxPrice, sortOrder }) => {
        let query = `/all-products?searchTerm=${searchTerm}`;
        if (minPrice) query += `&minPrice=${minPrice}`;
        if (maxPrice) query += `&maxPrice=${maxPrice}`;
        if (sortOrder) query += `&sortOrder=${sortOrder}`;
        return query;
      },
    }),
  }),
});

export const { useGetFeaturedProductsQuery, useGetAllProductsQuery } = baseApi;
