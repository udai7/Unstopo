import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Briefcase,
  FileText,
  GraduationCap,
  Bot,
  Trophy,
  Video,
  User,
  Search,
  Settings,
  Bell,
  Github,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer"
                onClick={() => navigate("/")}
              >
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                TalentHub
              </span>
              <Badge variant="secondary" className="ml-2">
                Job Seeker
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Section */}
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Welcome back, John! 👋
              </h1>
              <p className="text-slate-600">
                Continue building your career and discover new opportunities.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-dashed border-indigo-200 hover:border-indigo-300 transition-colors cursor-pointer group">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-sm">Browse Jobs</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button size="sm" className="w-full">
                    Find Opportunities
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-dashed border-purple-200 hover:border-purple-300 transition-colors cursor-pointer group">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-sm">Edit Portfolio</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button size="sm" variant="outline" className="w-full">
                    Update Profile
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-dashed border-green-200 hover:border-green-300 transition-colors cursor-pointer group">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-sm">AI Tools</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <Button size="sm" variant="outline" className="w-full">
                    Use AI Tools
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* AI-Powered Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="w-5 h-5 mr-2 text-indigo-600" />
                  AI-Powered Career Tools
                </CardTitle>
                <CardDescription>
                  Enhance your job search with our intelligent tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">
                          AI Resume Builder
                        </h4>
                        <p className="text-xs text-slate-600">
                          Create professional resumes
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      Use
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Cover Letter AI</h4>
                        <p className="text-xs text-slate-600">
                          Generate cover letters
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      Use
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Mock Quiz</h4>
                        <p className="text-xs text-slate-600">
                          Practice technical skills
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      Start
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                        <Video className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Interview Prep</h4>
                        <p className="text-xs text-slate-600">
                          Practice interviews
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      Practice
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>
                  Track your job applications and their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div>
                      <h4 className="font-medium">
                        Frontend Developer at TechCorp
                      </h4>
                      <p className="text-sm text-slate-600">
                        Applied 2 days ago
                      </p>
                    </div>
                    <Badge>Under Review</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div>
                      <h4 className="font-medium">
                        React Internship at StartupXYZ
                      </h4>
                      <p className="text-sm text-slate-600">
                        Applied 1 week ago
                      </p>
                    </div>
                    <Badge variant="secondary">Interview Scheduled</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div>
                      <h4 className="font-medium">UI Designer Assignment</h4>
                      <p className="text-sm text-slate-600">
                        Submitted 3 days ago
                      </p>
                    </div>
                    <Badge>Pending</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-lg">JD</AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">John Doe</CardTitle>
                <CardDescription>Full Stack Developer</CardDescription>
                <div className="flex justify-center mt-2">
                  <Badge variant="outline">85% Complete</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full mb-3">Complete Profile</Button>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <Github className="w-4 h-4 mr-2" />
                    <span>github.com/johndoe</span>
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </div>
                  <div className="text-sm text-slate-600">
                    📍 San Francisco, CA
                  </div>
                  <div className="text-sm text-slate-600">
                    💼 Open to opportunities
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Profile Views</span>
                  <span className="font-medium">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Applications</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Interviews</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Quiz Score</span>
                  <span className="font-medium">92%</span>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
