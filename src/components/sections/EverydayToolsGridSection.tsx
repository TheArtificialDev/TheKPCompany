'use client';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tools = [
	{
		name: 'CalciVerse',
		desc: 'Scientific calculator',
		url: '/tools/calciverice',
		icon: (
			<svg
				className="w-8 h-8 text-electric-blue"
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
		name: 'MetaMorph',
		desc: 'File converter',
		url: '/tools/metamorph',
		icon: (
			<svg
				className="w-8 h-8 text-amber"
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
		name: 'PDF Alchemy',
		desc: 'PDF editor',
		url: '/tools/pdfalchemcy',
		icon: (
			<svg
				className="w-8 h-8 text-neon-green"
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
	{
		name: 'Originality',
		desc: 'Plagiarism checker',
		url: 'https://originality.thekp.in',
		icon: (
			<svg
				className="w-8 h-8 text-crimson"
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
		name: 'QR Artisan',
		desc: 'QR code generator',
		url: '/tools/qrartisan',
		icon: (
			<svg
				className="w-8 h-8 text-electric-lime"
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
		name: 'ChromaCapture',
		desc: 'Color extractor',
		url: '/tools/chromacapture',
		icon: (
			<svg
				className="w-8 h-8 text-electric-blue"
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
	{
		name: 'ScribeCanvas',
		desc: 'Rich text editor',
		url: '/tools/scribecanvas',
		icon: (
			<svg
				className="w-8 h-8 text-amber"
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
];

export default function EverydayToolsGridSection() {
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
				delay: i * 0.1
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
					Everyday Tools
				</motion.h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{tools.map((tool, index) => (
						<motion.div
							key={tool.name}
							className="flex flex-col items-center p-6 rounded-lg backdrop-blur-lg border border-white/20 shadow-md"
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
							<div className="mb-3">{tool.icon}</div>
							<h3 className="text-h4 font-medium mb-1 text-white">
								{tool.name}
							</h3>
							<p className="text-body text-light-gray mb-4 text-center">
								{tool.desc}
							</p>
							<Link
								href={tool.url}
								target={tool.url.startsWith('http') ? "_blank" : undefined}
								rel={tool.url.startsWith('http') ? "noopener noreferrer" : undefined}
								className="px-4 py-2 bg-electric-lime text-deep-space font-semibold rounded hover:bg-neon-green transition"
							>
								Open
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
