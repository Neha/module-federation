import React, { createContext, useState  } from 'react';

const ThemeContext = createContext("light");

const { Provider } = ThemeContext

const ThemeProvider = ({children}) => {
    const [ theme, setTheme ] = useState('light')

    const updateTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return <Provider value={{ theme, updateTheme}}>{children}</Provider>
}

export { ThemeContext, ThemeProvider };