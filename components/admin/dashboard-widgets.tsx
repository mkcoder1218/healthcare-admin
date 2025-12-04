import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function DashboardWidgets() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-card-foreground">Recent Professional Applications</h3>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </div>
        <div className="space-y-4">
          {[
            { name: "Dr. Sarah Johnson", profession: "Clinical Psychologist", status: "pending" },
            { name: "Michael Chen", profession: "Licensed Therapist", status: "pending" },
            { name: "Emily Rodriguez", profession: "Psychiatrist", status: "pending" },
          ].map((professional) => (
            <div key={professional.name} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div>
                <p className="font-medium text-card-foreground">{professional.name}</p>
                <p className="text-sm text-muted-foreground">{professional.profession}</p>
              </div>
              <Badge variant="secondary">Pending Review</Badge>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-card border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-card-foreground">Quick Stats</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
            <span className="text-sm font-medium text-card-foreground">Total Clients</span>
            <span className="text-xl font-bold text-card-foreground">342</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
            <span className="text-sm font-medium text-card-foreground">Verified Professionals</span>
            <span className="text-xl font-bold text-card-foreground">87</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
            <span className="text-sm font-medium text-card-foreground">Completed Sessions</span>
            <span className="text-xl font-bold text-card-foreground">1,248</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
