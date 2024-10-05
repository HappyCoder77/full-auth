import { apiSlice } from "../services/apiSlice";
import { setUser } from "./authSlice";
import { User } from "@/types/interfaces";
import { EndpointBuilder } from "@reduxjs/toolkit/query";
import {
  LoginCredentials,
  RegisterCredentials,
  ActivationCredentials,
  ResetPasswordRequest,
  ResetPasswordConfirmRequest,
} from "@/types/authInterfaces";

const USERS_URL = "/users";
const JWT_URL = "/jwt";

type MutationParams<T> = {
  body: T;
  url: string;
  method: "POST";
};

const createMutation = <TReturn, TBody>(url: string) => ({
  query: (body: TBody): MutationParams<TBody> => ({
    url,
    method: "POST",
    body,
  }),
  transformResponse: (response: TReturn) => response,
});

const retrieveUser = (builder: EndpointBuilder<any, any, any>) =>
  builder.query<User, void>({
    query: () => `${USERS_URL}/me/`,
    async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      try {
        const { data } = await queryFulfilled;
        dispatch(setUser(data));
      } catch (error) {
        console.error("Error interno al consultar os datos del usuario");
      }
    },
  });

const login = (builder: EndpointBuilder<any, any, any>) =>
  builder.mutation(
    createMutation<User, LoginCredentials>(`${JWT_URL}/create/`)
  );

const register = (builder: EndpointBuilder<any, any, any>) =>
  builder.mutation(createMutation<void, RegisterCredentials>(`${USERS_URL}/`));

const verify = (builder: EndpointBuilder<any, any, any>) =>
  builder.mutation(createMutation<void, void>(`${JWT_URL}/verify/`));

const logout = (builder: EndpointBuilder<any, any, any>) =>
  builder.mutation(createMutation<void, void>("/logout/"));

const activation = (builder: EndpointBuilder<any, any, any>) =>
  builder.mutation(
    createMutation<void, ActivationCredentials>(`${USERS_URL}/activation/`)
  );

const resetPassword = (builder: EndpointBuilder<any, any, any>) =>
  builder.mutation(
    createMutation<void, ResetPasswordRequest>(`${USERS_URL}/reset_password/`)
  );

const resetPasswordConfirm = (builder: EndpointBuilder<any, any, any>) =>
  builder.mutation(
    createMutation<void, ResetPasswordConfirmRequest>(
      `${USERS_URL}/reset_password_confirm/`
    )
  );

const createAuthEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  retrieveUser: retrieveUser(builder),
  login: login(builder),
  register: register(builder),
  verify: verify(builder),
  logout: logout(builder),
  activation: activation(builder),
  resetPassword: resetPassword(builder),
  resetPasswordConfirm: resetPasswordConfirm(builder),
});

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: createAuthEndpoints,
});

export const {
  useRetrieveUserQuery,
  useLoginMutation,
  useRegisterMutation,
  useVerifyMutation,
  useLogoutMutation,
  useActivationMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
} = authApiSlice;
