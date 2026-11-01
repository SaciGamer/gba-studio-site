---
sidebar_position: 15
title: Guardar y cargar datos
description: Guarda la partida completa o variables seleccionadas y configura las acciones de cada operación.
---

# Guardar y cargar datos

Los eventos de **Save Data** permiten guardar progreso completo o valores independientes.

| Evento | Contenido | Escena, jugador y actores |
| --- | --- | --- |
| **Game Data Save** | Variables globales y estado de escena, jugador, actores y cámara. | Incluidos en el snapshot. |
| **Game Data Load** | Restaura un snapshot completo. | Restaurados antes de On Load. |
| **Guardar variables** | Una, varias o todas las variables globales. | Sin cambios. |
| **Cargar variables** | Valores seleccionados o todos los globales guardados. | Sin cambios. |
| **Game Data Remove** | Borra el slot, incluido un snapshot de variables. | Sin cambios. |

## Slots y acciones

Los ocho slots se muestran como **Slot 1** a **Slot 8** y se serializan de `0` a `7`. Son compartidos por todos los eventos de guardado. Guardar reemplaza el contenido del slot; no combina snapshots. Cada slot tiene 4 KiB para cabecera y datos. Si se excede la capacidad, la operación falla sin escribir datos truncados.

Game Data usa inicialmente Slot 1; los eventos de variables usan Slot 8. Usa slots distintos para un checkpoint y un contador permanente. Game Data Load no acepta un snapshot solo de variables. Cargar variables también puede leer valores de una partida completa sin restaurar el mundo.

**Game Data Save contiene On Save; Game Data Load contiene On Load.** Las acciones se ejecutan automáticamente después de la operación correcta y pueden incluir Wait. La pestaña seleccionada solo cambia lo que se edita; no elige una rama durante el juego. No se necesita un evento On Load separado. Después, continúa la secuencia posterior al evento padre.

Haz los cambios que deben guardarse antes de Game Data Save. On Save se ejecuta después de escribir el snapshot. Una operación fallida omite sus acciones de éxito. Game Data Load restaura la escena sin repetir su inicialización normal: configura en On Load la reconstrucción del HUD, música y demás acciones de restauración.

## Contador de muertes independiente

Crea una variable global Number `muertes`, inicialmente `0`.

En Game Over, suma `1`, ejecuta **Guardar variables**, elige Slot 8 y selecciona únicamente `muertes`. Después cambia a Title. En Title o al iniciar el juego, ejecuta **Cargar variables** con el mismo slot y variable; luego muestra `Muertes: ${muertes}` con Set UI Text.

La carga de variables conserva la escena y los valores no seleccionados. Si no hay datos compatibles, no cambia los valores actuales; utiliza defaults adecuados para la primera partida. Si cargar un checkpoint restaura un contador anterior, vuelve a cargar el contador permanente en On Load antes de reconstruir el HUD.

## Elegir variables

Activa **Todas las variables globales** o utiliza la selección múltiple. Los parámetros de scripts no son variables globales de guardado. Cargar todos los valores guardados conserva los globales ausentes del snapshot; no equivale a Reset All Variables. Se admiten números, booleanos y strings. Selecciones inválidas, tipos incompatibles y exceso de capacidad se reportan sin reiniciar valores ajenos a la operación.

Prueba guardar, cargar, borrar y reiniciar la ROM. Consulta [Variables y condiciones](./variables-and-conditions), [UI y fuentes](./ui-and-fonts) y la [Referencia de eventos](../reference/events).
