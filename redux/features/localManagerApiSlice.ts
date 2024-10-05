import { apiSlice } from "../services/apiSlice";
import {
  Count,
  LocalManager,
  RegisterLocalManagerParams,
} from "@/types/interfaces";

import { EndpointBuilder } from "@reduxjs/toolkit/query";

const LOCALMANAGER_URL = "/register/local-manager-profile/";
const createLocalManagerEndpoints = (
  builder: EndpointBuilder<any, any, any>
) => ({
  localManagerList: builder.query<LocalManager[], void>({
    query: () => LOCALMANAGER_URL,
  }),

  localManagerCount: builder.query<Count, void>({
    query: () => `${LOCALMANAGER_URL}count/`,
  }),

  localManagerCountByCreator: builder.query<Count, number>({
    query: (creator_id) => `${LOCALMANAGER_URL}count-by-creator/${creator_id}`,
  }),

  registerLocalManager: builder.mutation<
    LocalManager,
    RegisterLocalManagerParams
  >({
    query: (localManagerData: LocalManager) => ({
      url: "/register/local-manager-profile/",
      method: "POST",
      body: localManagerData,
    }),
  }),
});

const LocalManagerApiSlice = apiSlice.injectEndpoints({
  endpoints: createLocalManagerEndpoints,
});

export const {
  useLocalManagerListQuery,
  useLocalManagerCountQuery,
  useLocalManagerCountByCreatorQuery,
  useRegisterLocalManagerMutation,
} = LocalManagerApiSlice;
