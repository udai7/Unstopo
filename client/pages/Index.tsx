import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Briefcase,
  Users,
  Bot,
  Trophy,
  FileText,
  Video,
  Target,
  Search,
  UserCheck,
  BarChart3,
  Clock,
  Shield,
  Zap,
  Globe,
  ChevronDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Index() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    // Navigate to respective dashboard
    if (role === "recruiter") {
      navigate("/recruiter/dashboard");
    } else {
      navigate("/user/dashboard");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white bg-grid-slate-200/50 relative overflow-hidden">
        {/* Optional: subtle mask for style */}
        <div className="absolute inset-0 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.7))] -z-10"></div>
        {/* Header */}
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  TalentHub
                </span>
              </div>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Subtle grid background for hero */}
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(to bottom,rgba(255,255,255,0.0),white 30%,white 70%,rgba(255,255,255,0.0)),linear-gradient(to right,rgba(255,255,255,0.0),white 20%,white 80%,rgba(255,255,255,0.0))] -z-10"></div>
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6">
                🚀 Welcome to the Future of Hiring
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Connect Talent with{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Opportunity
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                A modern platform that bridges the gap between talented
                individuals and forward-thinking companies. Choose your path to
                get started.
              </p>

              {/* Role Selection Cards */}
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                {/* Recruiter Card */}
                <Card
                  className="relative overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                  onClick={() => handleRoleSelect("recruiter")}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                  <CardHeader className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">For Recruiters</CardTitle>
                    <CardDescription className="text-base">
                      Post opportunities and discover exceptional talent
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                        Post Jobs, Assignments & Internships
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                        Access Talent Pool & Portfolios
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3" />
                        Conduct Online Interviews
                      </div>
                    </div>
                    <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600">
                      Get Started as Recruiter
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                {/* User Card */}
                <Card
                  className="relative overflow-hidden border-2 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                  onClick={() => handleRoleSelect("user")}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                  <CardHeader className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">For Job Seekers</CardTitle>
                    <CardDescription className="text-base">
                      Build your portfolio and land your dream role
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                        Apply to Jobs & Internships
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                        Create Professional Portfolio
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                        AI-Powered Career Tools
                      </div>
                    </div>
                    <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600">
                      Get Started as Job Seeker
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to bottom,rgba(255,255,255,0.0),white 30%,white 70%,rgba(255,255,255,0.0)),linear-gradient(to right,rgba(255,255,255,0.0),white 20%,white 80%,rgba(255,255,255,0.0))]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                Our platform delivers exceptional results with proven metrics
                across all industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    50+
                  </div>
                  <div className="text-indigo-100 font-medium">
                    Industries Covered
                  </div>
                  <div className="text-sm text-indigo-200 mt-2">
                    From tech to healthcare
                  </div>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    1000+
                  </div>
                  <div className="text-indigo-100 font-medium">
                    Interview Questions
                  </div>
                  <div className="text-sm text-indigo-200 mt-2">
                    AI-curated database
                  </div>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    95%
                  </div>
                  <div className="text-indigo-100 font-medium">
                    Success Rate
                  </div>
                  <div className="text-sm text-indigo-200 mt-2">
                    Placement guarantee
                  </div>
                </div>
              </div>

              <div className="text-center group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    24/7
                  </div>
                  <div className="text-indigo-100 font-medium">AI Support</div>
                  <div className="text-sm text-indigo-200 mt-2">
                    Always available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Powerful Features Section */}
        <section className="py-20 bg-slate-50 relative">
          {/* Subtle grid background for features */}
          <div className="absolute inset-0 bg-grid-slate-200/40 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.8),white)] -z-10"></div>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Powerful Features for Everyone
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                From AI-powered tools to comprehensive career support, we've got
                everything you need to succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-100 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    AI Resume Builder
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    Create ATS-optimized resumes with industry-specific keywords
                    and formatting that gets you noticed by recruiters
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      ATS Compatibility Score
                    </div>
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                      Industry Templates
                    </div>
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      Real-time Feedback
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-green-100 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Smart Job Matching
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    AI-powered job recommendations based on your skills,
                    experience, and career goals with 95% accuracy rate
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                      Skill Gap Analysis
                    </div>
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      Salary Predictions
                    </div>
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2"></div>
                      Cultural Fit Score
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-100 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    AI Interview Coach
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    Practice with AI-powered mock interviews featuring real
                    questions from top companies and instant feedback
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                      Behavioral Coaching
                    </div>
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></div>
                      Technical Assessment
                    </div>
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                      Performance Analytics
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-red-100 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <UserCheck className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Recruiter Dashboard
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    Advanced recruitment tools with candidate screening,
                    automated workflows, and detailed analytics
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                      Auto-screening
                    </div>
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                      Bulk Actions
                    </div>
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                      Team Collaboration
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-50 to-blue-100 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Background Verification
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    Automated background checks, skill verification, and
                    reference validation for secure hiring
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
                      Identity Verification
                    </div>
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Skill Validation
                    </div>
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mr-2"></div>
                      Reference Checks
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-amber-100 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    Instant Deployment
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-sm leading-relaxed">
                    Launch job postings across 50+ platforms instantly with
                    AI-optimized descriptions and targeting
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                      Multi-platform Sync
                    </div>
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                      Auto-optimization
                    </div>
                    <div className="flex items-center text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2"></div>
                      Performance Tracking
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Get started in just a few simple steps and unlock your career
                potential
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Choose Your Role
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Select whether you're a recruiter looking for talent or a job
                  seeker ready to advance your career
                </p>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 hidden md:block transform translate-x-8 z-0"></div>
              </div>

              <div className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Build Your Profile
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Create a comprehensive profile with our AI tools or post
                  opportunities to attract top talent
                </p>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-200 to-pink-200 hidden md:block transform translate-x-8 z-0"></div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Connect & Succeed
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Match with opportunities or candidates, conduct interviews,
                  and achieve your career goals
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 relative">
          {/* Subtle grid background for testimonials */}
          <div className="absolute inset-0 bg-grid-indigo-200/30 [mask-image:linear-gradient(to bottom,rgba(255,255,255,0.0),white 30%,white 70%,rgba(255,255,255,0.0)),linear-gradient(to right,rgba(255,255,255,0.0),white 20%,white 80%,rgba(255,255,255,0.0))] -z-10"></div>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-slate-600">
                Join thousands of successful professionals and top companies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">SJ</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-slate-900">
                        Sarah Johnson
                      </h4>
                      <p className="text-sm text-slate-600">
                        Software Engineer at Google
                      </p>
                    </div>
                  </div>
                  <CardDescription className="text-slate-700 text-base leading-relaxed">
                    "TalentHub's AI resume builder helped me land my dream job
                    at Google. The platform is intuitive and the mock interviews
                    were incredibly helpful!"
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">MC</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-slate-900">
                        Michael Chen
                      </h4>
                      <p className="text-sm text-slate-600">
                        HR Director at TechCorp
                      </p>
                    </div>
                  </div>
                  <CardDescription className="text-slate-700 text-base leading-relaxed">
                    "As a recruiter, TalentHub has revolutionized how we find
                    and interview candidates. The quality of applicants has
                    significantly improved."
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">EP</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-slate-900">
                        Emily Parker
                      </h4>
                      <p className="text-sm text-slate-600">
                        UX Designer at Startup Inc
                      </p>
                    </div>
                  </div>
                  <CardDescription className="text-slate-700 text-base leading-relaxed">
                    "The portfolio builder and skill assessments gave me the
                    confidence to transition into UX design. Highly recommend to
                    career changers!"
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50 relative">
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(to bottom,rgba(255,255,255,0.0),white 30%,white 70%,rgba(255,255,255,0.0)),linear-gradient(to right,rgba(255,255,255,0.0),white 20%,white 80%,rgba(255,255,255,0.0))]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600">
                Everything you need to know about TalentHub
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                      value="item-1"
                      className="border-b border-slate-200"
                    >
                      <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-slate-50 transition-colors">
                        <span className="text-lg font-semibold text-slate-900">
                          Is TalentHub free to use?
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6">
                        <div className="text-slate-700 leading-relaxed">
                          <p className="mb-4">
                            Yes! TalentHub offers a comprehensive free tier that
                            includes basic AI tools, job applications, and
                            portfolio building. Our free plan includes:
                          </p>
                          <ul className="list-disc list-inside space-y-2 mb-4">
                            <li>AI Resume Builder (3 resumes per month)</li>
                            <li>Job application tracking</li>
                            <li>Basic portfolio creation</li>
                            <li>Access to interview questions database</li>
                          </ul>
                          <p>
                            Premium features like unlimited AI tools, advanced
                            analytics, and priority support are available for
                            advanced users starting at $9.99/month.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-2"
                      className="border-b border-slate-200"
                    >
                      <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-slate-50 transition-colors">
                        <span className="text-lg font-semibold text-slate-900">
                          How does the AI resume builder work?
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6">
                        <div className="text-slate-700 leading-relaxed">
                          <p className="mb-4">
                            Our AI analyzes job descriptions and your experience
                            to create tailored, ATS-optimized resumes. The
                            process includes:
                          </p>
                          <ol className="list-decimal list-inside space-y-2 mb-4">
                            <li>
                              Upload your existing resume or enter your
                              information
                            </li>
                            <li>AI analyzes your background and target role</li>
                            <li>
                              Generates optimized content with industry keywords
                            </li>
                            <li>
                              Provides real-time ATS compatibility scoring
                            </li>
                            <li>
                              Suggests improvements and formatting options
                            </li>
                          </ol>
                          <p>
                            The AI ensures your resume passes through Applicant
                            Tracking Systems and highlights your most relevant
                            qualifications for each specific role.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-3"
                      className="border-b border-slate-200"
                    >
                      <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-slate-50 transition-colors">
                        <span className="text-lg font-semibold text-slate-900">
                          What recruitment features are available for employers?
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6">
                        <div className="text-slate-700 leading-relaxed">
                          <p className="mb-4">
                            TalentHub provides comprehensive recruitment tools
                            designed for modern hiring:
                          </p>
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="font-semibold mb-2">
                                Free Plan (3 active jobs):
                              </h4>
                              <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Job posting across 10+ platforms</li>
                                <li>Basic candidate screening</li>
                                <li>Interview scheduling</li>
                                <li>Application tracking</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">
                                Premium Plan (Unlimited):
                              </h4>
                              <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>AI-powered candidate matching</li>
                                <li>Advanced analytics & reporting</li>
                                <li>Bulk actions & automation</li>
                                <li>Team collaboration tools</li>
                                <li>Background verification</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-4"
                      className="border-b border-slate-200"
                    >
                      <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-slate-50 transition-colors">
                        <span className="text-lg font-semibold text-slate-900">
                          How secure is my data and privacy?
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6">
                        <div className="text-slate-700 leading-relaxed">
                          <p className="mb-4">
                            We take data security and privacy seriously with
                            enterprise-grade protection:
                          </p>
                          <ul className="list-disc list-inside space-y-2 mb-4">
                            <li>
                              <strong>End-to-end encryption</strong> for all
                              data transmission and storage
                            </li>
                            <li>
                              <strong>GDPR and CCPA compliant</strong> with full
                              data portability
                            </li>
                            <li>
                              <strong>SOC 2 Type II certified</strong>{" "}
                              infrastructure
                            </li>
                            <li>
                              <strong>Zero data sharing</strong> without
                              explicit user consent
                            </li>
                            <li>
                              <strong>Regular security audits</strong> by
                              third-party experts
                            </li>
                            <li>
                              <strong>Complete data control</strong> - download
                              or delete anytime
                            </li>
                          </ul>
                          <p>
                            Your information is never sold to third parties, and
                            you maintain full control over who can view your
                            profile and portfolio.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-5"
                      className="border-b border-slate-200"
                    >
                      <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-slate-50 transition-colors">
                        <span className="text-lg font-semibold text-slate-900">
                          What kind of customer support do you provide?
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6">
                        <div className="text-slate-700 leading-relaxed">
                          <p className="mb-4">
                            We provide comprehensive support to ensure your
                            success on the platform:
                          </p>
                          <div className="bg-slate-50 rounded-lg p-4 mb-4">
                            <h4 className="font-semibold mb-2">
                              24/7 AI Support:
                            </h4>
                            <p className="text-sm">
                              Instant answers to common questions, platform
                              guidance, and troubleshooting available through
                              our intelligent chatbot.
                            </p>
                          </div>
                          <div className="bg-slate-50 rounded-lg p-4 mb-4">
                            <h4 className="font-semibold mb-2">
                              Human Support:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Email support (response within 24 hours)</li>
                              <li>
                                Live chat during business hours (9 AM - 6 PM
                                EST)
                              </li>
                              <li>Video consultations for premium users</li>
                              <li>
                                Dedicated account managers for enterprise
                                clients
                              </li>
                            </ul>
                          </div>
                          <p>
                            Plus access to comprehensive documentation, video
                            tutorials, and community forums with career experts
                            and successful users.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="border-0">
                      <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-slate-50 transition-colors">
                        <span className="text-lg font-semibold text-slate-900">
                          How does the AI interview coaching work?
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6">
                        <div className="text-slate-700 leading-relaxed">
                          <p className="mb-4">
                            Our AI Interview Coach provides personalized
                            practice sessions based on real interview data from
                            top companies:
                          </p>
                          <ol className="list-decimal list-inside space-y-2 mb-4">
                            <li>
                              <strong>Question Selection:</strong> AI curates
                              questions based on your target role and company
                            </li>
                            <li>
                              <strong>Practice Sessions:</strong> Video-based
                              mock interviews with realistic scenarios
                            </li>
                            <li>
                              <strong>Real-time Feedback:</strong> Instant
                              analysis of your answers, body language, and
                              speaking pace
                            </li>
                            <li>
                              <strong>Improvement Suggestions:</strong> Specific
                              recommendations for better responses
                            </li>
                            <li>
                              <strong>Progress Tracking:</strong> Monitor your
                              improvement over time
                            </li>
                          </ol>
                          <p>
                            The system includes 1000+ questions from companies
                            like Google, Apple, Microsoft, and emerging
                            startups, covering behavioral, technical, and case
                            study scenarios.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to bottom,rgba(255,255,255,0.0),white 30%,white 70%,rgba(255,255,255,0.0)),linear-gradient(to right,rgba(255,255,255,0.0),white 20%,white 80%,rgba(255,255,255,0.0))]"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have accelerated their careers
              with TalentHub's AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3"
              >
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-indigo-600 font-semibold px-8 py-3"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center text-slate-600">
              <p>&copy; 2024 TalentHub. Connecting talent with opportunity.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
