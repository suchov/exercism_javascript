const GIGASECOND_IN_MILLIS = 1e9 * 1e3;

export const gigasecond = time => new Date(time.getTime() + GIGASECOND_IN_MILLIS);
