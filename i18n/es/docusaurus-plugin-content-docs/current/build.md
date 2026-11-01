---
sidebar_position: 3
title: Compilar y ejecutar
description: Compila una ROM y prueba el proyecto en el emulador integrado.
---

# Compilar y ejecutar

**Play** compila el proyecto y abre el emulador integrado EmulatorJS/mGBA. **Build** produce los archivos generados y la ROM con su log. Los recursos del proyecto y `assets/` son fuentes; C++, headers y ROM son resultados derivados.

Antes de compilar, elige la escena inicial, revisa las referencias y guarda. Corrige el primer error real del log en las fuentes. Settings > Demo Configuration configura teclado, controlador, filtros, menú e indicadores FPS/CPU.

Prueba escenas, colisiones, interacciones, confirmación de diálogo, audio y persistencia. Cargar variables conserva el mundo; Game Data Load restaura la escena y ejecuta sus acciones On Load. Reinicia la ROM para comprobar los datos persistentes.

Un mGBA externo es opcional para una prueba independiente. Conserva el proyecto completo junto a la ROM distribuida. Consulta [Build de ROM](./build-and-release/build) y [Guardar y cargar](./guides/save-and-load).
