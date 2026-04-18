import { NavLink } from 'react-router-dom'
import { FiSearch, FiUser } from 'react-icons/fi'
import Button from '../ui/Button'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Categories', to: '/categories' },
  { label: 'Recipe Box', to: '/recipe-box' },
]

function Header() {
  return (
    <header className="sticky-top bg-white border-bottom shadow-sm">
      <div className="container py-3 d-flex flex-column flex-lg-row align-items-lg-center gap-3 justify-content-between">
        <div className="d-flex align-items-center gap-4 flex-wrap">
          <NavLink to="/" className="text-decoration-none fw-bold fs-4 text-brand">
            Chefify
          </NavLink>
          <nav className="d-flex align-items-center gap-3 small fw-semibold">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-decoration-none ${isActive ? 'text-brand' : 'text-muted'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="d-flex align-items-center gap-2 ms-lg-auto flex-wrap justify-content-end">
          <div className="input-group input-group-sm w-auto">
            <span className="input-group-text bg-white border-end-0">
              <FiSearch />
            </span>
            <input
              type="search"
              className="form-control border-start-0"
              placeholder="Search recipes"
              aria-label="Search recipes"
            />
          </div>
          <Button as={NavLink} to="/recipe-box" variant="brand" className="btn-sm">
            Your Recipe Box
          </Button>
          <button type="button" className="btn btn-outline-secondary btn-sm rounded-circle p-2 lh-1" aria-label="Profile">
            <FiUser />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
