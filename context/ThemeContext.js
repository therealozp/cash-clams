// contexts/ThemeContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
	return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('');

	const clearTheme = () => {
		setTheme();
		localStorage.removeItem('theme');
	};

	useEffect(() => {
		// Load theme from local storage on mount
		const loadedTheme = localStorage.getItem('theme');
		if (loadedTheme) {
			setTheme(loadedTheme);
		}
	}, []);

	useEffect(() => {
		// Save theme to local storage whenever it changes
		if (theme && Object.keys(theme).length !== 0) {
			localStorage.setItem('theme', theme);
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, clearTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
