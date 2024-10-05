export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  re_password: string;
}

export interface ActivationCredentials {
  uid: string;
  token: string;
}

export interface ResetPasswordRequest {
  email: string;
}

export interface ResetPasswordConfirmRequest extends ActivationCredentials {
  new_password: string;
  re_new_password: string;
}
