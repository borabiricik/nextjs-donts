import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import classNames from "classnames"
import Link from "next/link"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

// Not: typedRoutes'in calismasi icin dev sunucusunun ayakta olmasi lazim

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "bg-gray-950 text-white")}>
        <nav className="flex items-center bg-black py-4 gap-x-8 justify-end px-8 border-b border-b-slate-400">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/user"}>Users</Link>
          <Link href={"/user/1"}>My User</Link>
          <Link href={"/auth/login"}>Login</Link>
          <Link href={"/auth/login/server"}>Login/Server</Link>
        </nav>
        <main>{children}</main>
        <ToastContainer />
      </body>
    </html>
  )
}
