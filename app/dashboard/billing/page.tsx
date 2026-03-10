import { getInvoices } from "@/actions/billing-actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Plus, DollarSign, FileText, TrendingUp, CreditCard, ChevronRight } from "lucide-react"

const invoiceStatusStyle: Record<string, string> = {
    PAID: 'badge-success',
    PENDING: 'badge-warning',
    CANCELLED: 'badge-danger',
}

export default async function BillingPage() {
    const invoices = await getInvoices()

    const totalRevenue = invoices
        .filter((i: any) => i.status === 'PAID')
        .reduce((acc: number, curr: any) => acc + curr.amount, 0)

    const pendingAmount = invoices
        .filter((i: any) => i.status === 'PENDING')
        .reduce((acc: number, curr: any) => acc + curr.amount, 0)

    const totalInvoices = invoices.length

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10">
                        <CreditCard className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Billing & Invoicing</h1>
                        <p className="text-sm text-slate-400">Manage invoices and track revenue</p>
                    </div>
                </div>
                <Link href="/dashboard/billing/create">
                    <Button className="btn-gradient rounded-xl h-10 px-5 text-sm font-semibold">
                        <Plus className="mr-2 h-4 w-4" /> Create Invoice
                    </Button>
                </Link>
            </div>

            {/* Stat Cards */}
            <div className="grid gap-5 md:grid-cols-3">
                <div className="gradient-stat-green rounded-2xl p-5 card-hover animate-slide-up delay-1">
                    <div className="flex items-center justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-emerald-500/15">
                            <DollarSign className="h-5 w-5 text-emerald-600" />
                        </div>
                        <TrendingUp className="h-4 w-4 text-emerald-500" />
                    </div>
                    <p className="text-2xl font-bold text-slate-900">{totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })} ETB</p>
                    <p className="text-xs text-slate-500 mt-1">Total Revenue</p>
                </div>
                <div className="gradient-stat-amber rounded-2xl p-5 card-hover animate-slide-up delay-2">
                    <div className="flex items-center justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-amber-500/15">
                            <FileText className="h-5 w-5 text-amber-600" />
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">{pendingAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })} ETB</p>
                    <p className="text-xs text-slate-500 mt-1">Pending Payments</p>
                </div>
                <div className="gradient-stat-blue rounded-2xl p-5 card-hover animate-slide-up delay-3">
                    <div className="flex items-center justify-between mb-3">
                        <div className="p-2.5 rounded-xl bg-blue-500/15">
                            <CreditCard className="h-5 w-5 text-blue-600" />
                        </div>
                    </div>
                    <p className="text-2xl font-bold text-slate-900">{totalInvoices}</p>
                    <p className="text-xs text-slate-500 mt-1">Total Invoices</p>
                </div>
            </div>

            {/* Invoice Table */}
            <Card className="rounded-2xl shadow-sm border-slate-100">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-bold">Recent Invoices</CardTitle>
                        <span className="text-xs text-slate-400 font-medium">{invoices.length} invoices</span>
                    </div>
                </CardHeader>
                <CardContent>
                    {invoices.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="p-4 rounded-2xl bg-slate-50 mb-4">
                                <FileText className="h-10 w-10 text-slate-300" />
                            </div>
                            <p className="text-sm font-medium text-slate-500">No invoices found</p>
                            <p className="text-xs text-slate-400 mt-1">Create your first invoice to start billing</p>
                        </div>
                    ) : (
                        <div className="relative w-full overflow-auto rounded-xl">
                            <table className="w-full caption-bottom text-sm text-left premium-table">
                                <thead>
                                    <tr>
                                        <th className="h-12 px-4 align-middle rounded-tl-xl">Invoice ID</th>
                                        <th className="h-12 px-4 align-middle">Patient</th>
                                        <th className="h-12 px-4 align-middle">Amount</th>
                                        <th className="h-12 px-4 align-middle">Status</th>
                                        <th className="h-12 px-4 align-middle rounded-tr-xl">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoices.map((inv: any) => (
                                        <tr key={inv.id} className="border-b border-slate-50">
                                            <td className="p-4 align-middle">
                                                <span className="font-mono text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-lg">
                                                    #{inv.id.slice(-6).toUpperCase()}
                                                </span>
                                            </td>
                                            <td className="p-4 align-middle">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center text-xs font-bold text-teal-700">
                                                        {inv.patient.firstName[0]}{inv.patient.lastName[0]}
                                                    </div>
                                                    <span className="font-medium text-slate-900">{inv.patient.firstName} {inv.patient.lastName}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle font-bold text-slate-900">
                                                {inv.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })} ETB
                                            </td>
                                            <td className="p-4 align-middle">
                                                <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${invoiceStatusStyle[inv.status] || 'badge-info'}`}>
                                                    {inv.status}
                                                </span>
                                            </td>
                                            <td className="p-4 align-middle text-slate-400 text-xs">
                                                {new Date(inv.createdAt).toLocaleDateString()}
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
