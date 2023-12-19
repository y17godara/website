import axios from "axios";

export async function GET() {
  try {
    const github_stats = await axios.get(
      "https://github-readme-streak-stats.herokuapp.com?user=y17godara&date_format=j%20M%5B%20Y%5D&type=json&hide_total_contributions=true&hide_current_streak=true&hide_longest_streak=true"
    );

    const response = {
      github: github_stats.data,
    };

    return new Response(JSON.stringify(response), {
      headers: { "content-type": "application/json" },
    });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
