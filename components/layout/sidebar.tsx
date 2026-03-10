'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Users, Calendar, FileText, Settings, LayoutDashboard, CreditCard, Heart, LogOut } from 'lucide-react'

const sidebarItems = [
    { title: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { title: 'Patients', href: '/dashboard/patients', icon: Users },
    { title: 'Appointments', href: '/dashboard/appointments', icon: Calendar },
    { title: 'Records', href: '/dashboard/records', icon: FileText },
    { title: 'Billing', href: '/dashboard/billing', icon: CreditCard },
    { title: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function Sidebar() {
    const pathname = usePathname()
    return (
        <aside className="hidden h-screen w-[270px] flex-col gradient-sidebar md:flex relative overflow-hidden">
            {/* Subtle decorative glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-400/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-32 h-32 bg-emerald-400/5 rounded-full blur-3xl" />

            {/* Brand */}
            <div className="flex h-[72px] items-center gap-3 border-b border-white/10 px-6">
                <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-teal-500/20 animate-heartbeat">
                    <Heart className="h-5 w-5 text-white" />
                </div>
                <div>
                    <span className="text-lg font-bold text-white tracking-tight">Clinic Pulse</span>
                    <p className="text-[11px] text-teal-300/70 font-medium -mt-0.5">Medical Platform</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1.5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-400/50 mb-3 px-3">Menu</p>
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href ||
                        (item.href !== '/dashboard' && pathname.startsWith(item.href))
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group flex items-center gap-3.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-300 relative",
                                isActive
                                    ? "bg-white/15 text-white shadow-lg shadow-teal-900/20"
                                    : "text-slate-400 hover:bg-white/8 hover:text-white"
                            )}
                        >
                            {/* Active left accent bar */}
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.6)]" />
                            )}
                            <div className={cn(
                                "p-1.5 rounded-lg transition-all duration-300",
                                isActive
                                    ? "bg-teal-500/20 text-teal-300"
                                    : "text-slate-500 group-hover:text-teal-400 group-hover:bg-white/5"
                            )}>
                                <item.icon className="h-4 w-4" />
                            </div>
                            {item.title}
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom section */}
            <div className="px-4 pb-6">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4 mb-4">
                    <p className="text-xs text-teal-200/60 font-medium mb-1">Need Help?</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">Contact support for any questions about the system.</p>
                </div>
                <button className="flex items-center gap-3 w-full rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-400 hover:bg-white/8 hover:text-red-400 transition-all duration-300">
                    <div className="p-1.5 rounded-lg">
                        <LogOut className="h-4 w-4" />
                    </div>
                    Log out
                </button>
            </div>
        </aside>
    )
}
