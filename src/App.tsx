import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
// import { AuthGuard } from './components/AuthGuard';
import { AuthPrompt } from './components/AuthPrompt';
import { Navigation } from './components/Navigation';
import { Landing } from './pages/Landing';
import { Login } from './pages/auth/Login';
import { SignUp } from './pages/auth/SignUp';
import { Dashboard } from './pages/Dashboard';
import { Lessons } from './pages/Lessons';
import { Practice } from './pages/Practice';
import { useAuth } from './contexts/AuthContext';
import { Resources } from './pages/Resources';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import LiveClass from './pages/LiveClass';
import Roadmap from './pages/Roadmap';

function AppLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex flex-1 flex-col md:flex-row">
        <Navigation />
        <main className="flex-1 p-4 md:p-6 lg:p-8 pb-24 md:pb-8 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
      {!user && <AuthPrompt />}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        
        {/* Public routes with auth prompt */}
        <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
        <Route path="/lessons" element={<AppLayout><Lessons /></AppLayout>} />
        <Route path="/practice" element={<AppLayout><Practice /></AppLayout>} />
        <Route path="/liveClass" element={<AppLayout><LiveClass /></AppLayout>} />
        <Route path="/resources" element={<AppLayout><Resources/></AppLayout>} />
        <Route path="/roadmap" element={<AppLayout><Roadmap/></AppLayout>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;