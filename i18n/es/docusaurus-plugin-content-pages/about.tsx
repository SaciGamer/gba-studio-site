import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About">
      <div style={{padding: '2rem'}}>
        <h1>Acerca de GBA Studio</h1> 
        <p>Hola, mi nombre es Sáci</p> 
        <p>GBA Studio nació de la necesidad y el deseo de crear juegos de Game Boy Advance sin tener que crear infinitas estructuras de código. Esto permitió a entusiastas y artistas, incluso sin conocimientos de programación, crear sus propios juegos.</p> 
        <p>Criei juegos usando una biblioteca do Butano y vi que isso poderia ser usado para facilitar o desenvolvimento. Então incluir essa ferramente após uma game jam para realmente ter o proyecto construyendo arquivos reales.</p> 
        <p>¡No puedo esperar a ver lo que haces!</p>
      </div>
    </Layout>
  );
}
