import { AdminLayout } from "@/components/admin/admin-layout"
import { VerificationTable } from "@/components/admin/verification-table"

export default function VerificationPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Professional Verification</h1>
          <p className="text-muted-foreground mt-1">Review and approve professional applications</p>
        </div>

        <VerificationTable />
      </div>
    </AdminLayout>
  )
}
