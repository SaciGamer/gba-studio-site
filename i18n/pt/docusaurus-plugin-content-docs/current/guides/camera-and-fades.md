---
sidebar_position: 5
title: Câmera e fades
description: Mova a câmera, siga actors e configure fades.
---

# Câmera e fades

**Pan Camera** e **Camera: Move To** recebem X e Y, com pixels ou tiles de 16 pixels escolhidos separadamente para cada eixo. O movimento animado bloqueia o script até terminar; a velocidade vai de 0,0625 a 16. O seletor limita os eventos de movimento de câmera em Logo e Point Click.

**Camera: Follow Actor** seleciona player, Self ou um actor da cena. Configure os eixos, a zona morta, o limite da cena e a persistência entre cenas. O preview mostra a região acompanhada. **Stop Camera Follow** encerra o acompanhamento. Sem persistência, o comportamento pertence à cena atual; ao persistir, confira se o alvo existe no destino.

O preview do evento filho prevalece durante hover ou foco, inclusive em seus inputs e depois de rolar a lista. Ao sair, o preview elegível do pai volta.

**Camera: Shake** recebe de 1 a 120 frames e amplitude de 1 a 16. **Fade Options** escolhe a cor; **Fade In** e **Fade Out** recebem velocidade de 1 a 6 e bloqueiam o script até concluir. Fade altera a visibilidade da tela, não a posição do actor.

Consulte [Cenas e layers](./scenes-and-layers), [Referência de eventos](../reference/events) e [Emulador](../build-and-release/emulator).
