import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome({ message }: { message: string }) {
	return (
		<main className="flex items-center justify-center pt-16 pb-4">
			<div className="flex-1 flex flex-col items-center gap-16 min-h-0">
				<header className="flex flex-col items-center gap-9">
					<div className="w-[500px] max-w-[100vw] p-4">
						<p className={"bold text-8xl"}>
							HELLO :D
						</p>
					</div>
				</header>
				<div className="max-w-[300px] w-full space-y-6 px-4">
					<nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
						<p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
							HEY HI HELLO HI HEY :D
						</p>
						<ul>
							{resources.map(({ href, text, icon }) => (
								<li key={href}>
									<a
										className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
										href={href}
										target="_blank"
										rel="noreferrer"
									>
										{icon}
										{text}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</main>
	);
}

const resources = [
	{
		href: "/cobblemon",
		text: "Cobblemon Badge Picker !!!",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000"
				 stroke-linecap="round" stroke-linejoin="round" id="Pokeball--Streamline-Tabler" height="32" width="32"
				 className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
			>
				<desc>
					Pokeball Streamline Icon: https://streamlinehq.com
				</desc>
				<path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0" stroke-width="2"></path>
				<path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0" stroke-width="2"></path>
				<path d="M3 12h6" stroke-width="2"></path>
				<path d="M15 12h6" stroke-width="2"></path>
			</svg>
		),
	},
];
