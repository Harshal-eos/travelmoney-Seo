'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'

interface LoginFormProps {
    lang: string;
}

export default function LoginForm({ lang }: LoginFormProps) {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const router = useRouter()

    const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const allowedCredentials = [
            { email: 'admin@travelmoneyapp.com', password: 'Admin_T@5690' }
        ]

        try {
            const validUser = allowedCredentials.find(
                cred => cred.email === email && cred.password === password
            )

            if (validUser) {
                sessionStorage.setItem('isAuthenticated', 'true')
                sessionStorage.setItem('userEmail', email)
                sessionStorage.setItem('loginTime', Date.now().toString())

                router.push(`/${lang}`)
                router.refresh()
            } else {
                setError('Invalid email or password. Please contact admin for access.')
            }
        } catch (err) {
            setError('Login failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-md w-full space-y-8 p-8">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                            Welcome Back
                        </h2>
                        <p className="text-gray-600">
                            Please sign in to continue
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleAuth}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-12"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="p-4 rounded-lg text-sm bg-red-50 text-red-800">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {loading ? 'Please wait...' : 'Sign In'}
                        </button>

                        <div className="text-center">
                            <p className="text-gray-600 text-sm">
                                Contact your administrator for access credentials
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
