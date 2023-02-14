export const fetcher = () => fetch("http://localhost:3000/api/hero-stream");

const data = async () => await fetcher();
console.log({ ...data });
