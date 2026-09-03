# Dicas gerais

Nesta página cobrimos:

* [Recursos comuns](general-tips.md#filtering-and-rendering-options) de todos os relatórios da Nossa Feira, como filtros e opções de renderização.
* Como permitir que [fornecedores](general-tips.md#reports-for-suppliers) tenham acesso a relatórios das vendas dos produtos deles pela sua central.
* [Relatórios úteis](general-tips.md#some-helpful-reports) para diferentes tarefas.

## Filtros e opções de renderização

Pra customizar seu relatório há duas seções: filtros e opções de renderização, que permitem acessar os dados relevantes do relatório.

A **lista de filtros** disponível varia de relatório pra relatório, mas na maioria você pode selecionar dados específicos por intervalo de datas, nome da central e/ou fornecedor e ciclo de pedidos:

<figure><img src="../../.gitbook/assets/filters.jpg" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Centrais e lojas que operam [ciclos continuamente abertos](../shopfront/order-cycle/) podem achar útil usar o filtro de Data ao visualizar relatórios.
{% endhint %}

{% hint style="success" %}
Filtrar dados por nome da Central e Produtor pode ser especialmente útil se você gerencia várias empresas na plataforma.
{% endhint %}

Abaixo das opções de Filtros de Relatório, você pode selecionar como quer visualizar os dados — **Opções de renderização**. Aqui você encontra uma lista das exportações de dados pré-definidas disponíveis para visualizar e baixar.

Todos os relatórios podem ser baixados em CSV, PDF e formatos Excel e OpenOffice. Pra selecionar qual tipo de arquivo baixar, clique na caixa suspensa **Gerar Relatório** onde pode escolher entre esses quatro formatos.

<figure><img src="../../.gitbook/assets/basic orders and distributers options.jpg" alt=""><figcaption></figcaption></figure>

Você pode usar o filtro **Colunas** pra tornar seus relatórios mais fáceis de ler removendo dados desnecessários. Basta marcar ou desmarcar caixas no menu suspenso (por padrão todas as colunas ficam marcadas):

<figure><img src="../../.gitbook/assets/rendering3.jpg" alt=""><figcaption></figcaption></figure>

Para relatórios selecionados (**Embalagem** e **Pedidos & Atendimento**) há uma opção adicional de selecionar 'Linha de Cabeçalho' e/ou 'Linha de Resumo'.

<figure><img src="../../.gitbook/assets/rendering2.jpg" alt=""><figcaption></figcaption></figure>

A **linha de resumo** é um filtro que adiciona totais ao fim de cada tipo de relatório, e a **linha de cabeçalho** te dá o nome do cliente e número do pedido (para relatórios de Pedidos e Atendimento) ou número de telefone (para relatórios de embalagem) acima dos dados.

<figure><img src="../../.gitbook/assets/HEADER AND SUMMARY.jpg" alt=""><figcaption></figcaption></figure>

## Relatórios para fornecedores

Se você configurou [Permissões](../enterprise-profile/enterprise-to-enterprise-permissions-e2es.md) pra uma Central vender seus produtos, e ela abriu um [Ciclo de Pedidos](../shopfront/order-cycle/order-cycles-for-hubs.md) com seus produtos listados, você poderá gerar relatórios pra empacotar e processar seus pedidos.

{% hint style="success" %}
Se você precisa ver nomes de clientes nesses relatórios, pode pedir à Central pra torná-los visíveis.
{% endhint %}

Centrais podem fazer essa alteração nas [Configurações da Empresa](../enterprise-profile/enterprise-settings.md).

{% hint style="info" %}
DICAS:

1. Se você é um produtor que fornece a mais de uma central, pode usar o filtro 'Central' ao visualizar relatórios pra identificar quais produtos serão solicitados pra entregar em cada uma.
2. Como produtor fornecedor, você pode não saber os nomes dos ciclos abertos atuais. Filtrar pedidos nos seus relatórios por intervalo de datas é uma alternativa fácil.
{% endhint %}

## Alguns relatórios úteis

<table data-header-hidden><thead><tr><th width="358">Tarefa</th><th>Relatório(s) sugerido(s)</th></tr></thead><tbody><tr><td>Tarefa</td><td>Relatório(s) sugerido(s)</td></tr><tr><td>Disponibilidade de produtos</td><td><a href="order-reports.md#order-cycle-supplier-totals">Totais do Ciclo por Fornecedor</a></td></tr><tr><td>Revisar produtos comercializados</td><td><a href="reports-for-hub-management.md#product-management">Todos os Produtos</a></td></tr><tr><td>Reembolsar fornecedores</td><td><a href="order-reports.md#order-cycle-supplier-totals">Totais do Ciclo por Fornecedor</a></td></tr><tr><td>Empacotar ou processar pedidos<br>individualmente ou em lote</td><td><a href="order-reports.md#order-cycle-customer-totals">Totais do Ciclo por Cliente</a></td></tr><tr><td><p>Recebendo produtos entregues</p><p>por fornecedores</p></td><td><a href="packing-reports.md#pack-by-supplier">Empacotar por fornecedor</a></td></tr><tr><td><p>Empacotando produtos a serem</p><p>coletados pelo cliente</p></td><td><a href="packing-reports.md#pack-by-customer">Empacotar por cliente</a></td></tr><tr><td>Planejando entregas</td><td><a href="reports-for-hub-management.md#order-cycle-management">Relatório de Entrega</a></td></tr><tr><td>Ver saldo do cliente</td><td><p><a href="reports-for-hub-management.md#order-cycle-management">Relatórios de Método de Pagamento</a></p><p><a href="reports-for-hub-management.md#order-cycle-management">e Entrega</a></p></td></tr><tr><td>Calcular impostos</td><td><a href="payment-and-tax-reports.md#sales-tax">Relatórios de Imposto sobre Vendas</a></td></tr><tr><td>Gerenciar receita total</td><td><a href="payment-and-tax-reports.md#payment-reports">Relatórios de Pagamento</a></td></tr><tr><td>Detalhamento de Taxa da Empresa</td><td><a href="reports-for-hub-management.md#enterprise-fees">Relatório de Taxa da Empresa</a></td></tr><tr><td>Integrando com Xero</td><td><a href="payment-and-tax-reports.md#xero-invoices">Notas Xero</a></td></tr><tr><td><p>Gerenciamento de pedidos em lote</p><p>para grupos de compras</p></td><td><a href="reports-for-bulk-order-management.md">Relatórios Atacado Cooperativa</a></td></tr></tbody></table>
