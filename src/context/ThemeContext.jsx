import React, { createContext, useState } from 'react'
export const ThemeContext = createContext('light');


const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(true);
    const [color, setColor] = useState(true);

    return (
        <ThemeContext.Provider value={ {theme, setTheme, color, setColor} }>
            {children}
        </ThemeContext.Provider>
    )
}

export default React.memo(ThemeContextProvider);