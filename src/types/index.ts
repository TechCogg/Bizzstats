
export interface Url {
    url?: string;
  }
  export interface State {
    name?: string;
    documentType?: string;
  }
  export type INavigate = (url: Url | string | number, state?: State) => void;
  export interface INavigateProps {
    navigate?: INavigate;
  }