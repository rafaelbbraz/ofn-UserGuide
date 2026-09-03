# Relatórios de pedidos

Nesta página você encontra mais detalhes sobre relatórios listados nas seguintes seções:

* [Pedidos e Distribuidores](order-reports.md#orders-and-distributors-report)
* [Pedidos e Atendimento](order-reports.md#orders-and-fulfillment-reports)

## Relatório de Pedidos e Distribuidores

{% hint style="success" %}
Este relatório é uma forma útil de ver os pedidos dos clientes conforme são feitos, em mais detalhes do que na lista de [Pedidos](../orders/view-orders.md).
{% endhint %}

Os campos de dados que você vê nesse relatório:

* Data e hora do pedido junto com ID
* Método de envio (e custo), método de pagamento, notas do cliente
* Nome do cliente, email, telefone, cidade (mas não endereço completo)
* Para cada produto do pedido: nome do produto, nome da variante, quantidade (e Máx quantidade para itens em lote), custo
* Endereço da central (distribuidor)

![Relatório de Pedidos e Distribuidores](<../../.gitbook/assets/orders and distributors report.jpg>)

{% hint style="info" %}
Filtre por data e hora pra download mais rápido.
{% endhint %}

## Relatórios de Pedidos e Atendimento

Nos Relatórios de Pedidos e Atendimento você encontra quatro opções: Totais do Ciclo por Fornecedor, Totais do Ciclo por Fornecedor por Distribuidor, Totais do Ciclo por Distribuidor por Fornecedor e Totais do Ciclo por Cliente.

### Totais do Ciclo por Fornecedor

{% hint style="success" %}
Como um **produtor que fornece a uma ou mais centrais**, esses três relatórios são uma ótima forma de acompanhar pedidos dos seus produtos que chegam **enquanto um ciclo está aberto**.
{% endhint %}

A menos que você também seja o coordenador ou distribuidor do ciclo, esses pedidos não aparecerão na sua lista de [Pedidos](../orders/view-orders.md), mas você pode querer começar a planejar sua produção/colheita antes de receber o [email de notificação do fornecedor](../shopfront/order-cycle/order-cycles-for-hubs.md#notify-producers-button) da central distribuidora.

Um resumo dos dados encontrados em cada relatório:

| Relatório         | Tot Forn CP | Tot Forn CP por Dist | Tot Dist CP por Forn |
| ----------------- | ----------- | -------------------- | -------------------- |
| Produtor          | Sim         | Sim                  | Sim                  |
| Central           | Não         | Sim                  | Sim                  |
| Produto           | Sim         | Sim                  | Sim                  |
| Variante          | Sim         | Sim                  | Sim                  |
| Quantidade        | Sim         | Sim                  | Sim                  |
| Total Unidades    | Sim         | Não                  | Não                  |
| Custo unit atual  | Sim         | Sim                  | Sim                  |
| Custo total       | Sim         | Sim                  | Sim                  |
| Status            | Sim         | Não                  | Não                  |
| Método de envio   | Sim         | Sim                  | Sim                  |
| Custo total frete | Não         | Não                  | Sim                  |

{% hint style="warning" %}
Note que o Custo Total não é uma multiplicação simples de Custo unitário atual e quantidade.

* O custo unitário atual pode variar no intervalo de tempo selecionado.
* O valor registrado nestes relatórios é o custo unitário atual no momento do último pedido.
* O Custo Total é a soma dos custos dos produtos no momento em que cada item foi comprado.
{% endhint %}

![Totais do Ciclo por Fornecedor](<../../.gitbook/assets/report order cycle by supplier totals.jpg>)

![Totais do Ciclo por Fornecedor por Distribuidor](<../../.gitbook/assets/order cycle by distributor.jpg>)

![Totais do Ciclo por Distribuidor por Fornecedor](<../../.gitbook/assets/order cycle totals for distributor by supplier.jpg>)

{% hint style="success" %}
Esses relatórios são úteis pra calcular o valor a reembolsar a um produtor pelos itens fornecidos.
{% endhint %}

### Totais do Ciclo por Cliente

{% hint style="success" %}
Útil para:

* Atender pedidos individualmente
* Preparar pedidos individuais em lote
{% endhint %}

Este é o relatório que contém mais dados:

* Data e hora do pedido junto com ID
* Nome, email, telefone, endereços de cobrança e entrega do cliente
* Para cada produto do pedido: nome do produto, nome da variante, quantidade, custo, preço pago pelo cliente (custo do item + taxas), detalhamento de taxas (Empresa, método de pagamento e método de envio associadas a cada produto), produtor
* Nome da central
* Método de pagamento e status (ex: pago, não pago)
* Método de envio, Entrega ou Retirada

{% hint style="info" %}
O Endereço de Entrega exibido para um pedido onde o método escolhido é 'retirada' será o endereço da central distribuidora.
{% endhint %}

A captura abaixo mostra as informações contidas em um relatório de Totais do Ciclo por Cliente.

![Totais do Ciclo por Cliente](<../../.gitbook/assets/oc totals by customer.jpg>)
