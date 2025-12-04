import { AdminLayout } from "@/components/admin/admin-layout"
import { ContentManagement } from "@/components/admin/content-management"

export default function ContentPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Content Management</h1>
          <p className="text-muted-foreground mt-1">Manage articles, videos, and service information</p>
        </div>

        <ContentManagement />
      </div>
    </AdminLayout>
  )
}
