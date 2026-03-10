import { SignupForm } from "@/components/auth/signup-form"
import { Heart, Shield, Users } from "lucide-react"

export default function SignupPage() {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center gradient-auth-bg p-4 overflow-hidden">
            {/* Floating decorative shapes */}
            <div className="floating-shape w-72 h-72 bg-emerald-300 -top-20 -right-20 animate-float" />
            <div className="floating-shape w-96 h-96 bg-teal-300 -bottom-32 -left-32 animate-float" style={{ animationDelay: '2s' }} />
            <div className="floating-shape w-48 h-48 bg-cyan-300 bottom-1/4 right-1/4 animate-float" style={{ animationDelay: '4s' }} />
            <div className="floating-shape w-32 h-32 bg-emerald-200 top-1/4 left-1/4 animate-float" style={{ animationDelay: '3s' }} />

            {/* Left side branding - hidden on mobile */}
            <div className="hidden lg:flex flex-col items-start max-w-md mr-20 animate-slide-in-left">
                <div className="flex items-center gap-3 mb-6">
                    <div className="relative">
                        <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center animate-pulse-glow">
                            <Heart className="h-7 w-7 text-white" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Clinic Pulse</h1>
                        <p className="text-teal-200 text-sm font-medium">Medical Management System</p>
                    </div>
                </div>
                <p className="text-teal-100 text-lg leading-relaxed mb-8">
                    Join thousands of healthcare professionals who trust Clinic Pulse for managing their practice efficiently.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-teal-100">
                        <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                            <Shield className="h-5 w-5" />
                        </div>
                        <span className="text-sm">Enterprise-grade security</span>
                    </div>
                    <div className="flex items-center gap-3 text-teal-100">
                        <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                            <Users className="h-5 w-5" />
                        </div>
                        <span className="text-sm">Multi-role team collaboration</span>
                    </div>
                </div>
            </div>

            {/* Signup form card */}
            <div className="w-full max-w-sm animate-scale-in">
                {/* Mobile-only branding */}
                <div className="flex flex-col items-center gap-3 mb-8 lg:hidden">
                    <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center animate-pulse-glow">
                        <Heart className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-white">Clinic Pulse</h1>
                        <p className="text-teal-200 text-sm">Medical Management System</p>
                    </div>
                </div>
                <SignupForm />
            </div>
        </div>
    )
}
