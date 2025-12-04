import { AdminLayout } from "@/components/admin/admin-layout"
import { TriageTable } from "@/components/admin/triage-table"

export default function TriagePage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Client Triage</h1>
          <p className="text-muted-foreground mt-1">Review new client registrations and assign to professionals</p>
        </div>

        <TriageTable />
      </div>
    </AdminLayout>
  )
}
