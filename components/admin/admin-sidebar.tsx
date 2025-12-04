"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, UserCheck, ClipboardList, Users, FileText, Database, GitBranch, ShieldEllipsis } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Professional Verification", href: "/admin/verification", icon: UserCheck },
  { name: "Client Triage", href: "/admin/triage", icon: ClipboardList },
  { name: "Assignments", href: "/admin/assignments", icon: GitBranch },
  { name: "User Management", href: "/admin/users", icon: Users },
  { name: "Content Management", href: "/admin/content", icon: FileText },
  { name: "Service Management", href: "/admin/services", icon: ShieldEllipsis },
  { name: "Database Admin", href: "/admin/database", icon: Database },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border min-h-screen">
      <div className="p-6">
        <h2 className="text-xl font-bold text-sidebar-foreground">Admin Panel</h2>
        <p className="text-sm text-muted-foreground mt-1">Mental Health Services</p>
      </div>

      <nav className="px-3 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
