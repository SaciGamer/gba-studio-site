---
sidebar_position: 5
title: Límites y compatibilidad
description: Consulta los contratos actuales y los recursos disponibles en GBA.
---

# Límites y compatibilidad

Consulta la [referencia de eventos](./events), los controles de assets y los errores del compilador para los campos y rangos exactos. Los eventos usan schema `version: 1`. Un código interno del catálogo no implica que el selector lo ofrezca en todos los contextos.

| Recurso | Límite o comportamiento |
| --- | --- |
| Pantalla | 240 x 160 píxeles; los tiles de coordenadas de eventos miden 16 píxeles. |
| Sprites | 128 entradas compartidas entre actores, composiciones, UI y diálogos. |
| Fondos | Hasta cuatro layers, sujetos a los formatos de la escena. |
| Paletas | Gráficos indexados y bancos de 16 colores deben caber en los recursos del GBA. |
| Sonidos | Cuatro efectos simultáneos; un número mayor indica prioridad mayor entre efectos. |
| Texto | 255 bytes UTF-8 después de expandir variables; `${...}` no cuenta, su valor sí. |
| Guardado | Ocho slots compartidos de 4 KiB; guardar reemplaza el slot. |
| Scripts | Hasta 20 parámetros tipados y 16 instrucciones por actualización. |
| RAM | 32 KiB IWRAM y 256 KiB EWRAM, compartidos con la pila y las asignaciones. |

Las tablas de actores se dimensionan por proyecto; no hay un límite universal de 16 actores. Una composición puede consumir varios sprites. Reserva recursos para UI, fuentes y efectos durante la partida.

La verificación ELF requiere al menos 8 KiB de margen estático en IWRAM y 32 KiB en EWRAM. No mide el pico de pila o heap. Usa el [monitor](../build-and-release/runtime-monitor) y prueba la ROM. Los controles de música y efectos pueden depender del formato y del proceso de build; revisa los avisos del editor.
