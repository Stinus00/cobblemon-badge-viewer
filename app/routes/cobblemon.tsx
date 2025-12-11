import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import CobblemonPage from "~/pages/cobblemonPage";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export function loader({ context }: Route.LoaderArgs) {
	return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home() {
	return <CobblemonPage/>;
}
