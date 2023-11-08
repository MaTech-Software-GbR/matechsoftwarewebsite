import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header shouldBeSticky={false}></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default RootLayout
