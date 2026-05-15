import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About">
      <div style={{padding: '2rem'}}>
        <h1>Sobre o GBA Studio</h1>
        <p>Olá, meu nome é Sáci</p>
        <p>O GBA Studio surgiu da necessidade e do desejo de criar jogos para Game Boy Advance sem ter que criar estruturas de código intermináveis. Isso permite que entusiastas e artistas, mesmo aqueles sem conhecimento de programação, criem seus próprios jogos.</p>
        <p>Eu criei jogos usando a biblioteca Butano e percebi que ela poderia ser usada para facilitar o desenvolvimento. Então, incluí essa ferramenta após uma game jam para que o projeto realmente gerasse arquivos reais.</p>
        <p>Mal posso esperar para ver o que vocês vão criar!</p>
      </div>
    </Layout>
  );
}
