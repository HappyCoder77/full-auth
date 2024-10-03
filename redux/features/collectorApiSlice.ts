import { apiSlice } from "../services/apiSlice";

interface Collector {
  first_name: string;
  middle_name: string;
  last_name: string;
  second_last_name: string;
  gender: string;
  birthdate: string;
  email: string;
}

const CollectorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveCollector: builder.query<Collector[], void>({
      query: () => "/register/collector-profile/me/",
    }),

    registerCollector: builder.mutation({
      query: ({
        first_name,
        middle_name,
        last_name,
        second_last_name,
        gender,
        birthdate,
        email,
      }) => ({
        url: "/register/collector-profile/",
        method: "POST",
        body: {
          first_name,
          middle_name,
          last_name,
          second_last_name,
          gender,
          birthdate,
          email,
        },
      }),
    }),
    updateCollector: builder.mutation({
      query: ({
        first_name,
        middle_name,
        last_name,
        second_last_name,
        gender,
        birthdate,
        email,
      }) => ({
        url: "/register/collector/",
        method: "PUT",
        body: {
          first_name,
          middle_name,
          last_name,
          second_last_name,
          gender,
          birthdate,
          email,
        },
      }),
    }),
  }),
});

export const {
  useRetrieveCollectorQuery,
  useRegisterCollectorMutation,
  useUpdateCollectorMutation,
} = CollectorApiSlice;
