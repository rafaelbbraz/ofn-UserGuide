# Fechar suavemente um ciclo de pedidos

De tempos em tempos você pode achar que sua empresa recebe mais pedidos do que consegue processar fisicamente (por exemplo, no Natal ou em caso de doença da equipe/tempestade).

{% hint style="success" %}
É sempre melhor conhecer os limites do seu negócio e fechar o ciclo cedo do que vender demais e depois ter que decepcionar as pessoas.
{% endhint %}

Os produtos vão sumir da sua vitrine quando os [níveis de estoque forem a zero](../../basic-features/products-1/), mas pode haver um limite pra quantidade de pedidos que você consegue empacotar e entregar no prazo dos seus métodos de envio, e isso não é contabilizado puramente por estoque (processar 100 pedidos com um item cada leva mais que um pedido de 100 itens).

{% hint style="danger" %}
Alterar a data e hora de fim de um [ciclo de pedidos](../../basic-features/shopfront/order-cycle/) pro momento atual significa que clientes no processo de checkout não receberão seus pedidos.
{% endhint %}

Portanto recomendamos o método a seguir — assim clientes que estão pagando no momento ainda terão seus pedidos aceitos mas nenhum outro será recebido.

## Processo

* Sua empresa pode processar 100 pedidos por semana — esse é o máximo absoluto.
* Sua [página de listagem de pedidos](../../basic-features/orders/view-orders.md#listing-orders) mostra que você recebeu 95 pedidos nesse ciclo e ainda tem 2 dias pra rodar.

{% hint style="info" %}
Visite Pedidos no painel admin e filtre resultados por distribuidor e ciclo (destacado em verde abaixo). O número de pedidos recebidos aparece sob o título 'Resultados do filtro' (destacado em vermelho).
{% endhint %}

![](<../../.gitbook/assets/soft close 1.jpg>)

* Adicione uma nova [regra de tag](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md) padrão em **Empresas -> Configurações -> Regras de Tag**.\
  Padrão: Ciclos de pedidos marcados como '**Fechado**' não são visíveis.

![](<../../.gitbook/assets/soft close 2.jpg>)

\
Nenhuma outra regra de tag é necessária.

* Edite o [ciclo](../../basic-features/shopfront/order-cycle/order-cycles-for-hubs.md) atualmente aberto e na página 3 ('Produtos Saintes') adicione a tag '**Fechado**'.

![](<../../.gitbook/assets/soft close 3.jpg>)

**Atualize** e seu ciclo fechará sem interromper os clientes no processo de checkout.

{% hint style="danger" %}
Esse processo só é possível no momento pra empresas cadastradas como centrais.
{% endhint %}
