import { Container, Dropdown, ButtonGroup, ToggleButton } from "./styles";
import { NavBarProps, NavBarView } from "./types";

export const NavBar: React.FC<NavBarProps> = (props) => {
  const {
    providers = [],
    clients = [],
    currentView = NavBarView.Client,
    currentClient,
    currentProvider,
    onChangeView = () => {},
    onChangeClient = () => {},
    onChangeProvider = () => {},
  } = props;

  return (
    <Container>
      <ButtonGroup>
        <ToggleButton
          $isSelected={currentView === NavBarView.Client}
          onClick={() => onChangeView(NavBarView.Client)}
        >
          Client View
        </ToggleButton>
        <ToggleButton
          $isSelected={currentView === NavBarView.Provider}
          onClick={() => onChangeView(NavBarView.Provider)}
        >
          Provider View
        </ToggleButton>
      </ButtonGroup>
      {currentView === NavBarView.Client && (
        <>
          Client:
          <Dropdown
            value={currentClient?.id}
            onChange={(e) => {
              const client = clients.find(
                (client) => `${client.id}` === e.target.value
              );
              if (client) {
                onChangeClient(client);
              }
            }}
          >
            {clients.map((client) => (
              <option key={`client-option-${client.id}`} value={client.id}>
                Client #{client.id}
              </option>
            ))}
          </Dropdown>
        </>
      )}
      {currentView === NavBarView.Provider && (
        <>
          Provider:
          <Dropdown
            value={currentProvider?.id}
            onChange={(e) => {
              const provider = providers.find(
                (provider) => `${provider.id}` === e.target.value
              );
              if (provider) {
                onChangeProvider(provider);
              }
            }}
          >
            {providers.map((provider) => (
              <option
                key={`provider-option-${provider.id}`}
                value={provider.id}
              >
                Provider #{provider.id}
              </option>
            ))}
          </Dropdown>
        </>
      )}
    </Container>
  );
};
