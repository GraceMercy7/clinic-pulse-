import { getAppointments } from "@/actions/appointment-actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Plus, Calendar, Clock, User as UserIcon, CalendarCheck } from "lucide-react"

const statusStyles: Record<string, string> = {
    PENDING: 'badge-warning',
    CONFIRMED: 'badge-success',
    COMPLETED: 'badge-info',
    CANCELLED: 'badge-danger',
}

const statusBorder: Record<string, string> = {
    PENDING: 'border-l-amber-400',
    CONFIRMED: 'border-l-emerald-400',
    COMPLETED: 'border-l-blue-400',
    CANCELLED: 'border-l-rose-400',
}

export default async function AppointmentsPage() {
    const appointments = await getAppointments()

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10">
                        <CalendarCheck className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Appointments</h1>
                        <p className="text-sm text-slate-400">Schedule and manage patient appointments</p>
                    </div>
                </div>
                <Link href="/dashboard/appointments/book">
                    <Button className="btn-gradient rounded-xl h-10 px-5 text-sm font-semibold">
                        <Plus className="mr-2 h-4 w-4" /> Book Appointment
                    </Button>
                </Link>
            </div>

            <Card className="rounded-2xl shadow-sm border-slate-100">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-bold">Upcoming Schedule</CardTitle>
                        <span className="text-xs text-slate-400 font-medium">{appointments.length} appointments</span>
                    </div>
                </CardHeader>
                <CardContent>
                    {appointments.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="p-4 rounded-2xl bg-slate-50 mb-4">
                                <Calendar className="h-10 w-10 text-slate-300" />
                            </div>
                            <p className="text-sm font-medium text-slate-500">No appointments scheduled</p>
                            <p className="text-xs text-slate-400 mt-1">Book a new appointment to get started</p>
                        </div>
                    ) : (
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {appointments.map((apt: any, i: number) => (
                                <div
                                    key={apt.id}
                                    className={`flex flex-col rounded-xl border-l-4 ${statusBorder[apt.status] || 'border-l-slate-300'} bg-white p-5 shadow-sm card-hover animate-slide-up`}
                                    style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                                >
                                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                                            <Calendar className="h-4 w-4 text-teal-500" />
                                            {new Date(apt.date).toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
                                            <Clock className="h-3.5 w-3.5 text-teal-500" />
                                            {new Date(apt.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    </div>
                                    <div className="mt-3 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center text-xs font-bold text-teal-700">
                                                {apt.patient.firstName[0]}{apt.patient.lastName[0]}
                                            </div>
                                            <div>
                                                <span className="text-sm font-semibold text-slate-900">{apt.patient.firstName} {apt.patient.lastName}</span>
                                                <p className="text-xs text-slate-400">Dr. {apt.doctor.name}</p>
                                            </div>
                                        </div>
                                        {apt.reason && (
                                            <div className="rounded-lg bg-slate-50 p-2.5 text-xs text-slate-600 mt-2">
                                                {apt.reason}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-4 flex justify-between items-center pt-3 border-t border-slate-50">
                                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${statusStyles[apt.status] || 'badge-info'}`}>
                                            {apt.status}
                                        </span>
                                        <Button variant="ghost" size="sm" className="h-7 text-xs text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg font-semibold">
                                            Details →
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
