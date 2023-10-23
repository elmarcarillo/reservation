import { HOUR_IN_MILLISECONDS, MINUTE_IN_MILLISECONDS } from "./utils/date";

export const RESERVATION_LENGTH = MINUTE_IN_MILLISECONDS * 15; // 15 Min Slots
export const RESERVATION_CUTOFF = HOUR_IN_MILLISECONDS * 24; // 24 hours in advance.
