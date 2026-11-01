---
sidebar_position: 2
title: Recorrido por el editor
description: Conoce los paneles principales y los editores de GBA Studio.
---

# Recorrido por el editor

## Barra superior

El selector de editores alterna entre **Game World**, **Sprites**, **Images**, **Music**, **Sounds**, **Palettes**, **Dialogue Review** y **Settings**. La barra también ofrece acciones del proyecto como guardar, Play, build y búsqueda. La búsqueda puede abrir un recurso directamente.

## Navegación y Game World

La navegación de Game World tiene cuatro secciones redimensionables: **Scenes**, **Prefabs**, **Scripts** y **Variables**. Expande una sección para elegir una escena, definición reutilizable, script o variable. Seleccionar un objeto actualiza el inspector de la derecha. Arrastra los divisores para cambiar el espacio de cada lista.

El viewport central es el espacio de trabajo para fondos, actores, triggers y herramientas de tiles/layers. Los controles flotantes cambian la herramienta y vuelven a la escena seleccionada. El HUD inferior muestra la posición del puntero o tile, el zoom y el ajuste; el minimapa ayuda a navegar, y el panel de recursos estima el uso gráfico. Estos elementos acompañan al viewport cuando cambias el tamaño de los paneles.

![Game World con navegación, canvas de escena, minimapa y estimación de ROM](/img/screenshots/gba-studio/game-world-overview.png)

## Inspector y editores de recursos

El panel derecho muestra las propiedades de la escena, actor, trigger, layer o recurso seleccionado. Paletas, imágenes, música, sonidos y sprites tienen editores propios. Sprites muestran estados de animación, tiles de origen, frames compuestos y ajustes; música y sonidos ofrecen controles según el formato. Consulta [Animación de sprites](../guides/sprite-animation), [Editor de música](../guides/music-editor) y [Efectos de sonido](../guides/sound-effects).

Dialogue Review es una tabla de ancho completo que reúne comandos de diálogo, permite buscar y abrir su contexto. Consulta [Diálogo y opciones](../guides/dialogue).

Los divisores permiten redimensionar los paneles. El workspace restaura su distribución guardada al iniciar. Consulta [Organizar eventos](../guides/event-organization) e [Interfaz y fuentes](../guides/ui-and-fonts).

## Ajustes y controles

Settings > Controls contiene Input Map por tipo de escena y la tabla Input Groups. Gameplay, Menu e Interaction son editables; All incluye todos los botones. Consulta [Controles](../guides/controls).

La vista integrada usa EmulatorJS/mGBA. Settings > Demo Configuration configura teclado, controlador, filtros, menú e indicadores FPS/CPU. Los indicadores aparecen tras la primera medida; Runtime Monitor muestra los recursos instrumentados.

Los eventos compartidos de prefabs están bloqueados si la instancia no permite editar desde la escena. Scripts y variables borrados no aparecen en la jerarquía ni en los selectores.
