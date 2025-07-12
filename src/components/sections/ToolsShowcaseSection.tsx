'use client';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tools = [
	{
		name: 'Bookify',
		desc: 'Research smarter, write faster. Your AI-powered book writing assistant.',
		cta: 'Try Bookify',
		url: 'https://bookify.thekp.in',
		icon: (
			<svg
				className="w-10 h-10 text-electric-blue"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<rect x="4" y="4" width="16" height="16" rx="2" />
				<path d="M8 4v16M16 4v16" />
			</svg>
		),
	},
	{
		name: 'Fictional',
		desc: 'Build worlds, craft stories. AI fiction writing for limitless imagination.',
		cta: 'Try Fictional',
		url: 'https://fictional.thekp.in',
		icon: (
			<svg
				className="w-10 h-10 text-amber"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<path d="M12 20l9-5-9-5-9 5 9 5z" />
				<path d="M12 12V4" />
			</svg>
		),
	},
	{
		name: 'Student Assist',
		desc: 'Learn deeper, stress less. AI study assistant for smarter students.',
		cta: 'Try Student Assist',
		url: 'https://studentassist.thekp.in',
		icon: (
			<svg
				className="w-10 h-10 text-neon-green"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				viewBox="0 0 24 24"
			>
				<circle cx="12" cy="12" r="10" />
				<path d="M8 15h8M9 9h6" />
			</svg>
		),
	},
];

export default function ToolsShowcaseSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.3 });

	const titleVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { 
			opacity: 1, 
			y: 0, 
			transition: { 
				duration: 0.8, 
				ease: [0.22, 1, 0.36, 1] as const
			} 
		}
	};

	const cardVariants = {
		hidden: { 
			opacity: 0, 
			y: 80, 
			scale: 0.9,
			backgroundColor: "rgba(255, 255, 255, 0.1)" 
		},
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			scale: 1,
			backgroundColor: "rgba(255, 255, 255, 0.1)",
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1] as const,
				delay: i * 0.15
			}
		})
	};

	return (
		<section className="py-20 px-6" ref={ref}>
			<div className="max-w-6xl mx-auto">
				<motion.h2 
					className="text-h2 font-semibold text-center mb-16 text-white"
					variants={titleVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
				>
					Featured AI Tools
				</motion.h2>
				<div className="grid md:grid-cols-3 gap-8">
					{tools.map((tool, index) => (
						<motion.div
							key={tool.name}
							className="flex flex-col items-center p-8 rounded-lg backdrop-blur-lg border border-white/20 shadow-lg"
							variants={cardVariants}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							whileHover={{ 
								scale: 1.05, 
								backgroundColor: "rgba(255, 255, 255, 0.2)",
								transition: { duration: 0.3 }
							}}
							custom={index}
						>
							<div className="mb-4">{tool.icon}</div>
							<h3 className="text-h4 font-medium mb-2 text-white">
								{tool.name}
							</h3>
							<p className="text-body text-light-gray mb-6 text-center">
								{tool.desc}
							</p>
							<Link
								href={tool.url}
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-2 bg-electric-lime text-deep-space font-semibold rounded hover:bg-neon-green transition"
							>
								{tool.cta}
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
