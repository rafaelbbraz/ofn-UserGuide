---
description: Relatórios de imposto
---

# Relatórios de imposto

## Imposto sobre vendas

Existem quatro relatórios de imposto sobre vendas:

* [Tipos de imposto](payment-and-tax-reports-1.md#tax-type-reports)
* [Alíquotas](payment-and-tax-reports-1.md#tax-rate-reports)
* [Totais de imposto por produtor](payment-and-tax-reports-1.md#sales-tax-totals-by-producer)
* [Totais de imposto por pedido](payment-and-tax-reports-1.md#sales-tax-totals-by-order)

{% hint style="danger" %}
Se sua empresa é **contribuinte de impostos**, é importante selecionar a 'Zona de Imposto' correta quando solicitado (por exemplo, ao configurar uma taxa de [Método de Envio](../shopfront/shipping-methods.md)).
{% endhint %}

### Relatórios de tipos de imposto

O relatório de **Tipos de Imposto** é útil pra separar o imposto total por pedido nos seus diferentes componentes: imposto sobre produtos, imposto sobre taxa do método de envio e imposto sobre taxas — de empresa e/ou método de pagamento.

![Relatório de tipos de imposto](<../../.gitbook/assets/tax types.jpg>)

### Relatórios de alíquotas

O relatório de alíquotas dá um **detalhamento pedido a pedido** por alíquota (PRODUTOS com alíquota cheia, reduzida ou isentos, e imposto sobre taxas de entrega). Totais de pedidos com e sem imposto também são fornecidos.

![Relatório de alíquotas](<../../.gitbook/assets/tax rates.jpg>)

{% hint style="warning" %}
As alíquotas exatas para Cheia, Reduzida e Isento, além da legislação que define a qual categoria um produto pertence, variam de instância pra instância.

Existem três 'Zonas de Imposto' disponíveis na Nossa Feira: UK\_VAT, EU\_VAT e América do Norte. Zonas UK e EU operam da mesma forma (preços exibidos aos clientes incluem o imposto); a zona América do Norte opera diferentemente (preços exibidos aos clientes são sem imposto). No Brasil, o padrão é preços com imposto incluído.

Como resultado, haverá mais de três colunas possíveis pra seleção ao baixar um Relatório de Alíquotas.
{% endhint %}

A captura acima foi de uma empresa UK. As colunas correspondem a (da esquerda pra direita):

* 5,0% : Alíquota reduzida sobre produtos
* 0,0% : Alíquota zero sobre produtos
* 20,0% : Alíquota cheia sobre produtos
* 20,0% : Alíquota cheia sobre métodos de envio do UK para América do Norte
* 20,0% : Alíquota cheia sobre métodos de envio/coleta dentro do UK

### Totais de imposto sobre vendas por produtor

Para o período ou ciclo usado pra filtrar resultados, este relatório dá o status fiscal de cada fornecedor e a receita total que ele vendeu para cada alíquota disponível. (Apenas alíquotas para as quais ele vendeu produtos são mostradas.)

<figure><img src="../../.gitbook/assets/tax by producer.jpg" alt=""><figcaption><p>Relatório de Imposto sobre Vendas por Produtor</p></figcaption></figure>

### Totais de imposto sobre vendas por pedido

Para o período ou ciclo usado pra filtrar resultados, este relatório dá a contribuição de produtos ou serviços em cada alíquota ao imposto total pago pelo cliente naquele pedido.

<figure><img src="../../.gitbook/assets/tax by order.jpg" alt=""><figcaption><p>Imposto sobre Vendas por Pedido</p></figcaption></figure>
