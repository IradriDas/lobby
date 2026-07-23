import { ReactNode } from 'react'
import { auth } from '@clerk/nextjs/server'

const RootLayout = async ({ children }: { children: ReactNode }) => {
  await auth.protect()

  return (
    <main>
      {children}
    </main>
  )
}

export default RootLayout
