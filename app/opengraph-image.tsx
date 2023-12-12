import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Alt Image Text';
export const size = {
  width: 1200,
  height: 630,
};
// https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**MDX**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fnextjs.org%2Fstatic%2Ffavicon%2Ffavicon-32x32.png
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  // Font
  const interSemiBold = fetch(
    new URL('../public/assets/fonts/ticketing.woff2', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        yash godara
      </div>
    ),
    // ImageResponse options
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
