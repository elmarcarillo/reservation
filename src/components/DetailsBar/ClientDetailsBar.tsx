import { useCallback } from "react";
import {
  MAX_SLOTS_PER_DAY,
  RESERVATION_CUTOFF,
  RESERVATION_LENGTH_IN_MINUTES,
} from "../../consts";
import {
  addDay,
  addMinute,
  getDateString,
  getBeginningOfDay,
  getTimeString,
  getTimeOmittingDate,
  dateIsWithinRange,
} from "../../utils/date";
import {
  Container,
  Button,
  Dropdown,
  DropdownContainer,
  ProviderContainer,
} from "./styles";
import { ClientDetailsBarProps } from "./types";
import { schedulesByDate } from "../../utils/providerUtils";
import { NOW, NUMBER_OF_DAYS_TO_SHOW, TODAY } from "./consts";

export const ClientDetailsBar: React.FC<ClientDetailsBarProps> = (props) => {
  const {
    allReservations = [],
    date = NOW,
    onCreateReservation = () => {},
    onConfirmReservation = () => {},
    onChangeDate = () => {},
    onChangeProvider = () => {},
    selectedProvider,
    currentReservation,
    providers = [],
  } = props;
  const selectedDate = getBeginningOfDay(date);
  const selectedTime = getTimeOmittingDate(date);
  const currentSchedules = selectedProvider
    ? schedulesByDate(selectedProvider.schedules)[selectedDate]
    : [];
  const currentReservations = selectedProvider
    ? allReservations.filter(
        (res) =>
          res.providerId === selectedProvider.id &&
          getBeginningOfDay(res.startTime) === selectedDate
      )
    : [];

  const canCreate =
    selectedProvider &&
    currentSchedules?.length &&
    selectedDate + selectedTime >= NOW - RESERVATION_CUTOFF &&
    currentSchedules.some(({ startTime, endTime }) =>
      dateIsWithinRange(
        selectedDate + selectedTime,
        selectedDate + selectedTime + RESERVATION_LENGTH_IN_MINUTES,
        startTime,
        endTime
      )
    ) &&
    !currentReservations.every(
      (res) =>
        getTimeOmittingDate(res.startTime) !== getTimeOmittingDate(selectedTime)
    );

  const handleCreate = useCallback(() => {
    if (selectedProvider) {
      onCreateReservation(date, selectedProvider);
    }
  }, [date, onCreateReservation, selectedProvider]);

  const dayOptions = Array.from({ length: NUMBER_OF_DAYS_TO_SHOW }).map(
    (_, index) => {
      const currentDate = addDay(TODAY, index);
      return (
        <option key={`${index}${currentDate}`} value={currentDate}>
          {getDateString(currentDate)}
          {index === 0 ? " (Today)" : ""}
        </option>
      );
    }
  );

  const timeOptions = Array.from({ length: MAX_SLOTS_PER_DAY }).map(
    (_, index) => {
      const currentTime = addMinute(
        TODAY,
        index * RESERVATION_LENGTH_IN_MINUTES
      );
      const isWithin24Hours =
        selectedDate + getTimeOmittingDate(currentTime) >=
        NOW + RESERVATION_CUTOFF;

      const available = currentSchedules
        ? currentSchedules.some(({ startTime, endTime }) =>
            dateIsWithinRange(
              currentTime,
              currentTime + RESERVATION_LENGTH_IN_MINUTES,
              startTime,
              endTime
            )
          ) &&
          currentReservations.every(
            (res) =>
              getTimeOmittingDate(res.startTime) !==
              getTimeOmittingDate(currentTime)
          )
        : true;

      return (
        <option
          key={`${index}-${currentTime}-${selectedDate}`}
          value={getTimeOmittingDate(currentTime)}
          disabled={!available || !isWithin24Hours}
        >
          {getTimeString(currentTime)}
        </option>
      );
    }
  );

  const providerOptions = providers.map((provider, index) => {
    return (
      <option
        key={`${index}-provider-${provider.id}`}
        value={provider.id}
        disabled={false}
      >
        Provider {provider.id}
      </option>
    );
  });

  return (
    <Container>
      <DropdownContainer>
        <Dropdown
          value={selectedDate}
          onChange={(e) => onChangeDate(parseInt(e.target.value))}
        >
          {dayOptions}
        </Dropdown>
        <Dropdown
          value={selectedTime}
          onChange={(e) => {
            onChangeDate(selectedDate + parseInt(e.target.value));
          }}
        >
          {timeOptions}
        </Dropdown>
      </DropdownContainer>
      <ProviderContainer>
        {currentReservation ? (
          <>
            <span>Provider: {currentReservation.providerId}</span>
            <Button
              onClick={() => onConfirmReservation(currentReservation)}
              disabled={
                currentReservation
                  ? !!currentReservation.confirmedAt
                  : !canCreate
              }
            >
              {currentReservation.confirmedAt
                ? "Confirmed"
                : "Confirm Reservation"}
            </Button>
          </>
        ) : (
          <>
            <Dropdown
              value={selectedProvider?.id ?? -1}
              onChange={(e) => {
                const provider = providers.find(
                  (pro) => `${pro.id}` === e.target.value
                );
                onChangeProvider(provider);
              }}
            >
              <option value={-1}>View All</option>
              {providerOptions}
            </Dropdown>
            <Button onClick={handleCreate} disabled={!canCreate}>
              Create Reservation
            </Button>
          </>
        )}
      </ProviderContainer>
    </Container>
  );
};
