import { FiStar } from 'react-icons/fi'

function RatingStars({ value = 0 }) {
  return (
    <div className="d-flex align-items-center gap-1" aria-label={`Rating ${value} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => {
        const isFilled = index < Math.round(value)
        return <FiStar key={index} className={isFilled ? 'text-warning' : 'text-muted opacity-50'} />
      })}
    </div>
  )
}

export default RatingStars
