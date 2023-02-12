export default function quasiRandom<T extends readonly [number, number]>([
  min,
  max
]: T) {
  const { round, random } = Math;
  return round(random() * (max - min) + min);
}
