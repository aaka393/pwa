import ThemeProvider from "./ThemeProvider"
import ThemeToggle from "./ThemeToggle"

const ThemeHome: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}

export default ThemeHome
