"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Eye, Check, X, FileText } from "lucide-react"
import { VerificationModal } from "./verification-modal"

const mockProfessionals = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    profession: "Clinical Psychologist",
    email: "sarah.johnson@example.com",
    licenseStatus: "Valid",
    documents: ["Degree", "License", "ID", "Agreement"],
  },
  {
    id: 2,
    name: "Michael Chen",
    profession: "Licensed Therapist",
    email: "michael.chen@example.com",
    licenseStatus: "Valid",
    documents: ["Degree", "License", "ID", "Agreement"],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    profession: "Psychiatrist",
    email: "emily.rodriguez@example.com",
    licenseStatus: "Pending Verification",
    documents: ["Degree", "License", "ID"],
  },
]

export function VerificationTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProfessional, setSelectedProfessional] = useState<(typeof mockProfessionals)[0] | null>(null)

  return (
    <>
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search professionals..."
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
                <TableHead className="text-card-foreground">Profession</TableHead>
                <TableHead className="text-card-foreground">Email</TableHead>
                <TableHead className="text-card-foreground">License Status</TableHead>
                <TableHead className="text-card-foreground">Documents</TableHead>
                <TableHead className="text-card-foreground text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockProfessionals.map((professional) => (
                <TableRow key={professional.id} className="bg-card">
                  <TableCell className="font-medium text-card-foreground">{professional.name}</TableCell>
                  <TableCell className="text-muted-foreground">{professional.profession}</TableCell>
                  <TableCell className="text-muted-foreground">{professional.email}</TableCell>
                  <TableCell>
                    <Badge variant={professional.licenseStatus === "Valid" ? "default" : "secondary"}>
                      {professional.licenseStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{professional.documents.length} files</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => setSelectedProfessional(professional)}>
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="default" size="sm">
                        <Check className="h-4 w-4 mr-1" />
                        Approve
                      </Button>
                      <Button variant="destructive" size="sm">
                        <X className="h-4 w-4 mr-1" />
                        Reject
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {selectedProfessional && (
        <VerificationModal professional={selectedProfessional} onClose={() => setSelectedProfessional(null)} />
      )}
    </>
  )
}
