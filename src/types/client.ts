export type Reservation = {
  id?: number;
  providerId: number;
  startTime: number;
  endTime: number;
  createdAt: number;
  confirmedAt?: number;
};

export type Client = {
  id: number;
  reservations: Reservation[];
};
