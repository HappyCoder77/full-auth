import { apiSlice } from "../services/apiSlice";

interface RegionalManager {
  user: number;
  first_name: string;
  middle_name: string;
  first_last_name: string;
  second_last_name: string;
  sex: string;
  birthdate: string;
  email: string;
  created_by: number;
}

const RegionalManagerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    regionalManagerList: builder.query<RegionalManager[], void>({
      query: () => "/register/regional-manager-profile/",
    }),

    registerRegionalManager: builder.mutation({
      query: ({
        first_name,
        middle_name,
        first_last_name,
        second_last_name,
        sex,
        birthdate,
        email,
        created_by,
      }) => ({
        url: "/register",
        method: "POST",
        body: {
          first_name,
          middle_name,
          first_last_name,
          second_last_name,
          sex,
          birthdate,
          email,
          created_by,
        },
      }),
    }),
  }),
});

export const {
  useRegionalManagerListQuery,
  useRegisterRegionalManagerMutation,
} = RegionalManagerApiSlice;
