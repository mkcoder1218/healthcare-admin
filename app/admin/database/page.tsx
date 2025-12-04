import { AdminLayout } from "@/components/admin/admin-layout"
import { DatabaseAdmin } from "@/components/admin/database-admin"

export default function DatabasePage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Database Administration</h1>
          <p className="text-muted-foreground mt-1">System maintenance and data management</p>
        </div>

        <DatabaseAdmin />
      </div>
    </AdminLayout>
  )
}
