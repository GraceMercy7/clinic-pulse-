'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Search, LogOut } from "lucide-react"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"

const pageTitles: Record<string, string> = {
    '/dashboard': 'Dashboard Overview',
    '/dashboard/patients': 'Patient Management',
    '/dashboard/appointments': 'Appointments',
    '/dashboard/records': 'Medical Records',
    '/dashboard/billing': 'Billing & Invoicing',
    '/dashboard/settings': 'Settings',
}

export function Header() {
    const pathname = usePathname()
    const title = pageTitles[pathname] || 'Dashboard'

    return (
        <header className="glass-header flex h-[72px] items-center justify-between px-8 sticky top-0 z-30">
            <div>
                <h2 className="text-lg font-bold text-slate-900 tracking-tight">{title}</h2>
                <p className="text-xs text-slate-400 -mt-0.5">Welcome back! Here&apos;s your overview.</p>
            </div>
            <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search anything..."
                        className="w-64 pl-9 h-9 rounded-xl bg-white/60 border-slate-200 text-sm transition-all duration-300 focus:w-80"
                    />
                </div>

                {/* Notifications */}
                <button className="relative p-2.5 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                    <Bell className="h-5 w-5 text-slate-500" />
                    <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-teal-500 rounded-full border-2 border-white animate-pulse" />
                </button>

                {/* Divider */}
                <div className="w-px h-8 bg-slate-200" />

                {/* User avatar */}
                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center text-white text-sm font-bold shadow-md shadow-teal-500/20">
                        A
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-sm font-semibold text-slate-800 leading-tight">Admin</p>
                        <p className="text-[11px] text-slate-400">Administrator</p>
                    </div>
                </div>

                {/* Logout */}
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => signOut({ callbackUrl: '/login' })}
                    className="text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
                >
                    <LogOut className="h-4 w-4" />
                </Button>
            </div>
        </header>
    )
}
