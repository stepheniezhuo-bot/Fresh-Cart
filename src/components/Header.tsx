import { Search, User, ShoppingCart, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface-container-lowest/95 backdrop-blur-sm border-b border-outline-variant shadow-sm px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <span className="text-2xl font-bold text-primary tracking-tight">FreshCart</span>
        
        <nav className="hidden md:flex items-center gap-4 ml-8">
          <a href="#" className="text-primary border-b-2 border-primary font-semibold py-2">Home</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors py-2 px-3 rounded-DEFAULT">Categories</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors py-2 px-3 rounded-DEFAULT">Order History</a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant w-4 h-4" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-surface-container-low border-outline-variant text-on-surface text-body-md rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        
        <button className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors">
          <User className="w-6 h-6" />
        </button>
        
        <button className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
        </button>
        
        <button className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors">
          <Bell className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
