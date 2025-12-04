import { AdminLayout } from "@/components/admin/admin-layout"
import { AssignmentBoard } from "@/components/admin/assignment-board"

export default function AssignmentsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Assignment Management</h1>
          <p className="text-muted-foreground mt-1">Manage client-professional assignments and workloads</p>
        </div>

        <AssignmentBoard />
      </div>
    </AdminLayout>
  )
}
