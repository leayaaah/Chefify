import { Link } from 'react-router-dom'
import { FiBookmark, FiClock } from 'react-icons/fi'
import Badge from './Badge'
import RatingStars from './RatingStars'

function RecipeCard({ recipe }) {
  return (
    <article className="card border-0 rounded-3 shadow-sm recipe-card-hover h-100">
      <img src={recipe.image} className="card-img-top rounded-top-3" alt={recipe.title} />
      <div className="card-body d-flex flex-column gap-2">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <h3 className="h6 mb-0">{recipe.title}</h3>
          <button type="button" className="btn btn-light btn-sm rounded-circle lh-1 p-2" aria-label="Save recipe">
            <FiBookmark />
          </button>
        </div>
        <p className="text-muted small mb-0">{recipe.description}</p>
        <div className="d-flex align-items-center justify-content-between mt-auto">
          <RatingStars value={recipe.rating} />
          <span className="small text-muted d-flex align-items-center gap-1">
            <FiClock />
            {recipe.time}
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between pt-1">
          <Badge text={recipe.category} />
          <Link to={`/recipes/${recipe.id}`} className="small text-brand fw-semibold text-decoration-none">
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}

export default RecipeCard
