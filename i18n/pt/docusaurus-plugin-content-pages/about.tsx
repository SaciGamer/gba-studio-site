import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About">
      <div style={{padding: '2rem'}}>
        <h1>Sobre o GBA Studio</h1> 
        <p>Olá, meu nome é Sáci</p> 
        <p>O GBA Studio nasceu da necessidade e do desejo de criar jogos para Game Boy Advance sem ter que criar estruturas de código infinitas. Isso permitiu que entusiastas e artistas, mesmo sem conhecimento de programação, criassem seus próprios jogos.</p> 
        <p>Criei jogos usando a biblioteca do Butano e vi que isso poderia ser usado para facilitar o desenvolvimento. Então inclua essa ferramente após uma game jam para realmente ter o projeto buildando arquivos reais.</p> 
        <p>Mal posso esperar para ver o que você vai fazer!</p>
      </div>
    </Layout>
  );
}
