"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Edit, Trash2, PlusCircle, RotateCcw } from "lucide-react"

// Mock Data
const mockServices = {
  active: [
    {
      id: 1,
      name: "Therapy Session",
      category: "Mental Health",
      price: "$50/hour",
      status: "Active",
      createdAt: "2024-01-12",
    },
    {
      id: 2,
      name: "Nutrition Consultation",
      category: "Wellness",
      price: "$30/hour",
      status: "Active",
      createdAt: "2024-02-10",
    },
  ],
  pending: [
    {
      id: 3,
      name: "Couples Counseling",
      category: "Relationship",
      price: "$60/hour",
      status: "Pending",
      createdAt: "2024-03-05",
    },
  ],
  archived: [
    {
      id: 4,
      name: "Career Guidance",
      category: "Coaching",
      price: "$45/hour",
      status: "Archived",
      createdAt: "2023-10-22",
    },
  ],
}

export default function ServiceManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  const filterData = (services: any[]) =>
    services.filter(
      (s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.category.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <Tabs defaultValue="active" className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-card-foreground">Service Management</h1>
        <Button className="gap-2">
          <PlusCircle className="h-4 w-4" /> Add New Service
        </Button>
      </div>

      <TabsList className="bg-muted">
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="archived">Archived</TabsTrigger>
      </TabsList>

      {/* Active Services */}
      <TabsContent value="active">
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search active services..."
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
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filterData(mockServices.active).map((service) => (
                  <TableRow key={service.id} className="bg-card">
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell className="text-muted-foreground">{service.category}</TableCell>
                    <TableCell>{service.price}</TableCell>
                    <TableCell>
                      <Badge variant="default">{service.status}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{service.createdAt}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </TabsContent>

      {/* Pending Services */}
      <TabsContent value="pending">
        <Card className="p-6 bg-card border-border">
          <div className="rounded-md border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockServices.pending.map((service) => (
                  <TableRow key={service.id} className="bg-card">
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell className="text-muted-foreground">{service.category}</TableCell>
                    <TableCell>{service.price}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{service.status}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{service.createdAt}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </TabsContent>

      {/* Archived Services */}
      <TabsContent value="archived">
        <Card className="p-6 bg-card border-border">
          <div className="rounded-md border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockServices.archived.map((service) => (
                  <TableRow key={service.id} className="bg-card">
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell className="text-muted-foreground">{service.category}</TableCell>
                    <TableCell>{service.price}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{service.status}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{service.createdAt}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
