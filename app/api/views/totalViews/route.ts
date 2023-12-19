import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const total_views = await prisma.post.aggregate({
      _sum: {
        views: true,
      },
    });
    return Response.json({ total_views: total_views._sum.views });
  } catch (error: any) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
}
