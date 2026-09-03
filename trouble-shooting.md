---
description: Encontre soluções para algumas das perguntas comuns que recebemos dos usuários abaixo
---

# Perguntas Frequentes

## Alterei um pedido/ciclo de pedido/assinatura etc, mas minhas alterações desapareceram

É provável que suas alterações não tenham sido salvas. Quaisquer alterações que você fizer devem ser salvas clicando no botão salvar/atualizar _antes de sair da página_ pra terem efeito. Tente fazer as alterações de novo, garantindo que você clique em salvar, e [contate sua instância local](local-ofn-organizations-and-contacts.md) se ainda estiver com problemas.

## Não consigo configurar um ciclo de pedidos

* Você tem um [método de pagamento](basic-features/shopfront/payment-methods.md) ativo configurado pra sua loja ou central?
* Você tem um [método de envio](basic-features/shopfront/shipping-methods.md) ativo configurado pra sua loja ou central?
* Todos os [campos obrigatórios relevantes estão completos](basic-features/shopfront/order-cycle/)? Você precisa definir horários de abertura e fechamento pro ciclo de pedidos, dar um nome único e completar o campo 'Pronto pra'.

## Quero vender frangos inteiros mas não sei o peso de cada ave até o dia do abate

* Isso não é problema! Leia [aqui](basic-features/products-1/pricing-irregular-items-kg.md) sobre as várias formas em que a plataforma da Nossa Feira foi projetada pra ser flexível e atender às necessidades específicas de produtores de alimentos.

## Forneço batatas pra 'Loja Agrícola A' que custam R$ 1/kg. Por que minhas batatas aparecem à venda pra clientes por R$ 1,20/kg?

Loja Agrícola A pode precisar gerar receita extra em cada venda pra cobrir custos operacionais. Ela pode fazer isso de várias formas:

* Se você configurar uma [permissão de empresa](basic-features/enterprise-profile/enterprise-to-enterprise-permissions-e2es.md) em que sua empresa permite que a Loja Agrícola A adicione seus produtos ao inventário dela, então ela pode modificar os preços que o cliente paga por seus produtos dessa forma.&#x20;
* Loja Agrícola A pode adicionar uma [taxa de empresa](basic-features/shopfront/enterprise-fees.md) ao seu preço de custo das batatas. Se for esse o caso, os clientes que comprarem os itens poderão ver um detalhamento do preço que pagam clicando no ícone de gráfico à direita do preço do produto na vitrine.

Boas relações de trabalho são fundamentais pra qualquer rede alimentar sustentável. Converse com a Loja Agrícola A sobre como organizaram as vendas dos seus produtos (pessoalmente, por telefone ou por email).

Loja Agrícola A deve (moralmente) pagar R$ 1/kg por cada kg de batata que você forneceu pra atender às vendas dela. Pagamento de mercadorias (do distribuidor pro fornecedor) é um acordo privado organizado fora da plataforma da Nossa Feira.

## Adicionei produtos novos mas eles não aparecem na vitrine

Produtos recém-adicionados devem ser incluídos em um ciclo de pedido ativo antes de ficarem visíveis na vitrine pra clientes comprarem.

* Se você está _**fornecendo mercadorias pra uma central**_, então você deve entrar em contato com a pessoa que está coordenando o ciclo de pedidos em questão. Isso tem que ser feito externamente à plataforma da Nossa Feira (mande um email, ligue ou fale pessoalmente).
* Se você é uma **Loja**, então você deve adicionar os novos produtos ao seu[ ciclo de pedidos ativo e aberto](basic-features/shopfront/order-cycle/order-cycles-for-producers.md).
* Se você é uma **Central**, então:
  * Certifique-se de que os novos produtos foram adicionados às seções de entrada e saída do [ciclo de pedidos ativo](basic-features/shopfront/order-cycle/order-cycles-for-hubs.md)
  * Se os novos produtos não estiverem disponíveis pra seleção nem em entrada nem em saída, verifique suas [configurações de inventário](basic-features/enterprise-profile/enterprise-settings.md#inventory-settings). Você pode ter que [adicionar os produtos ao seu inventário](basic-features/products-1/inventory-tool.md#reviewing-new-products) antes que possam ser incluídos na vitrine.

{% hint style="info" %}
Em todos os casos, verifique o nível de estoque dos novos produtos. Apenas itens com valor de **Em Estoque?** igual ou maior que 1, ou marcados como **Ilimitado**, ficarão visíveis pra um cliente comprar.
{% endhint %}

## Nem todos os produtos do meu fornecedor estão disponíveis pra eu adicionar ao meu ciclo de pedidos

Você pode ter suas [Configurações de Inventário](basic-features/enterprise-profile/enterprise-settings.md#inventory-settings) definidas como 'Novos produtos devem ser adicionados ao meu inventário antes de poderem ser adicionados à minha vitrine'.\
Nesse caso, você deve revisar seu inventário de produtos, [adicionar produtos novos/ocultos](basic-features/products-1/inventory-tool.md#managing-your-inventory-products) ao inventário pra ficarem disponíveis pra seleção no ciclo de pedidos.

Se você está coordenando um ciclo de pedidos envolvendo múltiplos fornecedores e distribuidores, alguns ou todos podendo usar seu inventário de produtos pra abastecer suas vitrines, verifique novamente se todas as permissões de empresa relevantes foram concedidas. Leia mais [aqui](basic-features/shopfront/order-cycle/permissions-in-multi-enterprise-order-cycles.md).

## Um novo Produtor começou perto daqui mas não consigo adicionar os produtos dele à vitrine da minha central

Você deve buscar a permissão dele antes de poder vender os produtos que ele faz ou fornece. Isso é feito formalmente na plataforma da Nossa Feira pelo novo produtor através das [Permissões de Empresa](basic-features/enterprise-profile/enterprise-to-enterprise-permissions-e2es.md).

## Eu opero um esquema de cestas de verduras. Como posso permitir que os clientes adicionem itens extras aos pedidos de assinatura toda semana?

**Cenário Um:** _O cliente compra a cesta de verduras toda semana através de uma_ [_assinatura_](basic-features/subscriptions/) _automatizada configurada na plataforma da Nossa Feira:_\
Altere suas [Configurações de Empresa](basic-features/enterprise-profile/enterprise-settings.md#shop-preferences)-> Preferências da Loja-> Alterar Pedidos? pra 'Clientes podem alterar/cancelar pedidos enquanto o ciclo estiver aberto'.\
Quando o ciclo de pedidos abrir, o cliente receberá um email automático dizendo que o pedido da cesta foi criado. Ele terá até o fechamento do ciclo pra fazer login na conta da Nossa Feira, editar o pedido e adicionar itens extras da sua vitrine à cesta.

{% hint style="info" %}
Os itens adicionais serão processados como um pedido separado. O cliente será direcionado ao checkout pra pagar por esses itens. O pagamento da assinatura será feito automaticamente no fim do ciclo.
{% endhint %}

**Cenário Dois:** _O cliente compra uma cesta de verduras através de uma plataforma externa._ Nesse caso, considere configurar uma [vitrine privada](basic-features/shopfront/private-shopfront.md) que fique visível apenas pra clientes cadastrados no seu esquema externo de cestas. Use software externo ou planilhas pra combinar itens adicionais comprados pela vitrine da Nossa Feira com as cestas dos clientes, pra você só precisar fazer entregas uma vez!

## Houve uma quebra de safra e temos menos tomates fornecidos do que precisamos pra atender todos os pedidos

Não tem problema — acontece com todo mundo de vez em quando! Leia [aqui](basic-features/orders/view-orders.md#example-1-you-have-a-stock-shortage-and-must-reduce-customer-order-quantities-for-a-certain-product) os passos pra ajustar todos os pedidos dos clientes de uma vez.

## Um produtor só está disposto a fornecer pra minha central se os pedidos atenderem um mínimo&#x20;

A funcionalidade de 'compra em grupo' descrita [aqui](basic-features/products-1/group-buy-for-bulk-ordering.md) pode ser usada pra isso também!

## Não consigo reembolsar um cliente que pagou por PayPal

Atualmente, você não consegue emitir reembolsos pra clientes que compraram por PayPal diretamente pela plataforma da Nossa Feira. Você precisará acessar sua conta comercial no PayPal e fazer o reembolso manualmente por lá. Essa é uma funcionalidade que esperamos desenvolver no futuro, caso haja demanda suficiente dos usuários.

{% hint style="warning" %}
Se nenhum desses passos ajudar, ou se houver outro problema em que você gostaria de conselhos, entre em contato com sua[ equipe local de suporte da Nossa Feira](local-ofn-organizations-and-contacts.md), que fará o possível pra retornar com soluções e ajuda o mais rápido possível.
{% endhint %}

## Como meus clientes podem editar os pedidos depois que foram feitos?

Ocasionalmente, um cliente pode fazer um pedido na sua empresa de alimentos e depois mudar de ideia ou lembrar que esqueceu de adicionar alguns itens. Existem alguns cenários:

#### Permitir que o cliente edite os próprios pedidos

Nas Configurações da sua Empresa, na aba [Preferências da Loja](basic-features/enterprise-profile/enterprise-settings.md#shop-preferences), você pode habilitar 'Alterar Pedidos'

![](.gitbook/assets/changeorders.jpg)

Isso significa que os clientes podem:

* Remover itens da cesta ou cancelar o pedido inteiro.
* Aumentar a quantidade de produtos que já estão na cesta, desde que o pedido não tenha sido feito pelo sistema de assinatura.

{% hint style="warning" %}
Os clientes não poderão adicionar produtos adicionais à cesta. Ao fazer isso, serão levados de novo ao checkout pra pagar por esses itens. Os dois pedidos aparecerão nos seus relatórios um após o outro se ordenados pelo nome do cliente, então podem ser embalados juntos (se você quiser) na preparação pra coleta.
{% endhint %}

#### Editar pedidos em nome do cliente somente

Você pode adicionar uma mensagem à sua [página de Avisos da Vitrine](basic-features/enterprise-profile/enterprise-settings.md#shop-preferences) pedindo que os clientes entrem em contato por email ou telefone se quiserem ajustar os pedidos. Produtos podem ser adicionados ou removidos dos pedidos usando os passos descritos [aqui](basic-features/orders/view-orders.md#editing-an-order).

{% hint style="warning" %}
Note que adicionar itens a um pedido exigirá a coleta de [pagamentos adicionais](basic-features/orders/refunds-and-adjusting-payments.md#collecting-additional-payments).
{% endhint %}

#### O pedido foi feito por uma assinatura.

Pra informações sobre como editar um pedido feito pelo sistema de assinaturas veja:

* [aqui](basic-features/subscriptions/subscriptions-faqs.md#can-i-or-the-customer-edit-an-order-which-has-been-placed-by-subscription-system) pra pedidos avulsos
* [aqui](basic-features/subscriptions/subscriptions-faqs.md#what-if-i-change-the-subscription-while-its-open) pra editar o pedido base da assinatura.

## Não quero mais vender pela Nossa Feira, como fecho minha loja?

Na seção de detalhes primários das suas [configurações da empresa](https://guide.openfoodnetwork.org/basic-features/enterprise-profile/enterprise-settings#primary-details), altere Visível na Busca de 'público' pra 'ocultar todas as referências'. Isso removerá sua empresa de todos os lugares em que ela é listada na nossa plataforma. Você pode fazer login novamente a qualquer momento e mudar as configurações de visibilidade de volta pra 'público' se decidir reabrir sua empresa ou repassá-la a outra pessoa; caso contrário, sua empresa ficará inativa.&#x20;
