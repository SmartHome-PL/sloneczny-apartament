export interface Redirect {
  id: number;
  title: string;
  path: string;
  icon: string;
  disabled: boolean;
}

export interface PageBuilderData {
  title: string;
  titleIcon: string;
  subtitle: string;
  redirections: Redirect[];
}
