import RecipeCard from '../components/ui/RecipeCard'

const savedRecipes = [
  {
    id: 8,
    title: 'Thai Coconut Soup',
    description: 'Creamy and aromatic soup with mushrooms.',
    rating: 5,
    time: '40 min',
    category: 'Soup',
    image:
      '/images/recipe-8.svg',
  },
  {
    id: 9,
    title: 'Mediterranean Salad',
    description: 'Tomatoes, olives, feta and cucumber crunch.',
    rating: 4,
    time: '18 min',
    category: 'Salad',
    image:
      '/images/recipe-9.svg',
  },
]

function RecipeBox() {
  return (
    <div className="d-flex flex-column gap-4">
      <section className="card border-0 rounded-4 shadow-sm p-4">
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/images/avatar.svg"
              alt="Profile"
              className="rounded-circle object-fit-cover"
              width="72"
              height="72"
            />
            <div>
              <h1 className="h4 mb-1">Olivia Parker</h1>
              <p className="text-muted mb-0">Home cook • 24 saved recipes • 12 collections</p>
            </div>
          </div>
          <button type="button" className="btn btn-brand">Edit profile</button>
        </div>
      </section>

      <section>
        <h2 className="h5 mb-3">Saved recipes</h2>
        <div className="row g-3">
          {savedRecipes.map((recipe) => (
            <div className="col-12 col-md-6" key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default RecipeBox
