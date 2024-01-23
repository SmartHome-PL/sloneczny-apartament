export interface MenuItem {
  id: number;
  title: string;
  path: string;
  icon: string;
  disabled: boolean;
  haveRedirectionTo: number[];
}
