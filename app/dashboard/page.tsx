import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import Chart from "@/components/Chart";
import { stats, chartData } from "@/lib/dummy-data";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <Header title="Dashboard" />

        <div className="grid md:grid-cols-4 gap-6 mb-6">
          {stats.map((s) => (
            <StatCard key={s.title} {...s} />
          ))}
        </div>

        <div className="card p-6">
          <Chart data={chartData} />
        </div>
      </main>
    </div>
  );
}
