import { AdminLayout } from "@/components/admin/admin-layout"
import ServiceManagement from "@/components/admin/service-management"


export default function UsersPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Service Management</h1>
          <p className="text-muted-foreground mt-1">Manage clients, professionals, and administrators</p>
        </div>

        <ServiceManagement />
      </div>
    </AdminLayout>
  )
}
