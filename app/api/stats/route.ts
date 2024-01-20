import { NextRequest } from "next/server";
import { getStars, getContributions, getViews } from "@/actions/get-stats";

export async function GET(req: NextRequest) {
  const [stars, contributions, views] = await Promise.all([
    getStars(),
    getContributions(),
    getViews(),
  ]);

  return new Response(
    JSON.stringify({
      Stars: stars,
      Contributions: contributions,
      Views: views,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
