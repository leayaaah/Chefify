const filterGroups = [
  { title: 'Meal Type', options: ['Breakfast', 'Lunch', 'Dinner', 'Dessert'] },
  { title: 'Diet', options: ['Vegetarian', 'Vegan', 'Low Carb', 'Gluten Free'] },
]

function SidebarFilter() {
  return (
    <aside className="card border-0 rounded-3 shadow-sm p-3">
      <h5 className="mb-3">Filters</h5>
      <div className="d-flex flex-column gap-3">
        {filterGroups.map((group) => (
          <section key={group.title}>
            <h6 className="mb-2 text-muted small text-uppercase">{group.title}</h6>
            <div className="d-flex flex-column gap-2">
              {group.options.map((option) => (
                <label key={option} className="form-check-label d-flex align-items-center gap-2 small">
                  <input className="form-check-input mt-0" type="checkbox" />
                  {option}
                </label>
              ))}
            </div>
          </section>
        ))}
      </div>
    </aside>
  )
}

export default SidebarFilter
