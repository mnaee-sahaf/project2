import React, { useState } from 'react';
import { Home, BookOpen, Activity, LogOut, LogIn, DownloadCloud, ChevronRight, ChevronLeft, Computer } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Navigation() {
  const { user, userName, signOut } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <nav className={`fixed bottom-0 z-10 md:sticky top-0 left-0 bg-white border-t border border-gray-200 md:border-t-0 md:border-r transition-all duration-300
      ${isCollapsed ? 'md:w-16' : 'md:w-64'} md:h-screen`}>
      
       <div className="flex justify-around items-center p-4 md:flex-col md:items-start md:space-y-6">
        {/* Logo */}
        <div  className="flex items-center justify-between w-full mb-8">
          <Link to="/"     className={`text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors 
            ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}
            onClick={(e) => {
            if (isCollapsed) {
              e.preventDefault();
            }
          }}
            >
            ML Academy
          </Link>
          <div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-600 hover:text-gray-900 transition"
          >
            {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
          </div>
          {userName && (
            <p className="text-sm text-gray-600 mt-2">Welcome, {userName}</p>
          )}
        </div>
        
        {/* Navigation Links */}
        <NavItem to="/dashboard" icon={<Home size={20} />} label="Dashboard" collapsed={isCollapsed} />
        <NavItem to="/lessons" icon={<BookOpen size={20} />} label="Lessons" collapsed={isCollapsed} />
        <NavItem to="/practice" icon={<Activity size={20} />} label="Practice" collapsed={isCollapsed} />
        <NavItem to="/liveClass" icon={<Computer size={20} />} label="Live Class" collapsed={isCollapsed} />
        <NavItem to="/resources" icon={<DownloadCloud size={20} />} label="Resources" collapsed={isCollapsed} />
        
        {/* Sign In/Sign Out */}
        {user ? (
          <button
            onClick={() => signOut()}
            className="flex items-center space-x-3 p-2 rounded-lg w-full transition-colors text-red-600 hover:bg-red-50"
          >
            <LogOut size={20} />
            {!isCollapsed && <span>Sign Out</span>}
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="flex items-center space-x-3 p-2 rounded-lg w-full transition-colors text-indigo-600 hover:bg-indigo-50"
          >
            <LogIn size={20} />
            {!isCollapsed && <span>Sign In</span>}
          </Link>
        )}
      </div>
    </nav>
  );
}

function NavItem({ icon, label, to, collapsed }: { icon: React.ReactNode; label: string; to: string; collapsed: boolean }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center space-x-3 p-2 rounded-lg w-full transition-all duration-300
        ${isActive 
          ? 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100' 
          : 'text-gray-600 hover:bg-gray-100'}
        ${collapsed ? 'justify-center' : ''}
      `}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
}
