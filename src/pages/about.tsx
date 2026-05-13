import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About">
      <div style={{padding: '2rem'}}>
        <h1>About GBA Studio</h1>
        <p>Hi, my name is Sáci</p>
        <p>GBA Studio began out of the need and desire to create Game Boy Advance games without having to create endless code structures. This allowed enthusiasts and artists, even without programming knowledge, to create their own games.</p>
        <p>Criei jogos usando a biblioteca do Butano e vi que isso poderia ser usado para facilitar o desenvolvimento. Então incluir essa ferramente após uma game jam para realemente ter o projeto buildando arquivos reais.</p>
        <p>I can't wait to see what you make!</p>
      </div>
    </Layout>
  );
}
