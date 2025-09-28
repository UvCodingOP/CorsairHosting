import React, { createContext, useState } from 'react'
export const ThemeContext = createContext('light');


const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);
    const [color, setColor] = useState(false);

    return (
        <ThemeContext.Provider value={ {theme, setTheme, color, setColor} }>
            {children}
        </ThemeContext.Provider>
    )
}

export default React.memo(ThemeContextProvider);