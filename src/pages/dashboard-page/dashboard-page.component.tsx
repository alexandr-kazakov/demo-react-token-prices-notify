import { useEffect, useState } from "react";
import { TOKENS_DATA_MOCK } from "./dashboard-page.mock";
import type { Token } from "./dashboard-page.types";
import { TokenAlerts } from "./token-alerts";
import { getRandomPrice } from "./token-alerts/token-alerts.utils";

export const DashboardPage = () => {
  const [prices, setPrices] = useState<Token[]>(TOKENS_DATA_MOCK);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev =>
        prev.map(token => ({
          ...token,
          price: getRandomPrice()
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Tokens Alerts Dashboard</h1>
      <TokenAlerts data={prices} />
    </>
  );
}


