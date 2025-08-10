import type { Token } from "../../dashboard-page.types";

export interface TokenSelectProps {
  tokens: Token[];
  value: string;
  onChange: (value: string) => void;
}

