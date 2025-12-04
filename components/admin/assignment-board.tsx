"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, UserCheck } from "lucide-react"

const professionals = [
  { id: 1, name: "Dr. Sarah Johnson", specialty: "Clinical Psychology", workload: 8, capacity: 12 },
  { id: 2, name: "Michael Chen", specialty: "Licensed Therapy", workload: 5, capacity: 10 },
  { id: 3, name: "Emily Rodriguez", specialty: "Psychiatry", workload: 10, capacity: 15 },
]

const unassignedClients = [
  { id: 1, name: "John Smith", issue: "Anxiety" },
  { id: 2, name: "Maria Garcia", issue: "Depression" },
  { id: 3, name: "David Lee", issue: "Relationship" },
]

export function AssignmentBoard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="p-6 bg-card border-border lg:col-span-2">
        <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
          <UserCheck className="h-5 w-5" />
          Professional Workloads
        </h3>
        <div className="space-y-4">
          {professionals.map((professional) => (
            <div key={professional.id} className="p-4 bg-secondary/50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-medium text-card-foreground">{professional.name}</p>
                  <p className="text-sm text-muted-foreground">{professional.specialty}</p>
                </div>
                <Badge variant={professional.workload >= professional.capacity ? "destructive" : "default"}>
                  {professional.workload}/{professional.capacity} clients
                </Badge>
              </div>
              <div className="w-full bg-background rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${(professional.workload / professional.capacity) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
          <Users className="h-5 w-5" />
          Unassigned Clients
        </h3>
        <div className="space-y-3">
          {unassignedClients.map((client) => (
            <div key={client.id} className="p-3 bg-secondary/50 rounded-lg">
              <p className="font-medium text-card-foreground text-sm">{client.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{client.issue}</p>
              <Button size="sm" className="w-full mt-2">
                Assign Professional
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
