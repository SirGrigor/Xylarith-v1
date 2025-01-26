export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface NavigationItem {
  label: string;
  path: string;
  icon?: string;
}
