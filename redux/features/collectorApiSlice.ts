import { apiSlice } from "../services/apiSlice";
import { Collector } from "@/types/interfaces";
import { EndpointBuilder } from "@reduxjs/toolkit/query";

const COLLECTOR_URL = "/register/collector-profile/";
const createCollectorEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  retrieveCollector: builder.query<Collector[], void>({
    query: () => `${COLLECTOR_URL}/me/`,
  }),

  registerCollector: builder.mutation<Collector, Collector>({
    query: (collectorData) => ({
      url: COLLECTOR_URL,
      method: "POST",
      body: collectorData,
    }),
  }),
  updateCollector: builder.mutation<Collector, Collector>({
    query: (collectorData) => ({
      url: COLLECTOR_URL,
      method: "PUT",
      body: collectorData,
    }),
  }),
});

const CollectorApiSlice = apiSlice.injectEndpoints({
  endpoints: createCollectorEndpoints,
});

export const {
  useRetrieveCollectorQuery,
  useRegisterCollectorMutation,
  useUpdateCollectorMutation,
} = CollectorApiSlice;
