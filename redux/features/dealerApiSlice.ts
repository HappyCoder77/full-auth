import { apiSlice } from "../services/apiSlice";
import { Count, Dealer, RegisterDealerParams } from "@/types/interfaces";
import { EndpointBuilder } from "@reduxjs/toolkit/query/react";
const DEALER_URL = "/register/dealer-profile/";

const createDealerEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  dealerList: builder.query<Dealer[], void>({
    query: () => DEALER_URL,
  }),

  dealerCount: builder.query<Count, void>({
    query: () => `${DEALER_URL}count/`,
  }),

  registerDealer: builder.mutation<Dealer, RegisterDealerParams>({
    query: (dealerData: Dealer) => ({
      url: DEALER_URL,
      method: "POST",
      body: dealerData,
    }),
  }),
});

const DealerApiSlice = apiSlice.injectEndpoints({
  endpoints: createDealerEndpoints,
});

export const {
  useDealerListQuery,
  useDealerCountQuery,
  useRegisterDealerMutation,
} = DealerApiSlice;
