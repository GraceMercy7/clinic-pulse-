import { getPatients } from "@/actions/patient-actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Plus, Search, Users, ChevronRight } from "lucide-react"

export default async function PatientsPage({
    searchParams,
}: {
    searchParams: Promise<{
        query?: string
        page?: string
    }>
}) {
    const sp = await searchParams
    const query = sp?.query || ''
    const patients = await getPatients(query)

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-teal-500/10">
                        <Users className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Patients</h1>
                        <p className="text-sm text-slate-400">Manage and view all patient records</p>
                    </div>
                </div>
                <Link href="/dashboard/patients/register">
                    <Button className="btn-gradient rounded-xl h-10 px-5 text-sm font-semibold">
                        <Plus className="mr-2 h-4 w-4" /> Register Patient
                    </Button>
                </Link>
            </div>

            <Card className="rounded-2xl shadow-sm border-slate-100">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-bold">Patient Directory</CardTitle>
                        <span className="text-xs text-slate-400 font-medium">{patients.length} patients found</span>
                    </div>
                    <div className="flex w-full max-w-sm items-center space-x-2 pt-4">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input
                                type="search"
                                placeholder="Search by name or phone..."
                                className="pl-10 h-10 rounded-xl border-slate-200 bg-white/60 transition-all duration-300"
                                defaultValue={query}
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {patients.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="p-4 rounded-2xl bg-slate-50 mb-4">
                                <Users className="h-10 w-10 text-slate-300" />
                            </div>
                            <p className="text-sm font-medium text-slate-500">No patients found</p>
                            <p className="text-xs text-slate-400 mt-1">Start by registering your first patient</p>
                        </div>
                    ) : (
                        <div className="relative w-full overflow-auto rounded-xl">
                            <table className="w-full caption-bottom text-sm text-left premium-table">
                                <thead>
                                    <tr>
                                        <th className="h-12 px-4 align-middle rounded-tl-xl">Patient</th>
                                        <th className="h-12 px-4 align-middle">Gender</th>
                                        <th className="h-12 px-4 align-middle">Age</th>
                                        <th className="h-12 px-4 align-middle">Contact</th>
                                        <th className="h-12 px-4 align-middle text-right rounded-tr-xl">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {patients.map((patient: any) => (
                                        <tr key={patient.id} className="border-b border-slate-50">
                                            <td className="p-4 align-middle">
                                                <div className="flex items-center gap-3">
                                                    <div className={`h-9 w-9 rounded-lg flex items-center justify-center text-xs font-bold ${patient.gender.toLowerCase() === 'male'
                                                            ? 'bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700'
                                                            : 'bg-gradient-to-br from-pink-100 to-rose-100 text-rose-700'
                                                        }`}>
                                                        {patient.firstName[0]}{patient.lastName[0]}
                                                    </div>
                                                    <span className="font-semibold text-slate-900">
                                                        {patient.firstName} {patient.lastName}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle">
                                                <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${patient.gender.toLowerCase() === 'male' ? 'badge-info' : 'badge-danger'
                                                    }`}>
                                                    {patient.gender.toLowerCase()}
                                                </span>
                                            </td>
                                            <td className="p-4 align-middle font-medium text-slate-700">
                                                {new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear()} yrs
                                            </td>
                                            <td className="p-4 align-middle text-slate-500">{patient.phone}</td>
                                            <td className="p-4 align-middle text-right">
                                                <Link href={`/dashboard/patients/${patient.id}`}>
                                                    <Button variant="ghost" size="sm" className="rounded-lg text-teal-600 hover:text-teal-700 hover:bg-teal-50 font-semibold text-xs">
                                                        View <ChevronRight className="ml-1 h-3.5 w-3.5" />
                                                    </Button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
