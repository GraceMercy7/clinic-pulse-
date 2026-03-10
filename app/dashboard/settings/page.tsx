import { auth } from "@/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileForm } from "@/components/settings/profile-form"
import { Bell, Settings, Shield, AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react"

const notificationIcons: Record<string, { icon: any, color: string, bg: string }> = {
    Appointment: { icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    System: { icon: Info, color: 'text-blue-500', bg: 'bg-blue-50' },
    Billing: { icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-50' },
    Security: { icon: Shield, color: 'text-violet-500', bg: 'bg-violet-50' },
}

export default async function SettingsPage() {
    const session = await auth()

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Page Header */}
            <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-500/10">
                    <Settings className="h-6 w-6 text-slate-600" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Settings</h1>
                    <p className="text-sm text-slate-400">Manage your account and clinic preferences</p>
                </div>
            </div>

            <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="bg-white/80 border border-slate-100 rounded-xl p-1 shadow-sm">
                    <TabsTrigger value="profile" className="rounded-lg data-[state=active]:bg-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md font-medium text-sm px-5 transition-all duration-200">
                        Profile
                    </TabsTrigger>
                    <TabsTrigger value="clinic" className="rounded-lg data-[state=active]:bg-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md font-medium text-sm px-5 transition-all duration-200">
                        Clinic Info
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="rounded-lg data-[state=active]:bg-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md font-medium text-sm px-5 transition-all duration-200">
                        Notifications
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="profile" className="animate-fade-in">
                    <ProfileForm user={session?.user} />
                </TabsContent>

                <TabsContent value="clinic" className="animate-fade-in">
                    <Card className="rounded-2xl shadow-sm border-slate-100">
                        <CardHeader>
                            <CardTitle className="text-base font-bold">Clinic Settings</CardTitle>
                            <CardDescription>Manage general clinic information.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-slate-700">Clinic Name</Label>
                                <Input defaultValue="General Health Clinic" className="h-11 rounded-xl border-slate-200 bg-white/60" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-slate-700">Address</Label>
                                <Input defaultValue="123 Medical Center Dr, Suite 100" className="h-11 rounded-xl border-slate-200 bg-white/60" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-slate-700">Contact Phone</Label>
                                <Input defaultValue="+1 (555) 012-3456" className="h-11 rounded-xl border-slate-200 bg-white/60" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="btn-gradient rounded-xl h-10 px-6 text-sm font-semibold">Update Info</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="notifications" className="animate-fade-in">
                    <Card className="rounded-2xl shadow-sm border-slate-100">
                        <CardHeader>
                            <CardTitle className="text-base font-bold">Notification Logs</CardTitle>
                            <CardDescription>Recent system alerts and sent messages.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {[
                                    { type: 'Appointment', msg: 'New appointment booked for John Doe', time: '2 mins ago' },
                                    { type: 'System', msg: 'Daily backup completed successfully', time: '1 hour ago' },
                                    { type: 'Billing', msg: 'Invoice #INV-001 generated ($150.00)', time: '3 hours ago' },
                                    { type: 'Security', msg: 'New login detected from Chrome (Windows)', time: '5 hours ago' },
                                ].map((log, i) => {
                                    const style = notificationIcons[log.type] || notificationIcons.System
                                    const IconComponent = style.icon
                                    return (
                                        <div
                                            key={i}
                                            className="flex items-start gap-4 rounded-xl border border-slate-100 p-4 hover:bg-slate-50/50 transition-colors duration-200 card-hover animate-slide-up"
                                            style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
                                        >
                                            <div className={`p-2 rounded-lg ${style.bg} flex-shrink-0`}>
                                                <IconComponent className={`h-4 w-4 ${style.color}`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-semibold text-slate-900">{log.msg}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-[11px] font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">{log.type}</span>
                                                    <span className="text-xs text-slate-400">{log.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
