import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import React, { useEffect } from "react";

const preview: Preview = {
	parameters: {
		a11y: { manual: false },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		layout: "centered",
		backgrounds: {
			disable: true,
		},
		docs: {
			theme: undefined,
		},
	},
	decorators: [
		withThemeByClassName({
			themes: {
				light: "",
				dark: "dark",
			},
			defaultTheme: "light",
		}),
		(Story, context) => {
			const viewMode = context.viewMode;
			const isDocsMode = viewMode === "docs";
			const theme = context.globals?.theme || "light";
			const isDark = theme === "dark" && !isDocsMode;

			useEffect(() => {
				const htmlElement = document.documentElement;
				const bodyElement = document.body;

				if (isDark) {
					htmlElement.classList.add("dark");
					bodyElement.classList.add("dark");
				} else {
					htmlElement.classList.remove("dark");
					bodyElement.classList.remove("dark");
				}
			}, [isDark]);

			if (isDocsMode) {
				return <Story />;
			}

			return (
				<div
					className={
						isDark
							? "dark bg-neutral-900 text-neutral-50 flex items-center justify-center min-h-screen"
							: "bg-white text-neutral-900 flex items-center justify-center min-h-screen"
					}
				>
					<Story />
				</div>
			);
		},
	],
};

export default preview;
