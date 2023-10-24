import { Client } from "../../types/client";
import { Provider } from "../../types/provider";

export enum NavBarView {
  Client,
  Provider,
}

export type NavBarProps = {
  providers?: Provider[];
  clients?: Client[];
  currentView?: NavBarView;
  currentClient?: Client;
  currentProvider?: Provider;
  onChangeClient?: (client: Client) => void;
  onChangeProvider?: (provider: Provider) => void;
  onChangeView?: (view: NavBarView) => void;
};
