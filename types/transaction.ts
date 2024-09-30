export type Transaction = {
  id: string;
  userId: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  completedAt: string | null;
  flaggedAt: string | null;
  sellOrder: {
    id: string;
    currency: string;
    blockchain: string;
    quantity: string;
    priceUsd: string;
  };
  buyOrder: {
    id: string;
    currency: string;
    feeUsd: string;
    quantity: string;
    priceUsd: string;
  };
};
