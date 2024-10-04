import { Count } from "@/types/interfaces";
import { apiSlice } from "../services/apiSlice";
// TODO: refactor interfaces in types/interfaces
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

    dealerCount: builder.query<Count, void>({
      query: () => "register/dealer-profile/count/",
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

export const {
  useDealerListQuery,
  useDealerCountQuery,
  useRegisterDealerMutation,
} = DealerApiSlice;
