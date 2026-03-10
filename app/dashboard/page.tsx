import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, DollarSign, Activity, ArrowUpRight, Clock, Star } from "lucide-react"

export default function DashboardPage() {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Welcome Banner */}
            <div className="relative overflow-hidden rounded-2xl gradient-primary p-8 text-white animate-slide-up">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-white/5 rounded-full translate-y-1/2" />
                <div className="relative">
                    <h1 className="text-2xl font-bold tracking-tight">Good Morning! 👋</h1>
                    <p className="text-teal-100 mt-1 text-sm max-w-lg">
                        Here&apos;s a quick overview of your clinic&apos;s performance today.
                        Everything looks great — keep up the excellent work!
                    </p>
                    <div className="flex gap-6 mt-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5">
                            <p className="text-xs text-teal-200">Today&apos;s Appointments</p>
                            <p className="text-xl font-bold">8</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5">
                            <p className="text-xs text-teal-200">Pending Tasks</p>
                            <p className="text-xl font-bold">3</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5">
                            <p className="text-xs text-teal-200">New Patients</p>
                            <p className="text-xl font-bold">5</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                <div className="gradient-stat-teal rounded-2xl p-5 card-hover animate-slide-up delay-1">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-teal-500/15">
                            <Users className="h-5 w-5 text-teal-600" />
                        </div>
                        <span className="flex items-center gap-1 text-xs font-semibold text-teal-700 bg-teal-500/10 px-2 py-1 rounded-full">
                            <ArrowUpRight className="h-3 w-3" /> 12%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">1,234</p>
                    <p className="text-xs text-slate-500 mt-1">Total Patients</p>
                </div>

                <div className="gradient-stat-blue rounded-2xl p-5 card-hover animate-slide-up delay-2">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-blue-500/15">
                            <Calendar className="h-5 w-5 text-blue-600" />
                        </div>
                        <span className="flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-500/10 px-2 py-1 rounded-full">
                            <ArrowUpRight className="h-3 w-3" /> 8%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">573</p>
                    <p className="text-xs text-slate-500 mt-1">Appointments</p>
                </div>

                <div className="gradient-stat-violet rounded-2xl p-5 card-hover animate-slide-up delay-3">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-violet-500/15">
                            <Activity className="h-5 w-5 text-violet-600" />
                        </div>
                        <span className="flex items-center gap-1 text-xs font-semibold text-violet-700 bg-violet-500/10 px-2 py-1 rounded-full">
                            <Star className="h-3 w-3" /> Active
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">12</p>
                    <p className="text-xs text-slate-500 mt-1">Active Doctors</p>
                </div>

                <div className="gradient-stat-amber rounded-2xl p-5 card-hover animate-slide-up delay-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-amber-500/15">
                            <DollarSign className="h-5 w-5 text-amber-600" />
                        </div>
                        <span className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-500/10 px-2 py-1 rounded-full">
                            <ArrowUpRight className="h-3 w-3" /> 20%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">45,231 ETB</p>
                    <p className="text-xs text-slate-500 mt-1">Total Revenue</p>
                </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 animate-slide-up delay-5">
                {/* Recent Appointments */}
                <Card className="col-span-4 rounded-2xl shadow-sm border-slate-100 card-hover">
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-base font-bold text-slate-900">Recent Appointments</CardTitle>
                            <span className="text-xs text-teal-600 font-semibold hover:underline cursor-pointer">View All</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {[
                                { name: 'Sarah Johnson', doctor: 'Dr. Smith', time: '09:00 AM', status: 'Confirmed', statusClass: 'badge-success' },
                                { name: 'Michael Chen', doctor: 'Dr. Adams', time: '10:30 AM', status: 'Pending', statusClass: 'badge-warning' },
                                { name: 'Emily Davis', doctor: 'Dr. Wilson', time: '11:00 AM', status: 'Confirmed', statusClass: 'badge-success' },
                                { name: 'James Brown', doctor: 'Dr. Smith', time: '02:00 PM', status: 'Cancelled', statusClass: 'badge-danger' },
                                { name: 'Lisa Anderson', doctor: 'Dr. Adams', time: '03:30 PM', status: 'Confirmed', statusClass: 'badge-success' },
                            ].map((apt, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50/80 transition-colors duration-200 group">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center text-sm font-bold text-teal-700">
                                            {apt.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">{apt.name}</p>
                                            <p className="text-xs text-slate-400">{apt.doctor}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                            <Clock className="h-3.5 w-3.5" />
                                            {apt.time}
                                        </div>
                                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${apt.statusClass}`}>
                                            {apt.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* New Patients */}
                <Card className="col-span-3 rounded-2xl shadow-sm border-slate-100 card-hover">
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-base font-bold text-slate-900">New Patients</CardTitle>
                            <span className="text-xs text-teal-600 font-semibold hover:underline cursor-pointer">View All</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {[
                                { name: 'Abebe Kebede', gender: 'Male', date: 'Today', phone: '+251 911 234 567' },
                                { name: 'Meron Tadesse', gender: 'Female', date: 'Yesterday', phone: '+251 922 345 678' },
                                { name: 'Daniel Hailu', gender: 'Male', date: '2 days ago', phone: '+251 933 456 789' },
                                { name: 'Sara Getachew', gender: 'Female', date: '3 days ago', phone: '+251 944 567 890' },
                                { name: 'Yonas Bekele', gender: 'Male', date: '4 days ago', phone: '+251 955 678 901' },
                            ].map((patient, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50/80 transition-colors duration-200">
                                    <div className="flex items-center gap-3">
                                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center text-sm font-bold ${patient.gender === 'Male'
                                                ? 'bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700'
                                                : 'bg-gradient-to-br from-pink-100 to-rose-100 text-rose-700'
                                            }`}>
                                            {patient.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">{patient.name}</p>
                                            <p className="text-xs text-slate-400">{patient.phone}</p>
                                        </div>
                                    </div>
                                    <span className="text-[11px] text-slate-400 font-medium">{patient.date}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
