import Pagination from '../components/common/Pagination'
import SidebarFilter from '../components/common/SidebarFilter'
import RecipeCard from '../components/ui/RecipeCard'

const recipes = [
  {
    id: 4,
    title: 'Spicy Chickpea Wrap',
    description: 'High-protein wrap with yogurt garlic sauce.',
    rating: 4,
    time: '20 min',
    category: 'Lunch',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    title: 'Garlic Herb Salmon',
    description: 'Oven baked salmon with lemon and dill.',
    rating: 5,
    time: '28 min',
    category: 'Dinner',
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    title: 'Chocolate Chia Pudding',
    description: 'No-bake dessert with cocoa and coconut milk.',
    rating: 4,
    time: '10 min',
    category: 'Dessert',
    image:
      'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    title: 'Avocado Toast Deluxe',
    description: 'Crunchy sourdough with poached egg and avocado.',
    rating: 4,
    time: '15 min',
    category: 'Breakfast',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80',
  },
]

function CategoryList() {
  return (
    <div className="row g-4">
      <div className="col-12 col-lg-3">
        <SidebarFilter />
      </div>
      <div className="col-12 col-lg-9 d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h4 mb-0">Search results</h1>
          <p className="text-muted small mb-0">{recipes.length} recipes found</p>
        </div>
        <div className="row g-3">
          {recipes.map((recipe) => (
            <div className="col-12 col-md-6" key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default CategoryList
