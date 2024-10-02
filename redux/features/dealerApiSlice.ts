import { apiSlice } from "../services/apiSlice";

interface Dealer {
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

const DealerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    dealerList: builder.query<Dealer[], void>({
      query: () => "/register/dealer-profile/",
    }),

    registerDealer: builder.mutation({
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
        url: "/register/dealer-profile/",
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

export const { useDealerListQuery, useRegisterDealerMutation } = DealerApiSlice;
