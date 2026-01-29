import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Link from "next/link";

export default function CourseDetail({ params }: any) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-8">
        <Header title={`Course #${params.id}`} />

        <div className="card p-6 space-y-4">
          <p>Course description and lessons list...</p>

          <Link href={`/lessons/${params.id}`} className="underline">
            Start Lesson
          </Link>
        </div>
      </main>
    </div>
  );
}
