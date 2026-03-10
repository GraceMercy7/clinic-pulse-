import { getMedicalRecords } from "@/actions/record-actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { User as UserIcon, Calendar, FileText, Stethoscope, Pill } from "lucide-react"

export default async function RecordsPage() {
    const records = await getMedicalRecords()

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-violet-500/10">
                        <FileText className="h-6 w-6 text-violet-600" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Medical Records</h1>
                        <p className="text-sm text-slate-400">View and manage all patient medical records</p>
                    </div>
                </div>
                <Link href="/dashboard/patients">
                    <Button className="btn-gradient rounded-xl h-10 px-5 text-sm font-semibold">
                        <UserIcon className="mr-2 h-4 w-4" /> Go to Patients
                    </Button>
                </Link>
            </div>

            <Card className="rounded-2xl shadow-sm border-slate-100">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-bold">All Records</CardTitle>
                        <span className="text-xs text-slate-400 font-medium">{records.length} records</span>
                    </div>
                </CardHeader>
                <CardContent>
                    {records.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="p-4 rounded-2xl bg-slate-50 mb-4">
                                <Stethoscope className="h-10 w-10 text-slate-300" />
                            </div>
                            <p className="text-sm font-medium text-slate-500">No medical records found</p>
                            <p className="text-xs text-slate-400 mt-1">Records are created from patient profiles</p>
                        </div>
                    ) : (
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {records.map((record: any, i: number) => (
                                <div
                                    key={record.id}
                                    className="flex flex-col rounded-xl border-l-4 border-l-violet-400 bg-white p-5 shadow-sm card-hover animate-slide-up"
                                    style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                                >
                                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                                        <div className="flex items-center gap-2">
                                            <Stethoscope className="h-4 w-4 text-violet-500" />
                                            <span className="font-bold text-slate-900 text-sm">{record.diagnosis}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                                            <Calendar className="h-3 w-3" />
                                            {new Date(record.createdAt).toLocaleDateString()}
                                        </div>
                                    </div>

                                    <div className="space-y-2.5 text-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400 text-xs">Patient</span>
                                            <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-md bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center text-[10px] font-bold text-teal-700">
                                                    {record.patient.firstName[0]}{record.patient.lastName[0]}
                                                </div>
                                                <span className="font-semibold text-slate-800 text-xs">{record.patient.firstName} {record.patient.lastName}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400 text-xs">Doctor</span>
                                            <span className="font-medium text-slate-700 text-xs">{record.doctor?.name || 'Unknown'}</span>
                                        </div>
                                    </div>

                                    {record.treatment && (
                                        <div className="mt-3 rounded-lg bg-violet-50 p-3 flex items-start gap-2">
                                            <Pill className="h-3.5 w-3.5 text-violet-500 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <span className="text-[10px] font-semibold text-violet-600 uppercase tracking-wider">Treatment</span>
                                                <p className="text-xs text-slate-600 mt-0.5">{record.treatment}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
