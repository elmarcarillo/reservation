export const getNow = (): number => new Date().setSeconds(0); // Omit Seconds

export const getDate = (date: number): Date => new Date(date);
