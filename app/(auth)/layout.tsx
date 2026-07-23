import React, { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#1c1f2e]">
      {children}
    </main>
  )
}

export default AuthLayout
