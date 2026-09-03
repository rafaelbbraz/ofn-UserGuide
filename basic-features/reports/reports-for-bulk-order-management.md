# Relatórios para gerenciamento de pedidos em lote

Os relatórios disponíveis na seção Atacado Cooperativa são ideais pra empresas na Nossa Feira, como grupos de compras, que usam a [funcionalidade de Compra em Grupo](../products-1/group-buy-for-bulk-ordering.md).

Há quatro relatórios nessa seção:

|                        | Uso                                                                                                                                                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Relatório do Fornecedor | <p>Lista produtos por fornecedor.</p><p>Um bom lugar pra ver se</p><p>quantidade suficiente de um produto</p><p>foi pedida pra justificar o tamanho</p><p>de lote do fornecedor.</p>                                                     |
| Alocação                | <p>Lista produtos por cliente.</p><p>Um bom lugar pra garantir</p><p>que você aloque itens</p><p>de compra em lote pros</p><p>clientes uniformemente (ex:</p><p>uma pessoa não fica sem tudo</p><p>nos itens do pedido dela)</p>            |
| Folha de embalagem      | <p>Reembalagem de produtos entregues<br>por um fornecedor em lote</p><p>pra coleta pelo cliente</p>                                                                                                                                        |
| Totais por cliente      | <p>Documenta reembolsos/pagamento</p><p>extra requerido do cliente</p><p>após ajustar níveis de estoque</p><p>pra completar um pedido em lote</p>                                                                                          |

## Dados

Os dados em cada relatório são:

|                                                   | Relatório do Fornecedor | Alocação | Embalagem | <p>Totais por</p><p>cliente</p> |
| ------------------------------------------------- | ----------------------- | -------- | --------- | ------------------------------- |
| Cliente                                           | Não                     | Sim      | Sim       | Sim                             |
| Fornecedor                                        | Sim                     | Não      | Não       | Não                             |
| Nome do produto                                   | Sim                     | Sim      | Sim       | Não                             |
| Detalhes da variante                              | Sim                     | Sim      | Sim       | Não                             |
| Unidade em lote                                   | Sim                     | Sim      | Não       | Não                             |
| Quantidade comprada                               | Sim                     | Sim      | Sim       | Não                             |
| Unidades necessárias                              | Sim                     | Sim      | Não       | Não                             |
| Não alocada                                       | Sim                     | Sim      | Não       | Não                             |
| Qtd máx excedente                                 | Sim                     | Sim      | Não       | Não                             |
| Data do pedido                                    | Não                     | Não      | Não       | Sim                             |
| <p>Valor pago, devido</p><p>e custo total</p>     | Não                     | Não      | Não       | Sim                             |

{% hint style="warning" %}
Produtos comercializados por uma central que não têm compra em lote habilitada aparecerão com Unidade em Lote = 0.
{% endhint %}

![Relatório do Fornecedor Atacado Cooperativa](<../../.gitbook/assets/bulk suppliers report.jpg>)

![Alocação Atacado Cooperativa](<../../.gitbook/assets/bulk allocation report.jpg>)

![Embalagem Atacado Cooperativa](<../../.gitbook/assets/bulk coop packing sheets.jpg>)

![Pagamentos de Clientes Atacado Cooperativa](<../../.gitbook/assets/bulk coop customer payment.jpg>)

## Exemplo: Relatório do Fornecedor Atacado Cooperativa

Este relatório mostra as seguintes informações:

* Os clientes pediram o suficiente de um produto pra justificar pedir o tamanho de lote do fornecedor?
* Quanto de produto extra os clientes topam comprar pra ajudar o grupo a atingir o limite (se [Compra em Grupo](../products-1/group-buy-for-bulk-ordering.md#enabling-group-buy-for-a-product) está habilitado)
* Quantos tamanhos de lote são necessários pra atender a demanda?
* Se o tamanho de lote for pedido, quanto de estoque vai sobrar.
* Quantos clientes ficarão desapontados se o produto não for pedido?

Veja o exemplo abaixo:

Exemplo 1: quando a quantidade de pedido em lote foi atingida:

![Rabanetes](../../.gitbook/assets/radishess.png)

Exemplo 2: quando a quantidade de pedido em lote não foi atingida:

![Bok Choy](../../.gitbook/assets/bok-choy.png)

* _O relatório 'Alocação Atacado Cooperativa' é similar em função a este, mas mostra o pedido de cada cliente individualmente em vez do total cumulativo entre todos os clientes._
