import { Count, Sponsor, RegisterSponsorParams } from "@/types/interfaces";
import { apiSlice } from "../services/apiSlice";
import { EndpointBuilder } from "@reduxjs/toolkit/query";

const SPONSOR_URL = "/register/sponsor-profile/";
const createSponsorEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  sponsorList: builder.query<Sponsor[], void>({
    query: () => SPONSOR_URL,
  }),

  sponsorCount: builder.query<Count, void>({
    query: () => `${SPONSOR_URL}count/`,
  }),

  sponsorRegister: builder.mutation<Sponsor, RegisterSponsorParams>({
    query: (sponsorData) => ({
      url: "/register/sponsor-profile/",
      method: "POST",
      body: sponsorData,
    }),
  }),
});

const SponsorApiSlice = apiSlice.injectEndpoints({
  endpoints: createSponsorEndpoints,
});

export const {
  useSponsorListQuery,
  useSponsorCountQuery,
  useSponsorRegisterMutation,
} = SponsorApiSlice;
