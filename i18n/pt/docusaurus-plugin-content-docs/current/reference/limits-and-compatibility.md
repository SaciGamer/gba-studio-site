---
sidebar_position: 5
title: Limites e compatibilidade
description: Consulte os contratos e os limites de recursos do GBA.
---

# Limites e compatibilidade

Consulte a [referência de eventos](./events), os controles dos assets e os erros do compilador para conferir campos e intervalos. Os eventos usam schema `version: 1`. Um código interno do catálogo não significa que o seletor o oferece em todo contexto de cena.

| Recurso | Limite ou comportamento |
| --- | --- |
| Tela | 240 x 160 pixels; tiles de coordenadas de eventos medem 16 pixels. |
| Sprites | 128 entradas de hardware compartilhadas entre actors, composições, UI e diálogos. |
| Backgrounds | Até quatro layers, sujeitos aos formatos e combinações da cena. |
| Paletas | Gráficos indexados e bancos de 16 cores precisam caber nos recursos do GBA. |
| Efeitos sonoros | Quatro simultâneos; prioridade maior tem precedência entre efeitos. |
| Texto | 255 bytes UTF-8 depois da expansão das variáveis; `${...}` não conta, mas o valor conta. |
| Save | Oito slots compartilhados de 4 KiB; salvar substitui o slot. |
| Scripts | Até 20 parâmetros tipados e 16 instruções por atualização. |
| RAM | 32 KiB de IWRAM e 256 KiB de EWRAM, compartilhados com pilha e alocações. |

As tabelas de actors são dimensionadas pelo projeto; não existe um limite universal de 16 actors. Um actor composto pode usar vários sprites de hardware. Reserve espaço para UI, fontes e efeitos exibidos durante a partida.

A verificação do ELF exige margens estáticas de pelo menos 8 KiB na IWRAM e 32 KiB na EWRAM. Elas não medem o pico de pilha ou heap. Use o [monitor](../build-and-release/runtime-monitor) e teste a ROM. Controles e efeitos de áudio podem depender do formato e do caminho de build; confira os avisos dos editores.
