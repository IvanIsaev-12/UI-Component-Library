"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	Button,
	Badge,
	Avatar,
	Divider,
} from "@ui-component-lib/ui";

export default function CVPage() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const skills = [
		{
			category: "Frontend",
			items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
			icon: "💻",
		},
		{
			category: "Backend",
			items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
			icon: "⚙️",
		},
		{
			category: "Tools",
			items: ["Git", "Docker", "Figma", "VS Code"],
			icon: "🛠️",
		},
	];

	const experience = [
		{
			title: "Senior Frontend Developer",
			company: "Tech Corp",
			period: "2022 - Present",
			description: "Leading frontend development for modern web applications",
			achievements: [
				"Improved app performance by 40%",
				"Led team of 5 developers",
				"Implemented CI/CD pipeline",
			],
		},
		{
			title: "Full Stack Developer",
			company: "StartUp Inc",
			period: "2020 - 2022",
			description: "Built scalable web applications using React and Node.js",
			achievements: [
				"Built 3 major products from scratch",
				"Reduced API response time by 60%",
				"Mentored junior developers",
			],
		},
	];

	const projects = [
		{
			name: "E-Commerce Platform",
			description: "Full-stack e-commerce solution with React and Node.js",
			tech: ["React", "Node.js", "PostgreSQL"],
			link: "#",
		},
		{
			name: "Social Media Dashboard",
			description: "Analytics dashboard for social media management",
			tech: ["Next.js", "TypeScript", "Tailwind"],
			link: "#",
		},
		{
			name: "Task Management App",
			description: "Collaborative task management with real-time updates",
			tech: ["React", "Firebase", "Material-UI"],
			link: "#",
		},
	];

	return (
		<div className="min-h-screen bg-background transition-colors duration-300">
			{/* Theme Toggle - Fixed Top Right */}
			{mounted && (
				<button
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					className="fixed top-6 right-6 z-50 p-3 rounded-full bg-background-muted border border-border hover:bg-background-subtle transition-all shadow-lg"
					aria-label="Toggle theme"
				>
					{theme === "dark" ? (
						<svg
							className="w-5 h-5 text-foreground"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					) : (
						<svg
							className="w-5 h-5 text-foreground"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					)}
				</button>
			)}
			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-24 overflow-hidden">
				{/* Background decoration */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
					<div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
				</div>

				<div className="relative max-w-4xl mx-auto px-6 text-center">
					<div className="flex justify-center mb-6 animate-in fade-in slide-in-from-top duration-500">
						<Avatar
							fallback="II"
							size="lg"
							className="ring-4 ring-white/30 shadow-2xl"
							alt=""
						/>
					</div>
					<h1 className="text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom duration-500 delay-100">
						Ivan Isaev
					</h1>
					<p className="text-2xl mb-3 text-primary-100 animate-in fade-in slide-in-from-bottom duration-500 delay-200">
						Full Stack Developer
					</p>
					<p className="text-primary-50 mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-500 delay-300">
						Passionate about creating beautiful, accessible, and performant web
						applications with modern technologies.
					</p>
					<div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-500 delay-500">
						<Button variant="secondary" size="lg" className="">
							<svg
								className="w-5 h-5 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
								/>
							</svg>
							Download CV
						</Button>
						<Button
							variant="secondary"
							size="lg"
							className=""
						>
							<svg
								className="w-5 h-5 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							Contact Me
						</Button>
					</div>
				</div>
			</section>

			<div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
				{/* About Section */}
				<section>
					<h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
						<span className="text-4xl">👋</span>
						About Me
					</h2>
					<Card>
						<CardContent>
							<p className="text-foreground-subtle leading-relaxed text-base">
								I'm a full-stack developer with 5+ years of experience building
								modern web applications. I specialize in React, TypeScript, and
								Node.js, with a passion for creating intuitive user experiences
								and scalable architectures. I love learning new technologies and
								sharing knowledge with the community.
							</p>
						</CardContent>
					</Card>
				</section>

				{/* Skills Section */}
				<section className="animate-in fade-in slide-in-from-bottom duration-500 delay-100">
					<h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
						<span className="text-4xl">🚀</span>
						Skills
					</h2>
					<div className="grid md:grid-cols-3 gap-6">
						{skills.map((skillGroup, index) => (
							<Card
								key={skillGroup.category}
								className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
								style={{ animationDelay: `${index * 100}ms` }}
							>
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<span className="text-2xl">{skillGroup.icon}</span>
										{skillGroup.category}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										{skillGroup.items.map((skill) => (
											<Badge
												key={skill}
												variant="neutral"
												className="hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors cursor-default"
											>
												{skill}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Experience Section */}
				<section className="animate-in fade-in slide-in-from-bottom duration-500 delay-200">
					<h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
						<span className="text-4xl">💼</span>
						Experience
					</h2>
					<div className="space-y-4">
						{experience.map((job, index) => (
							<Card
								key={index}
								className="hover:shadow-lg transition-all duration-300"
							>
								<CardHeader>
									<div className="flex items-start justify-between gap-4">
										<div className="flex-1">
											<CardTitle className="text-xl">{job.title}</CardTitle>
											<p className="text-sm text-foreground-subtle mt-1 font-medium">
												{job.company}
											</p>
										</div>
										<Badge variant="neutral" className="shrink-0">
											{job.period}
										</Badge>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-foreground-subtle mb-3">
										{job.description}
									</p>
									<ul className="space-y-2">
										{job.achievements.map((achievement, i) => (
											<li
												key={i}
												className="flex items-start gap-2 text-sm text-foreground-muted"
											>
												<span className="text-primary-500 mt-1">•</span>
												{achievement}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Projects Section */}
				<section className="animate-in fade-in slide-in-from-bottom duration-500 delay-300">
					<h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
						<span className="text-4xl">🎯</span>
						Featured Projects
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						{projects.map((project, index) => (
							<Card
								key={index}
								className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
							>
								<CardHeader>
									<CardTitle className="flex items-center justify-between">
										{project.name}
										<svg
											className="w-5 h-5 text-foreground-muted group-hover:text-primary-500 group-hover:translate-x-1 transition-all"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M14 5l7 7m0 0l-7 7m7-7H3"
											/>
										</svg>
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-foreground-subtle mb-4 text-sm">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech) => (
											<Badge key={tech} variant="neutral" className="text-xs">
												{tech}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Contact Section */}
				<section className="animate-in fade-in slide-in-from-bottom duration-500 delay-400">
					<h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
						<span className="text-4xl">📬</span>
						Get In Touch
					</h2>
					<Card className="hover:shadow-lg transition-shadow duration-300">
						<CardContent className="pt-6">
							<p className="text-foreground-subtle mb-6 text-center">
								I'm always open to discussing new projects, creative ideas, or
								opportunities.
							</p>
							<Divider className="my-6" />
							<div className="grid md:grid-cols-3 gap-6 text-center">
								<div className="group">
									<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 mb-3 group-hover:scale-110 transition-transform">
										<svg
											className="w-6 h-6 text-primary-600 dark:text-primary-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<p className="text-sm text-foreground-muted mb-1">Email</p>
									<p className="text-foreground font-medium">
										ivan.a.isaev@gmail.com
									</p>
								</div>
								<div className="group">
									<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 mb-3 group-hover:scale-110 transition-transform">
										<svg
											className="w-6 h-6 text-primary-600 dark:text-primary-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<p className="text-sm text-foreground-muted mb-1">Phone</p>
									<p className="text-foreground font-medium">
										+36 11 192 1234
									</p>
								</div>
								<div className="group">
									<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 mb-3 group-hover:scale-110 transition-transform">
										<svg
											className="w-6 h-6 text-primary-600 dark:text-primary-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
											/>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									</div>
									<p className="text-sm text-foreground-muted mb-1">Location</p>
									<p className="text-foreground font-medium">
										Pécs, Hungary
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</section>
			</div>

			{/* Footer */}
			<footer className="bg-background-muted py-8 mt-16 border-t border-border">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<p className="text-sm text-foreground-subtle">
						© 2025-2026 Ivan Isaev Built with React, Next.js, and UI Component
						Library.
					</p>
					<div className="flex justify-center gap-4 mt-4">
						<a
							href="#"
							className="text-foreground-muted hover:text-primary-500 transition-colors"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
						<a
							href="#"
							className="text-foreground-muted hover:text-primary-500 transition-colors"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</a>
						<a
							href="#"
							className="text-foreground-muted hover:text-primary-500 transition-colors"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
							</svg>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
