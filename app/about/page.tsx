import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About',
};

export default async function About() {
  return (
    <>
      <h1>About</h1>
      <p>This is the about page</p>
    </>
  );
}
