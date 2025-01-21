import React from 'react'
import type { FC } from 'react'
import type { Metadata } from 'next'
import GA, { GaType } from '@/app/components/base/ga'
import SiteGuard from '../components/site-guard'

export const metadata: Metadata = {
  icons: 'data:,', // prevent browser from using default favicon
}

const Layout: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className="min-w-[300px] h-full pb-[env(safe-area-inset-bottom)]">
      <GA gaType={GaType.webapp} />
      <SiteGuard />
      {children}
    </div>
  )
}

export default Layout
