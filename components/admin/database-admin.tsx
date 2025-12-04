import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Database, Download, Shield } from "lucide-react"

export function DatabaseAdmin() {
  return (
    <div className="space-y-6">
      <Alert variant="destructive" className="bg-destructive/10 border-destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Restricted Access</AlertTitle>
        <AlertDescription>
          This section is for designated Database Administrators only. All actions are logged and monitored.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Download className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">Encrypted Backup</h3>
              <p className="text-sm text-muted-foreground">Export system data securely</p>
            </div>
          </div>
          <Button className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Create Backup
          </Button>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Shield className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">Data Integrity Check</h3>
              <p className="text-sm text-muted-foreground">Verify database consistency</p>
            </div>
          </div>
          <Button variant="secondary" className="w-full">
            <Database className="h-4 w-4 mr-2" />
            Run Integrity Check
          </Button>
        </Card>
      </div>

      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">Recent System Activity</h3>
        <div className="space-y-3">
          {[
            { action: "Backup created", user: "admin@example.com", time: "2 hours ago" },
            { action: "Integrity check completed", user: "admin@example.com", time: "1 day ago" },
            { action: "User data exported", user: "admin@example.com", time: "3 days ago" },
          ].map((log, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-card-foreground">{log.action}</p>
                <p className="text-xs text-muted-foreground mt-1">By {log.user}</p>
              </div>
              <span className="text-xs text-muted-foreground">{log.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
