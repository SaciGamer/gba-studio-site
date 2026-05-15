import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About">
      <div style={{padding: '2rem'}}>
        <h1>Acerca de GBA Studio</h1>
        <p>Hola, me llamo Sáci</p>
        <p>GBA Studio surgió de la necesidad y el deseo de crear juegos para Game Boy Advance sin tener que crear interminables estructuras de código. Esto permite a aficionados y artistas, incluso a aquellos sin conocimientos de programación, crear sus propios juegos.</p>
        <p>Creé juegos usando la librería Butano y vi que podía usarse para facilitar el desarrollo. Así que incluí esta herramienta después de una game jam para que el proyecto generara archivos reales.</p>
        <p>¡Tengo muchas ganas de ver lo que creáis!</p>
      </div>
    </Layout>
  );
}
