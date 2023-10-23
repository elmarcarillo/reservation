import { getDateString } from "../../utils/date";
import { Container } from "./styles";
import { ProviderScheduleProps } from "./types";

export const ProviderSchedule: React.FC<ProviderScheduleProps> = (props) => {
  const { providers } = props;

  const providerList = providers.map((provider) => (
    <div key={provider.id}>
      {provider.schedule.map((schedule) => (
        <div>
          <div key={schedule.startTime}>
            {getDateString(schedule.startTime)}
          </div>
          <div key={schedule.startTime}>{getDateString(schedule.endTime)}</div>
        </div>
      ))}
    </div>
  ));

  return <Container>{providerList}</Container>;
};
