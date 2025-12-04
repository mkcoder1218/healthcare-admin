"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Edit, Trash2, RotateCcw } from "lucide-react"

const mockUsers = {
  clients: [
    { id: 1, name: "John Smith", email: "john@example.com", status: "Active", joinDate: "2024-01-15" },
    { id: 2, name: "Maria Garcia", email: "maria@example.com", status: "Active", joinDate: "2024-02-20" },
  ],
  professionals: [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah@example.com",
      status: "Active",
      specialty: "Clinical Psychology",
    },
    { id: 2, name: "Michael Chen", email: "michael@example.com", status: "Active", specialty: "Licensed Therapy" },
  ],
  admins: [{ id: 1, name: "Admin User", email: "admin@example.com", status: "Active", role: "Super Admin" }],
}

export function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <Tabs defaultValue="clients" className="space-y-6">
      <TabsList className="bg-muted">
        <TabsTrigger value="clients">Clients</TabsTrigger>
        <TabsTrigger value="professionals">Professionals</TabsTrigger>
        <TabsTrigger value="admins">Admins</TabsTrigger>
      </TabsList>

      <TabsContent value="clients">
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
                  <TableHead className="text-card-foreground">Email</TableHead>
                  <TableHead className="text-card-foreground">Status</TableHead>
                  <TableHead className="text-card-foreground">Join Date</TableHead>
                  <TableHead className="text-card-foreground text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.clients.map((user) => (
                  <TableRow key={user.id} className="bg-card">
                    <TableCell className="font-medium text-card-foreground">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell>
                      <Badge variant="default">{user.status}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{user.joinDate}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
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

      <TabsContent value="professionals">
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search professionals..." className="pl-10 bg-background" />
            </div>
          </div>

          <div className="rounded-md border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="text-card-foreground">Name</TableHead>
                  <TableHead className="text-card-foreground">Email</TableHead>
                  <TableHead className="text-card-foreground">Specialty</TableHead>
                  <TableHead className="text-card-foreground">Status</TableHead>
                  <TableHead className="text-card-foreground text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.professionals.map((user) => (
                  <TableRow key={user.id} className="bg-card">
                    <TableCell className="font-medium text-card-foreground">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell className="text-muted-foreground">{user.specialty}</TableCell>
                    <TableCell>
                      <Badge variant="default">{user.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
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

      <TabsContent value="admins">
        <Card className="p-6 bg-card border-border">
          <div className="rounded-md border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="text-card-foreground">Name</TableHead>
                  <TableHead className="text-card-foreground">Email</TableHead>
                  <TableHead className="text-card-foreground">Role</TableHead>
                  <TableHead className="text-card-foreground">Status</TableHead>
                  <TableHead className="text-card-foreground text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.admins.map((user) => (
                  <TableRow key={user.id} className="bg-card">
                    <TableCell className="font-medium text-card-foreground">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell className="text-muted-foreground">{user.role}</TableCell>
                    <TableCell>
                      <Badge variant="default">{user.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
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
