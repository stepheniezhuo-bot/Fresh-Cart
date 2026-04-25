import { Plus, GripVertical, X, Truck } from 'lucide-react';
import { ShoppingListItem } from '../data';
import { useState } from 'react';

interface ShoppingListSidebarProps {
  initialItems: ShoppingListItem[];
}

export default function ShoppingListSidebar({ initialItems }: ShoppingListSidebarProps) {
  const [items, setItems] = useState(initialItems);

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <aside className="hidden lg:flex flex-col bg-surface-container-lowest border-l border-outline-variant w-80 h-[calc(100vh-64px)] sticky top-16 shadow-[-4px_0px_16px_rgba(80,94,131,0.04)]">
      <div className="p-6 border-b border-outline-variant bg-surface-bright">
        <h2 className="text-headline-sm text-primary font-bold">My Shopping List</h2>
        <p className="text-body-md text-on-surface-variant mt-1">Manage your frequent items</p>
        
        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Add item to list..."
            className="w-full bg-surface border-outline-variant text-on-surface text-body-md rounded-DEFAULT py-2 px-3 pr-10 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-outline"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:bg-primary-container hover:text-on-primary-container w-6 h-6 rounded-full flex items-center justify-center transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
        {items.map((item) => (
          <div key={item.id} className="bg-surface-container-lowest border border-outline-variant rounded-lg p-3 shadow-sm hover:border-primary/50 transition-colors group">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <GripVertical className="w-4 h-4 text-outline-variant group-hover:text-primary transition-colors cursor-grab" />
                <span className="text-body-md font-medium text-on-surface">{item.name}</span>
              </div>
              <button 
                onClick={() => removeItem(item.id)}
                className="text-outline hover:text-error transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="pl-7 pr-1">
              <select 
                defaultValue={item.frequency}
                className="w-full text-label-md bg-surface border-outline-variant text-on-surface-variant rounded-DEFAULT py-1 px-2 focus:ring-1 focus:ring-primary outline-none"
              >
                <option>Weekly</option>
                <option>Bi-weekly</option>
                <option>Monthly</option>
                <option>As needed</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-outline-variant bg-surface-container-lowest">
        <button className="w-full bg-primary text-on-primary hover:bg-primary-container text-body-lg font-semibold py-3 rounded-DEFAULT transition-colors shadow-md flex items-center justify-center gap-2">
          <Truck className="w-5 h-5" />
          Schedule Delivery
        </button>
      </div>
    </aside>
  );
}
