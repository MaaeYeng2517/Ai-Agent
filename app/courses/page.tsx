import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/dummy-data";

export default function Courses() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header title="Courses" />

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </main>
    </div>
  );
}
