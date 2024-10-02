import { apiSlice } from "../services/apiSlice";

interface Sponsor {
  user: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  second_last_name: string;
  gender: string;
  birthdate: string;
  email: string;
  created_by: number;
}

const SponsorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sponsorList: builder.query<Sponsor[], void>({
      query: () => "/register/sponsor-profile/",
    }),

    sponsorRegister: builder.mutation({
      query: ({
        first_name,
        middle_name,
        last_name,
        second_last_name,
        gender,
        birthdate,
        email,
        created_by,
      }) => ({
        url: "/register/sponsor-profile/",
        method: "POST",
        body: {
          first_name,
          middle_name,
          last_name,
          second_last_name,
          gender,
          birthdate,
          email,
          created_by,
        },
      }),
    }),
  }),
});

export const { useSponsorListQuery, useSponsorRegisterMutation } =
  SponsorApiSlice;
