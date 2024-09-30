import { Transaction } from "@/types/transaction";

interface Props {
  transactions: Transaction[];
}

export default function Analytics({ transactions }: Props) {
  // Total number of transactions
  const totalTransactions = transactions.length;

  // Total fees collected
  const totalFees = transactions.reduce(
    (acc, tx) => acc + parseFloat(tx.buyOrder.feeUsd),
    0,
  );

  // Total crypto volume sold
  const totalCryptoVolume = transactions.reduce(
    (acc, tx) => acc + parseFloat(tx.sellOrder.quantity),
    0,
  );

  // Finding the most traded cryptocurrency
  const cryptoVolumeMap: Record<string, number> = {};
  transactions.forEach((tx) => {
    const currency = tx.sellOrder.currency;
    const volume = parseFloat(tx.sellOrder.quantity);
    if (cryptoVolumeMap[currency]) {
      cryptoVolumeMap[currency] += volume;
    } else {
      cryptoVolumeMap[currency] = volume;
    }
  });

  const mostTradedCrypto = Object.keys(cryptoVolumeMap).reduce((a, b) =>
    cryptoVolumeMap[a] > cryptoVolumeMap[b] ? a : b,
  );

  return (
    <div className="analytics-container p-4 border rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Analytics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Transactions</h3>
          <p className="text-2xl font-bold">{totalTransactions}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Fees Collected</h3>
          <p className="text-2xl font-bold">${totalFees.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Crypto Volume</h3>
          <p className="text-2xl font-bold">
            {totalCryptoVolume.toFixed(4)} units
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Most Traded Cryptocurrency</h3>
          <p className="text-2xl font-bold">{mostTradedCrypto}</p>
        </div>
      </div>
    </div>
  );
}
