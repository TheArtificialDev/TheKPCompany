import Link from 'next/link';

const tools = [
	{
		name: 'CalciVerse',
		desc: 'Scientific calculator',
		url: 'https://calciverice.thekp.in',
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
		url: 'https://metamorph.thekp.in',
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
		url: 'https://pdfalchemcy.thekp.in',
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
		url: 'https://qrartisan.thekp.in',
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
		url: 'https://chromacapture.thekp.in',
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
		url: 'https://scribecanvas.thekp.in',
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
	return (
		<section className="py-20 px-6">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-h2 font-semibold text-center mb-16 text-white">
					Everyday Tools
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{tools.map((tool) => (
						<div
							key={tool.name}
							className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-md"
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
								target="_blank"
								rel="noopener noreferrer"
								className="px-4 py-2 bg-electric-lime text-deep-space font-semibold rounded hover:bg-neon-green transition"
							>
								Open
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
