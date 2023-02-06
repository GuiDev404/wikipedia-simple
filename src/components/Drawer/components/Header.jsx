export const DrawerHeader = ({ children, className = '' } = {}) => {
  return (
    <header className={`flex justify-between items-center ${className}`}>
      {children}
    </header>
  )
}
