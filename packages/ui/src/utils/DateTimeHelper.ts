import WcdEnums from "../typedefs/enum";
import type UI from "../typedefs/namespace";

export const militaryToTwelveHrTime = (time: string) => {
  const { [0]: hours, [2]: minutes, [4]: seconds } = time.split(/([:])/);
  const stringToNum = Number.parseInt(hours, 10);
  const handleAmPm =
    stringToNum.valueOf() <= 11
      ? `${stringToNum === 0 ? 12 : stringToNum}:${minutes}:${seconds} AM`
      : `${
          stringToNum === 12 ? 12 : stringToNum - 12
        }:${minutes}:${seconds} PM`;
  return handleAmPm;
};

export const monthToCalendarMonth = (
  parsedMonth: string
): WcdEnums.DateTime.Months =>
  parsedMonth.includes("01")
    ? WcdEnums.DateTime.Months.January
    : parsedMonth.includes("02")
    ? WcdEnums.DateTime.Months.February
    : parsedMonth.includes("03")
    ? WcdEnums.DateTime.Months.March
    : parsedMonth.includes("04")
    ? WcdEnums.DateTime.Months.April
    : parsedMonth.includes("05")
    ? WcdEnums.DateTime.Months.May
    : parsedMonth.includes("06")
    ? WcdEnums.DateTime.Months.June
    : parsedMonth.includes("07")
    ? WcdEnums.DateTime.Months.July
    : parsedMonth.includes("08")
    ? WcdEnums.DateTime.Months.August
    : parsedMonth.includes("09")
    ? WcdEnums.DateTime.Months.September
    : parsedMonth.includes("10")
    ? WcdEnums.DateTime.Months.October
    : parsedMonth.includes("11")
    ? WcdEnums.DateTime.Months.November
    : WcdEnums.DateTime.Months.December;

export const relativeValueOfTz = (
  timeZone: keyof typeof WcdEnums.DateTime.TimeZones
) => WcdEnums.DateTime.TimeZones[timeZone].valueOf();

export const timeZoneOffset = (
  timeZone: keyof typeof WcdEnums.DateTime.TimeZones
) =>
  relativeValueOfTz(timeZone) <= 2
    ? "GMT-11:00"
    : relativeValueOfTz(timeZone) < 7 && relativeValueOfTz(timeZone) > 2
    ? "GMT-10:00"
    : relativeValueOfTz(timeZone) === 7
    ? "GMT-09:30"
    : relativeValueOfTz(timeZone) < 15 && relativeValueOfTz(timeZone) > 7
    ? "GMT-09:00"
    : relativeValueOfTz(timeZone) < 19 && relativeValueOfTz(timeZone) > 14
    ? "GMT-08:00"
    : relativeValueOfTz(timeZone) < 35 && relativeValueOfTz(timeZone) > 18
    ? "GMT-07:00"
    : relativeValueOfTz(timeZone) < 61 && relativeValueOfTz(timeZone) > 34
    ? "GMT-06:00"
    : relativeValueOfTz(timeZone) < 90 && relativeValueOfTz(timeZone) > 60
    ? "GMT-05:00"
    : relativeValueOfTz(timeZone) > 89 && relativeValueOfTz(timeZone) < 129
    ? "GMT-04:00"
    : relativeValueOfTz(timeZone) === 129
    ? "GMT-03:30"
    : relativeValueOfTz(timeZone) > 129 && relativeValueOfTz(timeZone) < 158
    ? "GMT-03:00"
    : relativeValueOfTz(timeZone) > 158 && relativeValueOfTz(timeZone) < 160
    ? "GMT-02:00"
    : relativeValueOfTz(timeZone) > 160 && relativeValueOfTz(timeZone) < 164
    ? "GMT-01:00"
    : relativeValueOfTz(timeZone) > 163 && relativeValueOfTz(timeZone) < 192
    ? "GMT+00:00"
    : relativeValueOfTz(timeZone) > 191 && relativeValueOfTz(timeZone) < 238
    ? "GMT+01:00"
    : relativeValueOfTz(timeZone) > 237 && relativeValueOfTz(timeZone) < 274
    ? "GMT+02:00"
    : relativeValueOfTz(timeZone) > 273 && relativeValueOfTz(timeZone) < 297
    ? "GMT+03:00"
    : relativeValueOfTz(timeZone) === 297
    ? "GMT+03:30"
    : relativeValueOfTz(timeZone) > 297 && relativeValueOfTz(timeZone) < 310
    ? "GMT+04:00"
    : relativeValueOfTz(timeZone) === 310
    ? "GMT+04:30"
    : relativeValueOfTz(timeZone) > 310 && relativeValueOfTz(timeZone) < 325
    ? "GMT+05:00"
    : relativeValueOfTz(timeZone) === (325 || 326)
    ? "GMT+05:30"
    : relativeValueOfTz(timeZone) === 327
    ? "GMT+05:45"
    : relativeValueOfTz(timeZone) > 327 && relativeValueOfTz(timeZone) < 337
    ? "GMT+06:00"
    : relativeValueOfTz(timeZone) === (337 || 338)
    ? "GMT+06:30"
    : relativeValueOfTz(timeZone) > 338 && relativeValueOfTz(timeZone) < 353
    ? "GMT+07:00"
    : relativeValueOfTz(timeZone) > 352 && relativeValueOfTz(timeZone) < 367
    ? "GMT+08:00"
    : relativeValueOfTz(timeZone) === 367
    ? "GMT+08:45"
    : relativeValueOfTz(timeZone) > 367 && relativeValueOfTz(timeZone) < 377
    ? "GMT+09:00"
    : relativeValueOfTz(timeZone) > 376 && relativeValueOfTz(timeZone) < 380
    ? "GMT+09:30"
    : relativeValueOfTz(timeZone) > 379 && relativeValueOfTz(timeZone) < 394
    ? "GMT+10:00"
    : relativeValueOfTz(timeZone) === 394
    ? "GMT+10:30"
    : relativeValueOfTz(timeZone) > 394 && relativeValueOfTz(timeZone) < 406
    ? "GMT+11:00"
    : relativeValueOfTz(timeZone) > 405 && relativeValueOfTz(timeZone) < 418
    ? "GMT+12:00"
    : relativeValueOfTz(timeZone) === 418
    ? "GMT+12:45"
    : relativeValueOfTz(timeZone) > 418 && relativeValueOfTz(timeZone) < 423
    ? "GMT+13:00"
    : relativeValueOfTz(timeZone) === 423
    ? "GMT+14:00"
    : "";

export default function DateTimeHandler({
  value,
  preference,
  timeZone,
  dateFormat,
  withGmtOffset,
  dateTimeSeparator
}: UI.DT.DateTimeHandlerProps) {
  const tzOffset = new Date(
    typeof value === "object" ? value.toISOString() : value
  ).toLocaleString("en-GB", {
    timeZone: timeZone ?? "America/New_York",
    formatMatcher: "best fit"
  });
  const handleUndefinedDateFormat = dateFormat ? dateFormat : "iso8601";
  const handleSeparatorChoice =
    dateTimeSeparator === "at"
      ? " at"
      : dateTimeSeparator === "comma"
      ? ","
      : dateTimeSeparator === "none"
      ? ""
      : "";

  const {
    [0]: day,
    [1]: month,
    [2]: year
  } = tzOffset.split(/,/g)[0].split(/[/]/);

  const { [0]: time } = tzOffset.split(/,/g)[1].trim().split(/([ ])/);

  const timezone = timeZoneOffset(timeZone);

  return preference === "date"
    ? handleUndefinedDateFormat === "written"
      ? withGmtOffset === true
        ? `${monthToCalendarMonth(month)} ${day}, ${year} ${timezone}`
        : `${monthToCalendarMonth(month)} ${day}, ${year}`
      : withGmtOffset === true
      ? `${year}-${month}-${day} ${timezone}`
      : `${year}-${month}-${day}`
    : preference === "time12"
    ? withGmtOffset === true
      ? `${militaryToTwelveHrTime(time)} ${timezone}`
      : `${militaryToTwelveHrTime(time)}`
    : preference === "time24"
    ? withGmtOffset === true
      ? `${time} ${timezone}`
      : `${time}`
    : preference === "datetime12"
    ? handleUndefinedDateFormat === "written"
      ? withGmtOffset === true
        ? `${monthToCalendarMonth(
            month
          )} ${day}, ${year}${handleSeparatorChoice} ${militaryToTwelveHrTime(
            time
          )} ${timezone}`
        : `${monthToCalendarMonth(
            month
          )} ${day}, ${year}${handleSeparatorChoice} ${militaryToTwelveHrTime(
            time
          )}`
      : withGmtOffset === true
      ? `${year}-${month}-${day}${handleSeparatorChoice} ${militaryToTwelveHrTime(
          time
        )} ${timezone}`
      : `${year}-${month}-${day}${handleSeparatorChoice} ${militaryToTwelveHrTime(
          time
        )}`
    : handleUndefinedDateFormat === "written"
    ? withGmtOffset === true
      ? `${monthToCalendarMonth(
          month
        )} ${day}, ${year}${handleSeparatorChoice} ${time} ${timezone}`
      : `${monthToCalendarMonth(
          month
        )} ${day}, ${year}${handleSeparatorChoice} ${time}`
    : withGmtOffset === true
    ? `${year}-${month}-${day}${handleSeparatorChoice} ${time} ${timezone}`
    : `${year}-${month}-${day}${handleSeparatorChoice} ${time}`;
}
