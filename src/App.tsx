/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import CategorySidebar from './components/CategorySidebar';
import ShoppingListSidebar from './components/ShoppingListSidebar';
import ProductCard from './components/ProductCard';
import { FREQUENTLY_PURCHASED, PRODUCTS, INITIAL_SHOPPING_LIST } from './data';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <div className="flex flex-1">
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Mobile Search */}
            <div className="md:hidden relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-surface-container-low border border-outline-variant text-on-surface text-body-md rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary outline-none shadow-sm"
              />
            </div>

            {/* Frequently Purchased */}
            <section>
              <h2 className="text-headline-sm text-on-surface mb-4">Frequently Purchased</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FREQUENTLY_PURCHASED.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProductCard product={product} variant="compact" />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row gap-8">
              <CategorySidebar />
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-headline-md text-on-surface">Fresh Produce</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-body-md text-outline">Sort by:</span>
                    <select className="bg-surface-container-lowest border border-outline-variant text-on-surface text-body-md rounded-DEFAULT py-1 pl-3 pr-8 focus:ring-primary outline-none">
                      <option>Recommended</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {PRODUCTS.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <ShoppingListSidebar initialItems={INITIAL_SHOPPING_LIST} />
      </div>
    </div>
  );
}
