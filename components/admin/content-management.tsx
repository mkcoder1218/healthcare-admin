"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye } from "lucide-react"

const mockArticles = [
  {
    id: 1,
    title: "Understanding Anxiety Disorders",
    category: "Mental Health",
    status: "Published",
    date: "2024-03-10",
  },
  { id: 2, title: "Coping with Depression", category: "Mental Health", status: "Draft", date: "2024-03-12" },
]

const mockVideos = [
  { id: 1, title: "Mindfulness Meditation Guide", duration: "15:30", status: "Published" },
  { id: 2, title: "Breathing Exercises for Anxiety", duration: "8:45", status: "Published" },
]

export function ContentManagement() {
  return (
    <Tabs defaultValue="articles" className="space-y-6">
      <div className="flex items-center justify-between">
        <TabsList className="bg-muted">
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New
        </Button>
      </div>

      <TabsContent value="articles">
        <div className="grid gap-4">
          {mockArticles.map((article) => (
            <Card key={article.id} className="p-6 bg-card border-border">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground">{article.title}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <Badge variant={article.status === "Published" ? "default" : "secondary"}>{article.status}</Badge>
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="videos">
        <div className="grid gap-4">
          {mockVideos.map((video) => (
            <Card key={video.id} className="p-6 bg-card border-border">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground">{video.title}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-sm text-muted-foreground">Duration: {video.duration}</span>
                    <Badge variant="default">{video.status}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="services">
        <Card className="p-6 bg-card border-border">
          <p className="text-muted-foreground">Service management interface coming soon...</p>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
