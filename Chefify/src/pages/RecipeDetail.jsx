import { useParams } from 'react-router-dom'

function RecipeDetail() {
  const { id } = useParams()

  return (
    <section className="card border-0 rounded-4 shadow-sm p-4 p-md-5">
      <p className="text-brand text-uppercase small fw-semibold mb-2">Recipe detail</p>
      <h1 className="h3">Recipe #{id}</h1>
      <p className="text-muted mb-0">
        This detail page is ready for future recipe content and follows the shared Chefify layout.
      </p>
    </section>
  )
}

export default RecipeDetail
