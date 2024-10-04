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
