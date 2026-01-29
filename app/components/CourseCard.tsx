import Link from "next/link";
import Card from "./Card";

export default function CourseCard({ course }: any) {
  return (
    <Link href={`/courses/${course.id}`}>
      <Card className="hover:shadow-md transition">
        <h3 className="font-semibold mb-2">{course.title}</h3>
        <p className="text-sm text-gray-500">{course.lessons} lessons</p>
      </Card>
    </Link>
  );
}
