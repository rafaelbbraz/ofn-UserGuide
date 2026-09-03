# Compra em grupo — para pedidos em lote

A função **Compra em Grupo** foi desenhada para empresas que compram parte do estoque em quantidades atacadistas e revendem em unidades menores (por exemplo, comprando um saco de 25 kg de arroz e revendendo aos clientes por kg).

Compra em lote é uma prática comum de **grupos de compras**, que, comprando grandes volumes, podem se beneficiar de preços de atacado da mesma forma que distribuidores convencionais. Assim, os membros conseguem alimentos muito mais baratos do que conseguiriam em varejos convencionais.

Para essas empresas, a decisão de pedir um determinado produto depende de os clientes coletivamente terem pedido o suficiente para justificar uma compra em lote. Isso pode ser devido a descontos por volume ou taxas de entrega. A função de compra em grupo facilita pra central atingir a eficiência da compra em lote.

Quando um produto é alocado pra compra em grupo, ele aparece com a etiqueta 'Lote' na foto da vitrine. Quando um cliente escolhe adicionar o produto ao carrinho, uma tela pop-up pede pra ele informar quantidades mínima e máxima como mostrado abaixo:

![](../../.gitbook/assets/bulkbuy.gif)

Os clientes são solicitados a indicar:

* Sua **quantidade mínima** — a quantidade do produto que ele idealmente quer.
* Sua **quantidade máxima** — a quantidade máxima que ele estaria disposto a comprar.

{% hint style="info" %}
Essencialmente é uma forma do cliente dizer _'você tem minha permissão pra aumentar meu pedido até esse ponto, se isso significar que, como grupo, conseguimos atingir a quantidade da compra em lote'._
{% endhint %}

No [Gerenciamento de Pedidos em Lote](../orders/view-orders.md#bulk-order-management), você pode ver as quantidades mínima e máxima totais de pedidos do produto de todos os clientes. Aí você pode aumentar os pedidos dos clientes, dentro da faixa aceitável, para atingir a quantidade em lote — ou se a quantidade máxima ficar abaixo, você pode deletar todos os pedidos desse produto.

{% hint style="danger" %}
A função de compra em grupo **não** pode ser aplicada a produtos listados com unidade = **itens**.
{% endhint %}

## Habilitando compra em grupo para um produto

No dashboard admin, vá em '**Produtos**' no menu horizontal principal. Selecione **Editar** um produto na coluna 'Ações' à direita:

![](<../../.gitbook/assets/listing products.jpg>)

Depois selecione **Opções de Compra em Grupo** no menu à direita.

![](<../../.gitbook/assets/group buy1.jpg>)

Selecione **Sim** em **Compra em Grupo?** para ativar esse recurso para o produto.

O **Tamanho da Unidade em Lote** é a quantidade que o pedido coletivo do grupo precisa atingir.

{% hint style="warning" %}
As **unidades** para o Tamanho da Unidade em Lote dependem das unidades selecionadas para revender o produto aos clientes.

Se o produto é vendido por:

* **Peso**: unidades em g (então se o total coletivo precisa ser 5 kg, informe '5000' nesse campo)
* **Volume**: unidades em litros (então se o total coletivo precisa ser 10 L, informe '10' nesse campo)
* **Itens**: ex: vendendo maços de flores mas precisando comprar 100 maços no total, informe '100' nesse campo.
{% endhint %}

## Ajustando pedidos pra completar lotes

Em Pedidos-> [gerenciamento de pedidos em lote](../orders/view-orders.md#bulk-order-management), você pode ver e editar pedidos dos clientes para produtos de Compra em Lote e fazer o pedido combinado de todos atingir seu limite.

1. Selecione o ciclo de pedidos ou intervalo de datas de interesse.
2. Busque o produto (Maçãs no exemplo abaixo).
3. Certifique-se que a coluna 'Máx' está exibida, para ver o limite superior que cada cliente está disposto a comprar.
4. Clique no valor ('Maçãs: Fuji' no exemplo abaixo) na coluna **Produto: Unidade**, para exibir a caixa de totais de pedido (em azul) para o produto em questão.
5. Usando a informação na coluna **Máx**, você pode aumentar as quantidades pedidas para atingir o limite de um lote completo.
6. Clique em atualizar para salvar as alterações nos pedidos dos clientes.

![](<../../.gitbook/assets/group buy2.jpg>)

**Unidades atualmente atendidas** divide sua quantidade total pedida pelo tamanho da unidade em lote. Se esse número for maior que 1, indica que os pedidos existentes dos clientes atingem ou excedem o tamanho requerido. Se for menor que 1, os pedidos não atingem o limite. Conforme você aumenta as quantidades, esse número aumenta.

**Unidades máximas atendidas** pega a soma das quantidades MÁXIMAS de pedido dos clientes e divide pelo Tamanho da Unidade em Lote. Se esse número for maior que 1, você sabe que o total dos pedidos MÁX excede a quantidade requerida. Se for menor que 1, significa que mesmo as quantidades MÁX não atingem o limite.
