function Button({ as: component = 'button', variant = 'secondary', className = '', children, ...props }) {
  const variantClass = variant === 'brand' ? 'btn-brand' : `btn btn-${variant}`
  const ComponentTag = component

  return (
    <ComponentTag className={`${variantClass} ${className}`.trim()} {...props}>
      {children}
    </ComponentTag>
  )
}

export default Button
