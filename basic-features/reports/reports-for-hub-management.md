---
description: Relatórios de Ciclo de Pedidos, Produtos, Clientes e Taxas da Empresa
---

# Relatórios para gerenciamento de central

Nesta página você encontra mais informações sobre relatórios listados nas seguintes seções:

* [Gerenciamento de Ciclo de Pedidos](reports-for-hub-management.md#order-cycle-management)
* [Produtos e Estoque](reports-for-hub-management.md#product-management)
* [Clientes](reports-for-hub-management.md#customer-management)
* [Gerenciamento de Taxas da Empresa](reports-for-hub-management.md#enterprise-fees)

## Gerenciamento de Ciclo de Pedidos

Há dois relatórios na seção Gerenciamento de Ciclo de Pedidos: Métodos de Pagamento e Relatório de Entrega.

{% hint style="success" %}
Um **Saldo do Cliente** (a soma de valores pagos e devidos em todos os pedidos feitos na sua empresa) está listado tanto no relatório de Método de Pagamento quanto no de Entrega. Bom lugar pra ver rapidamente se um cliente está acumulando uma dívida grande.
{% endhint %}

Resumidamente, os dados contidos nesses relatórios:

|                              | Método de Pagamento | Relatório de Entrega |
| ---------------------------- | ------------------- | -------------------- |
| Nome do cliente              | Sim                 | Sim                  |
| Telefone do cliente          | Sim                 | Sim                  |
| Email do cliente             | Sim                 | Não                  |
| Central                      | Sim                 | Sim                  |
| Método de envio              | Sim                 | Sim                  |
| Endereço de entrega\*        | Não                 | Sim                  |
| Categoria de frete\*\*       | Não                 | Sim                  |
| Método de pagamento          | Sim                 | Sim                  |
| Notas do pedido              | Não                 | Sim                  |
| Total do pedido              | Sim                 | Sim                  |
| Saldo do cliente             | Sim                 | Sim                  |

\*Endereço de Entrega é o endereço da central/distribuidor (pra retirada) ou um endereço informado pelo cliente (pra entrega).

\*\*Categoria de frete = padrão, congelado, refrigerado

![Relatório de Método de Pagamento](<../../.gitbook/assets/payment method (1).jpg>)

![Métodos de Entrega](<../../.gitbook/assets/delivery method.jpg>)

## Gerenciamento de produtos

Em Produtos e Estoque você encontra três relatórios úteis se quer revisar itens comercializados pela sua central de diferentes produtores.

Os relatórios **Todos os Produtos** e **Estoque** diferem apenas no fato de que o último (Estoque) contém apenas dados de produtos com níveis maiores que zero.

Os dados que contêm para cada produto são:

* Nome do fornecedor e cidade/bairro do endereço do fornecedor
* Nome do produto, nome da variante e SKU
* Propriedade do produto e categoria
* Preço
* Quantidade de unidade de compra em grupo (se aplicável)
* Níveis de estoque (selecionando 'Em Estoque' no menu suspenso de Colunas)

Abaixo, um exemplo do Relatório Todos os Produtos:

![Relatório Todos os Produtos](<../../.gitbook/assets/all products.jpg>)

O relatório **Lettuce Share** dá mais detalhes sobre cada produto: nome, nome da variante (listado em 'Descrição'), unidade (g, L, nome do item etc.), tamanho do pacote (ex: para um produto de '500g tomates' unidade = g, tamanho do pacote = 500), preço, imposto incluído no custo, propriedades do produtor (não propriedades do produto) e categoria do produto.

![Relatório Lettuce Share](<../../.gitbook/assets/lettuce share.jpg>)

## Gerenciamento de clientes

Você pode usar este relatório pra ver o número de pedidos feitos por um cliente por ciclo — particularmente útil se alguém pede mais de uma vez mas quer coletar tudo em uma única caixa.

<figure><img src="../../.gitbook/assets/customer report.jpg" alt=""><figcaption></figcaption></figure>

## Taxas da Empresa

Empresas podem configurar [Taxas da Empresa](../shopfront/enterprise-fees.md) pra identificar e controlar a alocação de custos/preços com diferentes finalidades. Essas taxas permitem transparência de preço para os clientes quando visitam sua vitrine.

{% hint style="success" %}
O relatório de Resumo de Taxas da Empresa é usado pra resumir os valores das taxas cobradas e para quem.
{% endhint %}

O relatório pode ser filtrado por Vitrine (**Central**), **Produtor** e **Ciclo de Pedidos**, além de Nomes de Taxa e métodos de Envio e Pagamento.

![Relatório de Resumo de Taxas da Empresa](<../../.gitbook/assets/ent fee summary.jpg>)

**Exemplo 1**: uma central adiciona uma taxa de margem de 18% a fornecedores selecionados. Essas taxas são adicionadas na seção 'Entrantes' do ciclo.

<figure><img src="../../.gitbook/assets/example1.jpg" alt=""><figcaption></figcaption></figure>

**Exemplo 2**: uma central cobra uma taxa de transporte que é paga a um produtor por buscar produtos de outros agricultores e trazer à central. Essa taxa é calculada como percentual sobre cada produto no ciclo. Podem usar o relatório de Resumo de Taxas pra calcular quanto pagar ao produtor pelo transporte em cada ciclo.

<figure><img src="../../.gitbook/assets/example2.jpg" alt=""><figcaption></figcaption></figure>

### Dados

Os dados encontrados em um Relatório de Resumo de Taxas da Empresa incluem:

* Tipo de taxa (Tipos de taxa da empresa são administrativa, embalagem, transporte, arrecadação, vendas), nome e alíquota da taxa.
* Nome do cliente
* Onde no ciclo a taxa é colocada (produtos entrantes/saintes ou taxa do coordenador do ciclo)
* Nome da empresa que definiu a taxa ('Cálculo da Taxa na Transferência')
* Valor total da taxa da empresa coletada pela venda do item.
