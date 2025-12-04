"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Eye, UserPlus } from "lucide-react"

const mockClients = [
  {
    id: 1,
    name: "John Smith",
    age: 32,
    problemSummary: "Anxiety and stress management",
    financialStatus: "Insurance",
    servicePreference: "In-person",
    status: "Unassigned",
  },
  {
    id: 2,
    name: "Maria Garcia",
    age: 28,
    problemSummary: "Depression and mood disorders",
    financialStatus: "Self-pay",
    servicePreference: "Telehealth",
    status: "Unassigned",
  },
  {
    id: 3,
    name: "David Lee",
    age: 45,
    problemSummary: "Relationship counseling",
    financialStatus: "Insurance",
    servicePreference: "In-person",
    status: "Unassigned",
  },
]

export function TriageTable() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-background"
          />
        </div>
      </div>

      <div className="rounded-md border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-card-foreground">Name</TableHead>
              <TableHead className="text-card-foreground">Age</TableHead>
              <TableHead className="text-card-foreground">Problem Summary</TableHead>
              <TableHead className="text-card-foreground">Financial Status</TableHead>
              <TableHead className="text-card-foreground">Service Preference</TableHead>
              <TableHead className="text-card-foreground">Status</TableHead>
              <TableHead className="text-card-foreground text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockClients.map((client) => (
              <TableRow key={client.id} className="bg-card">
                <TableCell className="font-medium text-card-foreground">{client.name}</TableCell>
                <TableCell className="text-muted-foreground">{client.age}</TableCell>
                <TableCell className="text-muted-foreground max-w-xs truncate">{client.problemSummary}</TableCell>
                <TableCell className="text-muted-foreground">{client.financialStatus}</TableCell>
                <TableCell className="text-muted-foreground">{client.servicePreference}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{client.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="default" size="sm">
                      <UserPlus className="h-4 w-4 mr-1" />
                      Assign
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  )
}
