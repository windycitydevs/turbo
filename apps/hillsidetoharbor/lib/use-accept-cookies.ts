import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const COOKIE_NAME = "takeda_jobs";

export const useAcceptCookies = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(true);

  useEffect(() => {
    if (!Cookies.get(COOKIE_NAME)) {
      setAcceptedCookies(false);
    }
  }, []);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    Cookies.set(COOKIE_NAME, "accepted", {
      expires: 365,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "development" ? false : true
    });
  };
  return {
    acceptedCookies,
    onAcceptCookies: acceptCookies
  };
};
