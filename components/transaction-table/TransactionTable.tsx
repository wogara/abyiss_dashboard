import { Transaction } from "@/types/transaction";

interface Props {
  transactions: Transaction[];
}

export default function TransactionTable({ transactions }: Props) {
  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Transaction Table</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Transaction ID</th>
            <th className="py-2 px-4 border">Sell Currency</th>
            <th className="py-2 px-4 border">Sell Quantity</th>
            <th className="py-2 px-4 border">Sell Price (USD)</th>
            <th className="py-2 px-4 border">Buy Currency</th>
            <th className="py-2 px-4 border">Buy Quantity</th>
            <th className="py-2 px-4 border">Fee (USD)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="py-2 px-4 border">{transaction.id}</td>
              <td className="py-2 px-4 border">
                {transaction.sellOrder.currency}
              </td>
              <td className="py-2 px-4 border">
                {transaction.sellOrder.quantity}
              </td>
              <td className="py-2 px-4 border">
                ${transaction.sellOrder.priceUsd}
              </td>
              <td className="py-2 px-4 border">
                {transaction.buyOrder.currency}
              </td>
              <td className="py-2 px-4 border">
                {transaction.buyOrder.quantity}
              </td>
              <td className="py-2 px-4 border">
                ${transaction.buyOrder.feeUsd}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
