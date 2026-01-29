import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Button from "@/components/Button";

export default function AssignmentSubmit() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <Header title="Submit Assignment" />

        <div className="card p-6 space-y-4">
          <input type="file" />
          <textarea
            placeholder="Notes..."
            className="w-full border rounded-xl p-3"
          />
          <Button>Submit</Button>
        </div>
      </main>
    </div>
  );
}
