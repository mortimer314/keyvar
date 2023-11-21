
export default function useTheme() {
    function handelChangeTheme() {
        document.documentElement.classList.toggle('dark')
    
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', "dark")
        } else {
            localStorage.setItem('theme', "light")
    
        }
      }
  return handelChangeTheme
}
