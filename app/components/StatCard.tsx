import Card from "./Card";

export default function StatCard({ title, value }: any) {
  return (
    <Card>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </Card>
  );
}
