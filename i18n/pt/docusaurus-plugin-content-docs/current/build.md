---
sidebar_position: 3
title: Compilar e executar
description: Compile a ROM e teste o projeto no emulador integrado.
---

# Compilar e executar

**Play** compila o projeto e abre o emulador integrado EmulatorJS/mGBA. **Build** produz os arquivos gerados e a ROM, com o resultado apresentado no log. Os recursos do projeto e `assets/` são as fontes; C++, headers e ROMs gerados são derivados.

Antes de compilar, escolha a cena inicial, confira as referências dos recursos e salve o projeto. Corrija o primeiro erro real do log em vez de editar C++ gerado. As opções do emulador ficam em Settings > Demo Configuration: teclado, controle, filtros, menu e indicadores FPS/CPU.

Teste cenas, colisões, interações, confirmação de diálogo, áudio e persistência. Salvar e carregar variáveis não restaura o mundo; Game Data Load restaura a cena salva e executa suas ações On Load. Reinicie a ROM para conferir se os dados persistem.

Um mGBA externo é opcional para uma verificação independente. Preserve o projeto completo junto da ROM distribuída. Veja [Build da ROM](./build-and-release/build) e [Save e load](./guides/save-and-load).
