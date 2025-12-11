import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "SUPER COOL COBBLEMON PACK" },
		{ name: "description", content: "It's so cool I swear - Me" },
	];
}

export function loader({ context }: Route.LoaderArgs) {
	return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return <Welcome message={loaderData.message} />;
}
