import type { Token } from "../dashboard-page.types";

export interface AlertCondition {
  token: string;
  price: number;
}

export interface TokenAlertsProps {
  data: Token[];
}
