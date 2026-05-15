import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About">
      <div style={{padding: '2rem'}}>
        <h1>About GBA Studio</h1>
        <p>Hi, my name is Sáci</p>
        <p>GBA Studio began out of the need and desire to create Game Boy Advance games without having to create endless code structures. This allows enthusiasts and artists, even those without programming knowledge, to create their own games.</p>
        <p>I created games using the Butano library and saw that it could be used to facilitate development. So I included this tool after a game jam to actually have the project building real files.</p>
        <p>I can't wait to see what you make!</p>
      </div>
    </Layout>
  );
}
