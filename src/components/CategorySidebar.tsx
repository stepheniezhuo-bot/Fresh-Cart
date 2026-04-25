export default function CategorySidebar() {
  const categories = [
    { name: 'Produce', count: 124, active: true },
    { name: 'Dairy & Eggs', count: 86 },
    { name: 'Bakery', count: 42 },
    { name: 'Meat & Seafood', count: 65 },
  ];

  const dietary = ['Organic', 'Gluten-Free', 'Vegan'];

  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="sticky top-[100px] bg-surface-container-lowest border border-outline-variant rounded-lg p-6 shadow-sm">
        <h3 className="text-body-lg font-semibold text-on-surface mb-4">Categories</h3>
        <ul className="space-y-2 mb-6">
          {categories.map((cat) => (
            <li key={cat.name}>
              <button
                className={`w-full text-left flex items-center justify-between py-2 px-3 rounded-DEFAULT font-medium text-body-md transition-colors ${
                  cat.active 
                    ? 'bg-secondary-container text-on-secondary-container' 
                    : 'text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-label-md px-2 py-0.5 rounded-full ${
                  cat.active ? 'bg-surface-container-lowest' : 'bg-surface-container-low text-outline'
                }`}>
                  {cat.count}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <h3 className="text-body-lg font-semibold text-on-surface mb-4 border-t border-outline-variant pt-4">Dietary</h3>
        <div className="flex flex-wrap gap-2">
          {dietary.map((tag) => (
            <span
              key={tag}
              className={`text-label-md px-3 py-1 rounded-full cursor-pointer transition-colors ${
                tag === 'Gluten-Free'
                  ? 'bg-secondary-container text-on-secondary-container border border-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
