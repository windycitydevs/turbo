import crypto from "crypto";

export function signHmacSha512({
  key,
  secret
}: {
  key: string;
  secret: string;
}) {
  const hmac = crypto.createHmac("sha512", key);
  const signed = hmac.update(Buffer.from(secret, "utf-8")).digest("hex");
  return signed;
}
