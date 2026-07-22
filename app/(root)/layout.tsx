import { ReactNode } from 'react'
// import { Children } from 'react'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default RootLayout
