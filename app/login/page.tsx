import { LoginForm } from "@/components/login-form"
import { Heart, Shield, Stethoscope } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center gradient-auth-bg p-4 overflow-hidden">
            {/* Floating decorative shapes */}
            <div className="floating-shape w-72 h-72 bg-teal-300 -top-20 -left-20 animate-float" />
            <div className="floating-shape w-96 h-96 bg-emerald-300 -bottom-32 -right-32 animate-float" style={{ animationDelay: '2s' }} />
            <div className="floating-shape w-48 h-48 bg-cyan-300 top-1/4 right-1/4 animate-float" style={{ animationDelay: '4s' }} />
            <div className="floating-shape w-32 h-32 bg-teal-200 bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '3s' }} />

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
                    Streamline your clinic operations with our modern, intuitive management platform.
                    From patient records to billing — all in one place.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-teal-100">
                        <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                            <Shield className="h-5 w-5" />
                        </div>
                        <span className="text-sm">HIPAA-compliant secure data management</span>
                    </div>
                    <div className="flex items-center gap-3 text-teal-100">
                        <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                            <Stethoscope className="h-5 w-5" />
                        </div>
                        <span className="text-sm">Complete patient lifecycle tracking</span>
                    </div>
                </div>
            </div>

            {/* Login form card */}
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
                <LoginForm />
            </div>
        </div>
    )
}
