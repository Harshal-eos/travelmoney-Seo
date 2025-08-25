// app/components/auth/AuthWrapper.tsx
'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState, ReactNode } from 'react'

interface AuthWrapperProps {
  children: ReactNode
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [loading, setLoading] = useState<boolean>(true)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = (): void => {
      const authStatus = sessionStorage.getItem('isAuthenticated')
      const loginTime = sessionStorage.getItem('loginTime')
      
      // Check if user is authenticated and session hasn't expired (24 hours)
      const isValidSession = authStatus === 'true' && 
        loginTime && 
        (Date.now() - parseInt(loginTime)) < 24 * 60 * 60 * 1000

      if (isValidSession) {
        setIsAuthenticated(true)
        // Set cookie for middleware
        document.cookie = 'auth-token=valid; path=/; max-age=86400' // 24 hours
      } else {
        // Clear invalid session
        sessionStorage.removeItem('isAuthenticated')
        sessionStorage.removeItem('userEmail')
        sessionStorage.removeItem('loginTime')
        document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
        router.push('/login')
      }
      
      setLoading(false)
    }

    checkAuth()

    // Check auth status periodically
    const interval = setInterval(checkAuth, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect via useEffect
  }

  return <>{children}</>
}