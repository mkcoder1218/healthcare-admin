import { Card } from "@/components/ui/card"
import { UserCheck, Users, Calendar, GitBranch } from "lucide-react"

const stats = [
  {
    name: "Pending Verifications",
    value: "12",
    icon: UserCheck,
    change: "+3 today",
    changeType: "increase",
  },
  {
    name: "New Client Registrations",
    value: "28",
    icon: Users,
    change: "+8 this week",
    changeType: "increase",
  },
  {
    name: "Active Sessions Today",
    value: "45",
    icon: Calendar,
    change: "12 in progress",
    changeType: "neutral",
  },
  {
    name: "Unassigned Clients",
    value: "7",
    icon: GitBranch,
    change: "Needs attention",
    changeType: "warning",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.name} className="p-6 bg-card border-border">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                <p className="text-3xl font-bold text-card-foreground mt-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.change}</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
