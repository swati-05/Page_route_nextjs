import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AuthGuard from '@/guard/AuthGuard';

export default function DashboardLayout({children}) {
  return (
    <AuthGuard>
        <Header/>
        {children}
        <Footer/>
    </AuthGuard>
  )
}
