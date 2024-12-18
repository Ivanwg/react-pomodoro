/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
				'0.5': '2px',
				1: '4px',
				'1.5': '6px',
				2: '8px',
				3: '12px',
				4: '16px',
				5: '20px',
				6: '24px',
				7: '28px',
				8: '32px',
				9: '36px',
				10: '40px',
  		},
			borderWidth: {
				DEFAULT: '1px',
				2: '2px',
				3: '3px',
			},
			outlineWidth: {
				'none': 'none',
			},
			outlineOffset: {
				'none': 'none',
			},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

