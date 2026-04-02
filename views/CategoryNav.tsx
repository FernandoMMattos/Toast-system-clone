import Button from "@/components/Button";
import { categories, SelectCategory } from "@/data/categories";

type Props = {
  selected: SelectCategory;
  onSelect: (category: SelectCategory) => void;
};

export function CategoryNav({ onSelect }: Props) {
  return (
    <nav className="flex gap-2">
      {Object.entries(categories).map(([key, category]) => (
        <Button
          key={key}
          color={category.color}
          onClick={() => onSelect(key as SelectCategory)}
        >
          {category.label}
        </Button>
      ))}
    </nav>
  );
}
