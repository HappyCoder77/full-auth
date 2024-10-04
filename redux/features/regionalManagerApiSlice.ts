import { apiSlice } from "../services/apiSlice";
import {
  RegionalManager,
  Count,
  RegisterRegionalManagerParams,
} from "@/types/interfaces";
import { EndpointBuilder } from "@reduxjs/toolkit/query";

const REGIONALMANAGER_URL = "/register/regional-manager-profile/";

const createRegionalManagerEndpoints = (
  builder: EndpointBuilder<any, any, any>
) => ({
  regionalManagerList: builder.query<RegionalManager[], void>({
    query: () => REGIONALMANAGER_URL,
  }),

  regionalManagerCount: builder.query<Count, void>({
    query: () => `${REGIONALMANAGER_URL}count/`,
  }),
  registerRegionalManager: builder.mutation<
    RegionalManager,
    RegisterRegionalManagerParams
  >({
    query: (regionalManagerData: RegionalManager) => ({
      url: REGIONALMANAGER_URL,
      method: "POST",
      body: regionalManagerData,
    }),
  }),
});

const RegionalManagerApiSlice = apiSlice.injectEndpoints({
  endpoints: createRegionalManagerEndpoints,
});

export const {
  useRegionalManagerListQuery,
  useRegionalManagerCountQuery,
  useRegisterRegionalManagerMutation,
} = RegionalManagerApiSlice;
