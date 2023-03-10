// Dissect Nestjs's custom logger and log levels
// https://github.com/nestjs/nest/tree/master/packages/common

type ColorTextFn = <T extends `${string}`>(text: T) => string;

const isColorAllowed = () => !process.env.NO_COLOR;

const colorIfAllowed = (colorFn: ColorTextFn) => (text: string) =>
  isColorAllowed() ? colorFn(text) : text;

export const clc = {
  bold: colorIfAllowed(text => `\x1B[1m${text}\x1B[0m`),
  green: colorIfAllowed(text => `\x1B[32m${text}\x1B[39m`),
  yellow: colorIfAllowed(text => `\x1B[33m${text}\x1B[39m`),
  red: colorIfAllowed(text => `\x1B[31m${text}\x1B[39m`),
  magentaBright: colorIfAllowed(text => `\x1B[95m${text}\x1B[39m`),
  cyanBright: colorIfAllowed(text => `\x1B[96m${text}\x1B[39m`)
} as const;

export const yellow = colorIfAllowed(text => `\x1B[38;5;3m${text}\x1B[39m`);
