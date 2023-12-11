import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1 className='text-3xl text-red-600'>Next.js</h1>
      <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
    </>
  );
}
