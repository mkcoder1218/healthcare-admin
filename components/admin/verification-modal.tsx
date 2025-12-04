"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Check, X } from "lucide-react"

interface VerificationModalProps {
  professional: {
    id: number
    name: string
    profession: string
    email: string
    licenseStatus: string
    documents: string[]
  }
  onClose: () => void
}

export function VerificationModal({ professional, onClose }: VerificationModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card">
        <DialogHeader>
          <DialogTitle className="text-card-foreground">Professional Profile</DialogTitle>
          <DialogDescription>Review application details and documents</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Name</p>
              <p className="text-base text-card-foreground mt-1">{professional.name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Profession</p>
              <p className="text-base text-card-foreground mt-1">{professional.profession}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p className="text-base text-card-foreground mt-1">{professional.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">License Status</p>
              <Badge className="mt-1" variant={professional.licenseStatus === "Valid" ? "default" : "secondary"}>
                {professional.licenseStatus}
              </Badge>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground mb-3">Uploaded Documents</p>
            <div className="space-y-2">
              {professional.documents.map((doc) => (
                <div key={doc} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="text-sm font-medium text-card-foreground">{doc}</span>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="destructive">
              <X className="h-4 w-4 mr-1" />
              Reject
            </Button>
            <Button variant="default">
              <Check className="h-4 w-4 mr-1" />
              Approve
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
