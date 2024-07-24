import { ReactNode } from 'react';

import "./globals.css"

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout;
