import Theme from './themes'
import React from 'react'

const ThemeContext = React.createContext(Theme.Light)

export const Provider = ThemeContext.Provider

export const useTheme = (theme?: Theme | undefined) => {
    const contextTheme = React.useContext(ThemeContext)
    return theme ?? contextTheme
}

export { Theme }
export default {
    use: useTheme,
    Provider,
    Theme
}
