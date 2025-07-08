import { NextResponse } from "next/server";
import { env } from "~/env";

export async function GET(request: Request) {
	// Allow access with a debug query parameter
	const url = new URL(request.url);
	const debug = url.searchParams.get("debug");

	if (env.NODE_ENV === "production" && debug !== "true") {
		return NextResponse.json(
			{ error: "Not available in production without debug=true" },
			{ status: 403 },
		);
	}

	return NextResponse.json({
		NODE_ENV: env.NODE_ENV,
		COMING_SOON_MODE: env.COMING_SOON_MODE,
		raw_env: process.env.COMING_SOON_MODE,
		all_env_keys: Object.keys(process.env).filter((key) =>
			key.includes("COMING"),
		),
		comparison: {
			env_value: env.COMING_SOON_MODE,
			is_string_true: env.COMING_SOON_MODE === "true",
			type: typeof env.COMING_SOON_MODE,
		},
	});
}
