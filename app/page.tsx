import Analytics from "@/components/analytics/Analytics";
import TransactionTable from "@/components/transaction-table/TransactionTable";
import { Transaction } from "@/types/transaction";

async function getTransactions() {
  const apiKey = process.env.ABYISS_API_KEY;

  const response = await fetch(
    `https://api.abyiss.com/v2/octane/dummyTransactions?apiKey=${apiKey}`,
  );
  const data = await response.json();

  return data;
}

export default async function Home() {
  const transactions: Transaction[] = await getTransactions();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between py-24 px-2 md:px-24">
      <section className="hero flex flex-col items-center text-center px-6 py-12 md:px-12 lg:py-24">
        <h1 className="text-4xl font-bold text-text mb-6">Abyiss Dashboard</h1>
        <Analytics transactions={transactions} />
        <TransactionTable transactions={transactions} />
      </section>
    </main>
  );
}
