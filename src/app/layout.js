'use client'
import Navbar from '@/Components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer'
import { Provider } from 'react-redux'
import store from '@/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ABC Club',
  description: 'Generated by ABC Club',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <Provider store={store}>
          
      <Navbar />
        {children}
        <Footer />
      </Provider>
        
        </body>
    </html>
  )
}
