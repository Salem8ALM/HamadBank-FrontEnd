import { baseUrl } from "./config";

export function generateDepositLink(username, amount) {
  const depositLink = `${window.location.origin}/transactions/transfer?username=${username}&amount=${amount}`;
  return depositLink;
}
