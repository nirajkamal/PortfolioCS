interface CategoryFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 border-2 border-border font-mono transition-colors ${
            selectedCategory === category
              ? "bg-foreground text-background"
              : "bg-background hover:bg-foreground hover:text-background"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
