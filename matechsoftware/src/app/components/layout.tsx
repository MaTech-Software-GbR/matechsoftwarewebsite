import Footer from "./Footer"
import Header from "./Header"

const RootLayout = ({ children }) => {
  return (
    <div>
      <Header shouldBeSticky={false}></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default RootLayout
