import type { NextApiRequest, NextApiResponse } from "next";

export default async function ParamsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryParamHandler = (props: string | string[] | undefined) =>
    typeof props !== "undefined"
      ? Array.isArray(props)
        ? props[0]
        : props
      : "";

  console.log(req.query || "");
  console.log(req.cookies || "");
  try {
    const lat = queryParamHandler(req.query.lat);
    const lng = queryParamHandler(req.query.lng);
    const viewport = queryParamHandler(req.query.vieweport);
    const userSpecifications = queryParamHandler(req.query.userSpecifications);
    const ua = queryParamHandler(req.query.ua);
    const ip = queryParamHandler(req.query.ip);
    const browser = queryParamHandler(req.query.browser);
    const city = queryParamHandler(req.query.city);
    const country = queryParamHandler(req.query.country);
    const userDevice = queryParamHandler(req.query.userDevice);
    const resObj = {
      userSpecifications: userSpecifications,
      ua: ua,
      userDevice: userDevice,
      viewport: viewport,
      data: {
        lat,
        lng,
        ip,
        browser,
        city,
        country
      }
    } as const;
    return res.status(200).json(resObj);
  } catch (err) {
    console.error(`${err ?? ""}`);
    return res.status(500);
  }
}
