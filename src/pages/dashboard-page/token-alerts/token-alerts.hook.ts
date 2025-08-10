import { useState } from "react";
import type { AlertCondition } from "./token-alerts.types";

export const useTokenAlerts = () => {
  const [alerts, setAlerts] = useState<AlertCondition[]>([]);

  const handleSubscribe = (selectedToken: string, targetPrice: string) => {
    if (!selectedToken) {
      alert('Выберите токен');
      return;
    }
    const priceNum = Number(targetPrice);
    if (priceNum <= 0 || isNaN(priceNum)) {
      alert('Введите корректную цену (> 0)');
      return;
    }
    setAlerts(prev => [...prev, { token: selectedToken, price: priceNum }]);
  };

  const handleDelete = (index: number) => {
    setAlerts(prev => prev.filter((_, i) => i !== index));
  };

  return {
    alerts,
    handleSubscribe,
    handleDelete
  };
};