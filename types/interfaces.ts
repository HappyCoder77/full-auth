export interface Count {
  total: number;
}

export interface User {
  email: string;
  is_superuser: boolean;
  is_regionalmanager: boolean;
  is_localmanager: boolean;
  is_sponsor: boolean;
  is_dealer: boolean;
  is_collector: boolean;
  has_profile: boolean;
}

export interface Dealer {
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

export type RegisterDealerParams = Omit<Dealer, "user">;
