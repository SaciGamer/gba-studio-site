---
sidebar_position: 5
title: Cámara y fades
description: Mueve la cámara, sigue actores y configura fades.
---

# Cámara y fades

**Pan Camera** y **Camera: Move To** reciben X e Y con píxeles o tiles de 16 píxeles elegidos por eje. El movimiento animado bloquea el script hasta terminar; la velocidad va de 0,0625 a 16. El selector limita el movimiento de cámara en Logo y Point Click.

**Camera: Follow Actor** selecciona jugador, Self o un actor actual. Configura los ejes, la zona muerta, los límites de escena y la persistencia entre escenas. El preview muestra la región seguida. **Stop Camera Follow** finaliza el seguimiento. Sin persistencia, el comportamiento pertenece a la escena actual; al persistir, verifica que el objetivo exista en el destino.

Un preview hijo tiene prioridad mientras sus controles están bajo el cursor o enfocados, incluso después de desplazar la lista. Al salir, vuelve el preview correspondiente del padre.

**Camera: Shake** admite 1-120 frames y amplitud 1-16. **Fade Options** elige el color; **Fade In** y **Fade Out** admiten velocidad 1-6 y bloquean hasta concluir. Fade cambia la visibilidad de pantalla, no la posición del actor.

Consulta [Escenas y layers](./scenes-and-layers), [Referencia de eventos](../reference/events) y [Emulador](../build-and-release/emulator).
