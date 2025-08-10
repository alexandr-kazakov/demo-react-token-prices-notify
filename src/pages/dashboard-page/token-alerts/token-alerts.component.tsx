import { useState } from "react";
import type { TokenAlertsProps } from "./token-alerts.types";
import { Button } from "../../../components";
import { TokenSelect } from "./token-select";
import { useTokenAlerts } from "./token-alerts.hook";

export const TokenAlerts = ({data} : TokenAlertsProps) => {
  const [selectedToken, setSelectedToken] = useState<string>('');
  const [targetPrice, setTargetPrice] = useState<string>('');

  const { alerts, handleSubscribe, handleDelete } = useTokenAlerts();

  const onSubscribeClick = () => {
    handleSubscribe(selectedToken, targetPrice);
    setTargetPrice('');
  };

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <TokenSelect
          tokens={data}
          value={selectedToken}
          onChange={setSelectedToken}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <input
          type="number"
          placeholder="Цена в USD"
          value={targetPrice}
          onChange={(e) => setTargetPrice(e.target.value)}
          style={{ padding: '6px', width: '200px' }}
        />
      </div>

      <Button onClick={onSubscribeClick}>Подписаться</Button>

      <h3 style={{ marginTop: 20 }}>Текущие цены</h3>
      <ul>
        {data.map(token => (
          <li key={token.symbol}>
            {token.symbol}: ${token.price}
          </li>
        ))}
      </ul>


      <h3>Подписки</h3>
      {alerts.length === 0 ? (
        <p>Нет подписок</p>
      ) : (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>
              {alert.token} — ${alert.price}
              <Button onClick={() => handleDelete(index)}>Удалить</Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


