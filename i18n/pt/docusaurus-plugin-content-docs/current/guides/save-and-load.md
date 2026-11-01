---
sidebar_position: 15
title: Salvar e carregar dados
description: Salve a partida completa ou variáveis específicas e configure as ações de cada operação.
---

# Salvar e carregar dados

Escolha os eventos em **Save Data** conforme o que deve permanecer depois de reiniciar o jogo.

| Evento | Dados salvos ou carregados | Cena, player e actors |
| --- | --- | --- |
| **Game Data Save** | Variáveis globais e estado da cena, player, actors e câmera. | Incluídos no snapshot. |
| **Game Data Load** | Restaura um snapshot completo. | Restaurados antes das ações On Load. |
| **Salvar variáveis** | Uma, várias ou todas as variáveis globais. | Não são alterados. |
| **Carregar variáveis** | Apenas os valores selecionados ou todos os globais presentes no save. | Não são alterados. |
| **Game Data Remove** | Apaga o slot, inclusive um save apenas de variáveis. | Não são alterados. |

## Slots compartilhados

Existem oito slots, mostrados como **Slot 1** até **Slot 8** e serializados de `0` a `7`. Game Data e variáveis usam os mesmos slots. Salvar substitui o conteúdo do slot escolhido, sem combinar snapshots. Cada slot comporta 4 KiB, incluindo cabeçalho e dados; um save que excede a capacidade falha sem gravar uma versão truncada.

Game Data começa no Slot 1; os eventos de variáveis começam no Slot 8. Use slots diferentes para o progresso da partida e um contador permanente. Game Data Load não restaura um snapshot apenas de variáveis. Carregar variáveis também pode extrair os valores de um save completo sem restaurar a cena.

## Ações de salvar e carregar

1. Aplique as mudanças que devem fazer parte do checkpoint.
2. Execute **Game Data Save** e escolha o slot.
3. Coloque mensagens e outras ações de sucesso na seção **On Save desse Save**.
4. Execute **Game Data Load** no mesmo slot para continuar a partida.
5. Configure a reconstrução do HUD, música e outras ações na seção **On Load desse Load**.

As ações executam automaticamente depois do sucesso da operação. A aba selecionada no editor apenas muda o conteúdo que está sendo editado; não escolhe uma condição do jogo. Não é necessário adicionar um evento On Load separado. Depois das ações, o script continua após o evento pai. Essas listas podem conter Wait e outros eventos suportados.

O snapshot é gravado antes de On Save. Alterar uma variável dentro de On Save não muda o snapshot recém-gravado. Uma operação que falha não executa suas ações de sucesso. O carregamento completo restaura a cena salva sem repetir sua inicialização normal; configure em On Load o que deve acontecer depois da restauração.

## Contador de mortes no Title

Crie uma variável global Number chamada `mortes`, com valor inicial `0`.

No Game Over:

1. Some `1` ao valor atual de `mortes`.
2. Execute **Salvar variáveis**, escolha o Slot 8, desative **Todas as variáveis globais** e selecione apenas `mortes`.
3. Vá para a cena Title.

Ao iniciar o jogo ou atualizar o contador do Title:

1. Execute **Carregar variáveis** no mesmo slot, selecionando `mortes`.
2. Execute **Set UI Text** com `Mortes: ${mortes}`.

A cena atual e as demais variáveis permanecem como estão. Se não houver dados compatíveis no slot, os valores não são alterados; mantenha defaults adequados para a primeira execução. Se carregar um checkpoint completo restaurar um contador antigo, recarregue `mortes` em On Load antes de reconstruir o HUD.

## Uma, várias ou todas

Ative **Todas as variáveis globais** ou use a seleção múltipla para escolher os valores desejados. Parâmetros de scripts não são alvos globais de save. Ao carregar todos os valores salvos, variáveis ausentes no snapshot mantêm seus valores atuais; isso não é Reset All Variables. São suportados números, booleanos e strings. Seleções inválidas, tipos incompatíveis e excesso de capacidade são reportados.

Teste salvar, carregar, apagar e reiniciar a ROM. Consulte [Variáveis e condições](./variables-and-conditions), [UI e fontes](./ui-and-fonts) e a [Referência de eventos](../reference/events).
