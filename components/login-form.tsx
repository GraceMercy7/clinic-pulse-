'use client'
import { useActionState } from 'react'
import { authenticate } from '@/actions/auth-actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { Mail, Lock, ArrowRight } from 'lucide-react'

export function LoginForm() {
    const [errorMessage, dispatch, isPending] = useActionState(authenticate, undefined)

    return (
        <div className="glass-card rounded-2xl p-8 animate-fade-in">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome back</h2>
                <p className="text-slate-500 text-sm mt-1">Enter your credentials to access the clinic system.</p>
            </div>
            <form action={dispatch} className="space-y-5">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="doctor@clinic.com"
                            required
                            className="pl-10 h-11 rounded-xl border-slate-200 bg-white/60 transition-all duration-300"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-sm font-semibold text-slate-700">Password</Label>
                        <button type="button" className="text-xs text-teal-600 hover:text-teal-700 font-medium">
                            Forgot password?
                        </button>
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="pl-10 h-11 rounded-xl border-slate-200 bg-white/60 transition-all duration-300"
                        />
                    </div>
                </div>
                {errorMessage && (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-600 animate-fade-in">
                        {errorMessage}
                    </div>
                )}
                <Button
                    type="submit"
                    className="w-full h-11 rounded-xl btn-gradient text-sm font-semibold tracking-wide"
                    disabled={isPending}
                >
                    {isPending ? (
                        <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Signing in...
                        </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            Sign in
                            <ArrowRight className="h-4 w-4" />
                        </span>
                    )}
                </Button>
            </form>
            <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-center text-slate-500">
                    Don&apos;t have an account?{' '}
                    <Link href="/signup" className="text-teal-600 hover:text-teal-700 font-semibold transition-colors">
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    )
}
