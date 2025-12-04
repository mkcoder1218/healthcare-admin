import { AdminLayout } from "@/components/admin/admin-layout"
import { DashboardStats } from "@/components/admin/dashboard-stats"
import { DashboardWidgets } from "@/components/admin/dashboard-widgets"

export default function DashboardPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Overview of your mental health services platform</p>
        </div>

        <DashboardStats />
        <DashboardWidgets />
      </div>
    </AdminLayout>
  )
}
