---
sidebar_position: 2
title: Instalação
description: Instale o GBA Studio e prepare o ambiente Windows.
---

# Instalação

## Requisitos

Você precisa de uma instalação do GBA Studio, uma pasta de projeto com permissão de leitura e escrita e os arquivos do emulador integrado EmulatorJS/mGBA. Um [mGBA](https://mgba.io/) externo é opcional para testes independentes. O compilador, Makefile e ferramentas Butano devem ser os fornecidos pela mesma distribuição.

A versão do pacote no repositório é `0.5.0`; uma versão distribuída pode ser diferente. Não misture toolchains de releases diferentes. Node/Yarn são requisitos para mantenedores, não para quem usa um pacote pronto.

## Primeiro lançamento

1. Instale ou extraia o GBA Studio em uma pasta permitida pelo Windows.
2. Abra o executável.
3. Crie um projeto ou abra um arquivo `.gbaproj`.
4. Confirme que a pasta do projeto pode ser gravada.
5. Use **Play** depois de criar uma cena válida e importar os assets.

Se o aplicativo não salvar, mova o projeto para uma pasta gravável e verifique o antivírus. Se a ROM não for gerada, consulte primeiro o log de build.
