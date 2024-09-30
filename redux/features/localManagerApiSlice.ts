import { apiSlice } from "../services/apiSlice";

interface LocalManager {
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

const LocalManagerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    localManagerList: builder.query<LocalManager[], void>({
      query: () => "/register/local-manager-profile/",
    }),

    registerLocalManager: builder.mutation({
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
        url: "/register/local-manager-profile/",
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

export const { useLocalManagerListQuery, useRegisterLocalManagerMutation } =
  LocalManagerApiSlice;
