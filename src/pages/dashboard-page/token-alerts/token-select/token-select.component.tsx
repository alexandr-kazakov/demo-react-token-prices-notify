import type { TokenSelectProps } from "./token-select.types";

export const TokenSelect: React.FC<TokenSelectProps> = ({ tokens, value, onChange }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{ padding: '6px',  width: '200px' }}
  >
    <option value="">-- Выберите токен --</option>
    {tokens.map(token => (
      <option key={token.symbol} value={token.symbol}>
        {token.name} ({token.symbol})
      </option>
    ))}
  </select>
);
