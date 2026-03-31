export const transitions = {
	fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
	base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
	slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
	slower: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

export const durations = {
	fast: "150ms",
	base: "200ms",
	slow: "300ms",
	slower: "500ms",
} as const;

export const easings = {
	ease: "cubic-bezier(0.4, 0, 0.2, 1)",
	easeIn: "cubic-bezier(0.4, 0, 1, 1)",
	easeOut: "cubic-bezier(0, 0, 0.2, 1)",
	easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
	linear: "linear",
} as const;

export const keyframes = {
	fadeIn: {
		from: { opacity: "0" },
		to: { opacity: "1" },
	},
	fadeOut: {
		from: { opacity: "1" },
		to: { opacity: "0" },
	},
	slideInFromTop: {
		from: { transform: "translateY(-100%)" },
		to: { transform: "translateY(0)" },
	},
	slideInFromBottom: {
		from: { transform: "translateY(100%)" },
		to: { transform: "translateY(0)" },
	},
	slideInFromLeft: {
		from: { transform: "translateX(-100%)" },
		to: { transform: "translateX(0)" },
	},
	slideInFromRight: {
		from: { transform: "translateX(100%)" },
		to: { transform: "translateX(0)" },
	},
	scaleIn: {
		from: { transform: "scale(0.95)", opacity: "0" },
		to: { transform: "scale(1)", opacity: "1" },
	},
	scaleOut: {
		from: { transform: "scale(1)", opacity: "1" },
		to: { transform: "scale(0.95)", opacity: "0" },
	},
} as const;
