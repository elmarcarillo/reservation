import { useCallback } from "react";
import { MAX_SLOTS_PER_DAY, RESERVATION_LENGTH_IN_MINUTES } from "../../consts";
import {
  addDay,
  addMinute,
  getDateString,
  getBeginningOfDay,
  getTimeString,
  getNow,
  getTimeOmittingDate,
  dateIsWithinRange,
  addHour,
} from "../../utils/date";
import {
  Container,
  Button,
  Dropdown,
  DropdownLabel,
  DropdownWrapper,
  DropdownContainer,
  ProviderContainer,
} from "./styles";
import { ProviderDetailsBarProps } from "./types";
import { NUMBER_OF_DAYS_TO_SHOW, TODAY } from "./consts";

export const ProviderDetailsBar: React.FC<ProviderDetailsBarProps> = (
  props
) => {
  const {
    currentProvider,
    onAddSchedule = () => {},
    onChangeStartDate = () => {},
    onChangeEndDate = () => {},
    startDate = TODAY,
    endDate = addHour(TODAY),
  } = props;
  const selectedDate = getBeginningOfDay(startDate);
  const selectedStartTime = getTimeOmittingDate(startDate);
  const selectedEndTime = getTimeOmittingDate(endDate);

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

  const startTimeOptions = Array.from({ length: MAX_SLOTS_PER_DAY }).map(
    (_, index) => {
      const currentTime = addMinute(
        TODAY,
        index * RESERVATION_LENGTH_IN_MINUTES
      );
      return (
        <option
          key={`${index}-start-time-${currentTime}`}
          value={getTimeOmittingDate(currentTime)}
        >
          {getTimeString(currentTime)}
        </option>
      );
    }
  );

  const endEimeOptions = Array.from({ length: MAX_SLOTS_PER_DAY }).map(
    (_, index) => {
      const currentTime = addMinute(
        TODAY,
        index * RESERVATION_LENGTH_IN_MINUTES
      );
      return (
        <option
          key={`${index}-end-time-${currentTime}`}
          value={getTimeOmittingDate(currentTime)}
          disabled={getTimeOmittingDate(currentTime) <= selectedStartTime}
        >
          {getTimeString(currentTime)}
        </option>
      );
    }
  );

  return (
    <Container>
      <DropdownContainer>
        <DropdownWrapper>
          <DropdownLabel>Date:</DropdownLabel>
          <Dropdown
            value={selectedDate}
            onChange={(e) => onChangeStartDate(parseInt(e.target.value))}
          >
            {dayOptions}
          </Dropdown>
        </DropdownWrapper>
      </DropdownContainer>
      <ProviderContainer>
        <DropdownWrapper>
          <DropdownLabel>Start:</DropdownLabel>
          <Dropdown
            value={selectedStartTime}
            onChange={(e) => {
              onChangeStartDate(selectedDate + parseInt(e.target.value));
            }}
          >
            {startTimeOptions}
          </Dropdown>
        </DropdownWrapper>
        <DropdownWrapper>
          <DropdownLabel>End:</DropdownLabel>
          <Dropdown
            value={selectedEndTime}
            onChange={(e) => {
              onChangeEndDate(selectedDate + parseInt(e.target.value));
            }}
          >
            {endEimeOptions}
          </Dropdown>
          <Button
            onClick={() => {
              if (currentProvider) {
                onAddSchedule(
                  selectedDate + selectedStartTime,
                  selectedDate + selectedEndTime,
                  currentProvider
                );
              }
            }}
          >
            Add
          </Button>
        </DropdownWrapper>
      </ProviderContainer>
    </Container>
  );
};
