export interface Count {
  total: number;
}

export interface User {
  id: number;
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

export interface RegionalManager {
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

export type RegisterRegionalManagerParams = Omit<RegionalManager, "user">;

export interface LocalManager {
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

export type RegisterLocalManagerParams = Omit<LocalManager, "user">;

export interface Sponsor {
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

export type RegisterSponsorParams = Omit<Sponsor, "user">;

// #TODO: probablemente el campo email no deba estar presente
export interface Collector {
  first_name: string;
  middle_name: string;
  last_name: string;
  second_last_name: string;
  gender: string;
  birthdate: string;
  email: string;
}

export interface authState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
}
