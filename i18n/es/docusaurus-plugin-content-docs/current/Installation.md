---
sidebar_position: 2
title: Instalación
description: Instala GBA Studio y prepara el entorno de Windows.
---

# Instalación

## Requisitos

Necesitas GBA Studio, una carpeta de proyecto con permisos de lectura y escritura y los archivos del emulador integrado EmulatorJS/mGBA. Un [mGBA](https://mgba.io/) externo es opcional para pruebas independientes. El compilador, Makefile y herramientas Butano deben pertenecer a la misma distribución.

La versión del paquete del repositorio es `0.5.0`; una distribución publicada puede ser diferente. No mezcles toolchains de distintas versiones. Node/Yarn son requisitos para mantenedores, no para usuarios de un paquete preparado.

## Primer inicio

1. Instala o extrae GBA Studio en una carpeta permitida por Windows.
2. Abre el ejecutable.
3. Crea un proyecto o abre un archivo `.gbaproj`.
4. Confirma que la carpeta del proyecto permite escritura.
5. Usa **Play** después de crear una escena válida e importar los assets.

Si la aplicación no puede guardar, mueve el proyecto a una carpeta escribible y revisa el antivirus. Si no se genera la ROM, consulta primero el log de build.
