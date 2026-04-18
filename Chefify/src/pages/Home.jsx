import { FiChevronRight } from 'react-icons/fi'
import RecipeCard from '../components/ui/RecipeCard'
import Button from '../components/ui/Button'

const featuredRecipes = [
  {
    id: 1,
    title: 'Rainbow Vegetable Bowl',
    description: 'Fresh veggies, herbs, and creamy sesame dressing.',
    rating: 5,
    time: '25 min',
    category: 'Healthy',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'Berry Pancake Stack',
    description: 'Fluffy pancakes topped with berries and maple syrup.',
    rating: 4,
    time: '30 min',
    category: 'Breakfast',
    image:
      'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Creamy Tomato Pasta',
    description: 'Comforting pasta with basil and parmesan cheese.',
    rating: 5,
    time: '35 min',
    category: 'Dinner',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
  },
]

function Home() {
  return (
    <div className="d-flex flex-column gap-4">
      <section className="card border-0 rounded-4 shadow-sm overflow-hidden">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 p-4 p-lg-5">
            <p className="text-uppercase small fw-semibold text-brand mb-2">Find your favorite recipe</p>
            <h1 className="display-6 fw-bold mb-3">Discover delicious dishes for every mood.</h1>
            <p className="text-muted mb-4">
              Explore quick breakfasts, family dinners, and sweet treats curated just for you.
            </p>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <Button variant="brand">Get started</Button>
              <button type="button" className="btn btn-light border rounded-pill px-3">
                Browse categories <FiChevronRight className="ms-1" />
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80"
              alt="Healthy dishes"
              className="w-100 hero-image"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4 mb-0">Popular recipes</h2>
          <a href="/categories" className="small text-brand text-decoration-none fw-semibold">
            View all
          </a>
        </div>
        <div className="row g-3">
          {featuredRecipes.map((recipe) => (
            <div className="col-12 col-md-6 col-xl-4" key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
