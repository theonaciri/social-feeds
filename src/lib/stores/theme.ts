import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

// Initialize theme from localStorage or system preference
function getInitialTheme(): Theme {
	if (!browser) return 'light';
	
	const stored = localStorage.getItem('theme') as Theme;
	if (stored && ['light', 'dark'].includes(stored)) {
		return stored;
	}
	
	// Check system preference
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	
	return 'light';
}

export const theme = writable<Theme>(getInitialTheme());

// Apply theme to document and save to localStorage
export function setTheme(newTheme: Theme) {
	if (!browser) return;
	
	theme.set(newTheme);
	localStorage.setItem('theme', newTheme);
	document.documentElement.setAttribute('data-theme', newTheme);
}

// Toggle between light and dark themes
export function toggleTheme() {
	theme.update(current => {
		const newTheme = current === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		return newTheme;
	});
}

// Initialize theme on page load
if (browser) {
	const currentTheme = getInitialTheme();
	document.documentElement.setAttribute('data-theme', currentTheme);
}
