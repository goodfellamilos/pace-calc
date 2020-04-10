import {
  MINUTE_IN_SECONDS,
  HOUR_IN_SECONDS,
  MIN_PER_KM_IN_KPH
} from "../constants/units";

const NUMBERS_AND_DOT_REGEXP = /^\d+\.?(\d+)*$/g;
const NUMBERS_REGEXP = /^[0-9]*$/g;

export const validateFloatInput = input => {
  if (!input.match(NUMBERS_AND_DOT_REGEXP)) {
    return input
      .replace(/[^0-9.]/g, "")
      .replace(/[.]/g, (match, offset, all) => {
        return match === "." ? (all.indexOf(".") === offset ? "." : "") : "";
      });
  }

  return input;
};

export const roundToTwoDecimal = num =>
  Math.round((num + Number.EPSILON) * 100) / 100;

export const formatResult = num => roundToTwoDecimal(num).toString();

export const validateAndFormatResult = input => {
  if (Number.isNaN(parseFloat(input))) {
    return "0";
  }

  return formatResult(input);
};

export const validateIntegerInput = input => {
  if (!input.match(NUMBERS_REGEXP)) {
    return input.replace(/[^0-9]/g, "");
  }

  return input;
};

const formatIntegerInput = input => {
  if (Number.isNaN(parseInt(input))) {
    return 0;
  }

  return parseInt(input);
};

export const getTotalTimeInSeconds = (hours, minutes, seconds) => {
  const hoursParsed = formatIntegerInput(hours);
  const minutesParsed = formatIntegerInput(minutes);
  const secondsParsed = formatIntegerInput(seconds);

  return (
    hoursParsed * HOUR_IN_SECONDS +
    minutesParsed * MINUTE_IN_SECONDS +
    secondsParsed
  );
};

export const calculatePaceFromDistance = (totalTimeInSeconds, distance) => {
  const minutesPer = Math.floor(
    totalTimeInSeconds / distance / MINUTE_IN_SECONDS
  );
  let secondsPer = Math.round(
    (totalTimeInSeconds / distance) % MINUTE_IN_SECONDS
  );

  if (secondsPer < 10) {
    secondsPer = `0${secondsPer}`;
  }

  return `${minutesPer}:${secondsPer}`;
};

export const calculatePaceFromDistanceUnit = (totalTimeInSeconds, unit) => {
  const minutesPer = Math.floor(
    (totalTimeInSeconds * unit) / MINUTE_IN_SECONDS
  );
  let secondsPer = Math.round((totalTimeInSeconds * unit) % MINUTE_IN_SECONDS);

  if (secondsPer < 10) {
    secondsPer = `0${secondsPer}`;
  }

  return [`${minutesPer}`, `${secondsPer}`];
};

export const calculateTimeFromDistanceAndSpeedKm = (distanceInKm, speedKPH) => {
  const totalTimeInSeconds = (distanceInKm / speedKPH) * HOUR_IN_SECONDS;

  let hours = Math.floor(distanceInKm / speedKPH);
  let minutes = Math.floor(
    (totalTimeInSeconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS
  );
  let seconds = Math.round(
    (totalTimeInSeconds % HOUR_IN_SECONDS) % MINUTE_IN_SECONDS
  );

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${hours}:${minutes}:${seconds}`;
};

export const calculateSpeedFromDistanceUnit = (totalTimeInSeconds, unit) => {
  if (!totalTimeInSeconds) {
    return "0";
  }

  return formatResult(
    unit / roundToTwoDecimal(totalTimeInSeconds / MINUTE_IN_SECONDS)
  );
};

export const calculatePaceFromSpeed = speed => {
  let totalTimeInSeconds = 0;

  if (parseFloat(speed)) {
    totalTimeInSeconds = (MIN_PER_KM_IN_KPH / speed) * MINUTE_IN_SECONDS;
  }

  const minutesPer = Math.floor(totalTimeInSeconds / MINUTE_IN_SECONDS);
  let secondsPer = Math.round(totalTimeInSeconds % MINUTE_IN_SECONDS);

  if (secondsPer < 10) {
    secondsPer = `0${secondsPer}`;
  }

  return [`${minutesPer}`, `${secondsPer}`];
};
