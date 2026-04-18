function Pagination() {
  return (
    <nav aria-label="Recipe pagination">
      <ul className="pagination justify-content-center mb-0">
        <li className="page-item disabled">
          <span className="page-link">Previous</span>
        </li>
        <li className="page-item active" aria-current="page">
          <span className="page-link bg-brand border-brand">1</span>
        </li>
        <li className="page-item">
          <span className="page-link">2</span>
        </li>
        <li className="page-item">
          <span className="page-link">Next</span>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
