import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const slug = searchParams.get("slug");

    if (!slug) {
      return new Response("No slug provided", { status: 400 });
    }

    const likesCount = await prisma.post.findUnique({
      where: {
        slug: slug as string,
      },
      select: {
        love: true,
      },
    });

    return new Response(JSON.stringify({ Likes: likesCount }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const slug = searchParams.get("slug");

    if (!slug) {
      return new Response("No slug provided", { status: 400 });
    }

    let loveCount = 0;

    if (process.env.NODE_ENV !== "development") {
      // Increment the view count in production
      const post = await prisma.post.findUnique({
        where: {
          slug: slug as string,
        },
      });

      if (!post) {
        const newPost = await prisma.post.create({
          data: {
            slug: slug as string,
            love: 1,
          },
        });
        loveCount = newPost.love;
      } else {
        const updatedPost = await prisma.post.update({
          where: {
            id: post.id,
          },
          data: {
            love: post.love + 1,
          },
        });
        loveCount = updatedPost.love;
      }
    } else {
      // Get view count without incrementing in local environment
      const post = await prisma.post.findUnique({
        where: {
          slug: slug as string,
        },
      });

      if (post) {
        loveCount = post.love;
      }
    }

    return new Response(JSON.stringify({ Likes: loveCount }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
