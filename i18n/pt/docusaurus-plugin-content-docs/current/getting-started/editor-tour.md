---
sidebar_position: 2
title: Tour pelo editor
description: Conheça os painéis principais e os editores do GBA Studio.
---

# Tour pelo editor

## Barra superior

O seletor de editores alterna entre **Game World**, **Sprites**, **Images**, **Music**, **Sounds**, **Palettes**, **Dialogue Review** e **Settings**. A barra também oferece ações do projeto, como salvar, Play, build e busca. A busca de recursos pode abrir diretamente um item correspondente.

## Navegação e Game World

A navegação do Game World possui quatro seções redimensionáveis: **Scenes**, **Prefabs**, **Scripts** e **Variables**. Expanda uma seção para escolher uma cena, definição reutilizável, script ou variável. A seleção de um objeto da cena atualiza o inspetor à direita. Arraste os divisores para ajustar o espaço de cada lista.

O viewport central é o espaço de trabalho para backgrounds, atores, triggers e ferramentas de tiles/layers. Os controles flutuantes trocam a ferramenta ativa e retornam à cena selecionada. O HUD inferior mostra posição do ponteiro ou tile, zoom e encaixe; o minimapa ajuda na navegação, e o painel de recursos estima o uso gráfico. Esses auxiliares acompanham o viewport ao redimensionar os painéis.

![Game World com navegação, canvas da cena, minimapa e estimativa de ROM](/img/screenshots/gba-studio/game-world-overview.png)

## Inspetor e editores de recursos

O painel direito exibe propriedades da cena, ator, trigger, layer ou recurso selecionado. Paletas, imagens, música, sons e sprites têm editores próprios. Sprites apresentam estados de animação, tiles de origem, frames compostos e configurações; música e sons oferecem controles conforme o formato. Veja [Animação de sprites](../guides/sprite-animation), [Editor de música](../guides/music-editor) e [Efeitos sonoros](../guides/sound-effects).

Dialogue Review é uma tabela de largura total que reúne comandos de diálogo, permite pesquisar e abrir o contexto de origem. Consulte [Diálogos e escolhas](../guides/dialogue).

Divisores permitem redimensionar os painéis. O workspace restaura seu layout salvo na inicialização. Veja [Organizar eventos](../guides/event-organization) para a edição de eventos e [Interface e fontes](../guides/ui-and-fonts) para os recursos visuais.

## Configurações e controles

Settings > Controls possui Input Map por tipo de cena e uma tabela de Input Groups ao lado. Gameplay, Menu e Interaction são editáveis; All inclui todos os botões. Consulte [Controles](../guides/controls).

A prévia integrada usa EmulatorJS/mGBA. Settings > Demo Configuration configura teclado, controle, filtros, menu e indicadores FPS/CPU. Os indicadores aparecem depois da primeira medição; o Runtime Monitor mostra os recursos instrumentados.

Eventos compartilhados de prefabs ficam bloqueados quando a instância não permite edição pela cena. Scripts e variáveis deletados não aparecem na hierarquia nem nos seletores.
