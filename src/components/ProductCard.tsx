import { ShoppingCart, Plus } from 'lucide-react';
import { Product } from '../data';

interface ProductCardProps {
  product: Product;
  variant?: 'compact' | 'full';
}

export default function ProductCard({ product, variant = 'full' }: ProductCardProps) {
  const isCompact = variant === 'compact';

  if (isCompact) {
    return (
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow">
        <div className="w-20 h-20 rounded-DEFAULT bg-surface-container-low flex-shrink-0 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-body-md font-semibold text-on-surface">{product.name}</h3>
          <p className="text-label-md text-outline">{product.unit}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-price-display text-primary">${product.price.toFixed(2)}</span>
            <button className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary w-8 h-8 rounded-full flex items-center justify-center transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex flex-col shadow-sm hover:shadow-lg transition-shadow relative group">
      {product.label && (
        <div className="absolute top-2 left-2 z-10">
          <span className={`text-label-md px-2 py-0.5 rounded-full font-medium ${
            product.label === 'Sale' 
              ? 'bg-error-container text-on-error-container' 
              : 'bg-secondary-container text-on-secondary-container'
          }`}>
            {product.label}
          </span>
        </div>
      )}
      
      <div className="w-full aspect-square rounded-DEFAULT bg-surface-container-low mb-4 overflow-hidden flex items-center justify-center p-2">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="mt-auto">
        <h3 className="text-body-md font-semibold text-on-surface line-clamp-1">{product.name}</h3>
        <p className="text-label-md text-outline mb-2">{product.unit}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-price-display text-primary">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-label-md text-outline line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          
          <button className="bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm">
            {product.label === 'Sale' ? <ShoppingCart className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
