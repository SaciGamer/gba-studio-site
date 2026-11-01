---
sidebar_position: 1
title: GBA Studio
description: Crie jogos para Game Boy Advance com um editor visual e a engine Butano.
---

# GBA Studio

O GBA Studio é um editor para Windows que permite criar jogos para Game Boy Advance com um fluxo visual. Cenas, atores, backgrounds, scripts, variáveis e áudio são editados na ferramenta e depois convertidos para C++ e compilados com [Butano](https://github.com/GValiente/butano).

Estas páginas descrevem o aplicativo desktop distribuído e seu fluxo de projeto. Instruções de manutenção do monorepo ficam em [Contribuindo](./contributing).

## Limites importantes

O alvo é o Game Boy Advance. Formatos de assets, tiles, paletas, eventos e comportamento de runtime são definidos pelo editor e pelo compilador atuais. Recursos não expostos pelo editor ou pelo compilador não devem ser considerados suportados.

## Caminho recomendado

1. [Instale a ferramenta](./installation).
2. Siga o tutorial de [primeiro projeto](./getting-started/first-project).
3. Consulte a [visão geral da engine](./concepts/engine-overview).
4. Compile e teste a ROM com o guia de build e release.

![Game World com navegação das cenas, canvas, ferramentas flutuantes, minimapa e estimativas de recursos](/img/screenshots/gba-studio/game-world-overview.png)

*O Game World combina a navegação do projeto com o espaço de trabalho da cena.*
