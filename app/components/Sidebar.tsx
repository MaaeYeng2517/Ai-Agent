"use client";

import Link from "next/link";
import { LayoutDashboard, BookOpen, FileText } from "lucide-react";

export default function Sidebar() {
  const nav = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/courses", label: "Courses", icon: BookOpen },
    { href: "/assignments", label: "Assignments", icon: FileText },
  ];

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-6 hidden md:block">
      <h1 className="text-xl font-bold mb-10">LMS</h1>

      <nav className="space-y-3">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100"
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
