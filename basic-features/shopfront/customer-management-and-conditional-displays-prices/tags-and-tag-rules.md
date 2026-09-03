# Tags e Regras de Tag

Uma vez que os clientes estão agrupados em categorias com tags, você pode customizar a experiência de compra deles das seguintes formas:

* Tornar variantes específicas visíveis/invisíveis
* Tornar métodos de envio específicos visíveis/invisíveis
* Tornar métodos de pagamento específicos visíveis/invisíveis
* Tornar ciclos de pedidos visíveis/invisíveis

Mais frequentemente esse recurso é necessário por empresas que têm configurações de loja diferentes pra membros/não-membros ou grupos diferentes de clientes como atacado/varejo. Mais exemplos podem ser encontrados na nossa seção [Como Fazer](../../../hub-management-tips/how-tos/).

## Como configurar uma regra de tag

Para acessar Regras de Tag, vá em Empresas -> Configurações -> Regras de Tag.

![](../../../.gitbook/assets/tag1.jpg)

## Por padrão

Por padrão, _**todos os itens** ficam visíveis a **todos os clientes**_ estejam eles marcados com tag ou não.\
Você pode alterar as regras de exibição padrão selecionando **+adicionar nova regra padrão**.

No exemplo abaixo, por padrão, todos os Ciclos de Pedidos marcados com 'atacado' ficarão invisíveis.\
(Para este exemplo, apenas clientes marcados com 'clienteatacado' podem ver (e portanto comprar) de Ciclos marcados como 'atacado'.)

![](../../../.gitbook/assets/tag2.jpg)

{% hint style="warning" %}
Note que apenas tags em **minúsculas** são suportadas no momento.
{% endhint %}

## Regras de tag

Uma vez que você definiu regras padrão, pode configurar exceções pra grupos específicos de clientes.

* Primeiro defina o grupo de clientes ao qual a exceção se aplicará. No exemplo acima, a exceção foi aplicada a todos os clientes com a tag 'clienteatacado'.
* Depois, para esse grupo, você pode escolher customizar a experiência de compra de uma das quatro formas:

![](../../../.gitbook/assets/tag3.jpg)

{% hint style="warning" %}
Lembre de adicionar as tags relevantes a variantes, métodos de envio ou pagamento, ou ciclos, além dos clientes, depois de configurar uma regra padrão ou condicional!
{% endhint %}

Agora vamos ver cada opção:

### **Mostrar ou Ocultar Variantes na vitrine**

Essa regra permite tornar variantes específicas visíveis/invisíveis a clientes marcados. Pra essa regra funcionar você precisa ter marcado o cliente e a variante do produto **no seu estoque próprio** (não na lista de produtos do produtor) com a mesma tag.

No exemplo abaixo, a variante 'Fuji' do produto 'Maçãs' foi marcada como 'membro'. Assim seria possível configurar regras de tag pra que, por padrão, apenas a variante 'Gala' (sem tag) apareça na vitrine, a menos que o cliente pertença a um grupo de compradores marcados como 'membro' (nesse caso, poderiam ver ambas as opções Fuji e Gala).

![](<../../../.gitbook/assets/tag product.jpg>)

### **Mostrar/Ocultar métodos de envio**

Essa regra permite tornar métodos de envio específicos disponíveis ou indisponíveis a certos clientes. Pra essa regra funcionar você precisa ter marcado o cliente e o método com a mesma tag. Pra marcar um método de envio, vá em **editar** [**método de envio**](../shipping-methods.md) e aplique a tag relevante.

![](<../../../.gitbook/assets/tag shipping.jpg>)

Nesse exemplo, o método de envio 'Coleta local grátis pra membros' foi atribuído a clientes com a tag 'membro'. Você poderia então configurar:

* uma regra padrão: métodos de envio marcados 'membro' são invisíveis
* uma regra condicional: para clientes marcados 'membro', o método marcado 'membro' é visível

Assim, apenas membros poderiam optar por coletar suas compras gratuitamente.

### **Mostrar/Ocultar métodos de pagamento**

Essa regra permite tornar métodos de pagamento específicos disponíveis ou indisponíveis a clientes específicos.

{% hint style="info" %}
Essa regra pode ser útil se você só quer oferecer aos membros a opção de pagar em dinheiro na coleta (mas força não-membros a pagar antecipado por cartão), ou se quer oferecer aos clientes atacadistas apenas a opção de pagar por transferência bancária.
{% endhint %}

Pra essa regra funcionar você precisa ter marcado o cliente e o método de pagamento com a mesma tag. Pra aplicar uma tag a um [método de pagamento](../payment-methods.md), vá em Empresas -> Configurações -> Métodos de Pagamento e selecione editar.

![](<../../../.gitbook/assets/tag payment meth.jpg>)

Nesse exemplo, o método 'Pagamento por transferência bancária' foi atribuído a clientes com a tag 'membro'. Você poderia configurar:

* regra padrão: métodos de pagamento marcados 'membro' são invisíveis
* regra condicional: para clientes marcados 'membro', o método marcado 'membro' é visível

Assim, apenas membros poderiam optar por pagar por transferência.

### **Mostrar/Ocultar ciclos de pedidos na vitrine**

Essa regra permite tornar certos ciclos visíveis apenas a certos clientes.

{% hint style="info" %}
Essa regra pode ser útil se você quer abrir dois ciclos concorrentes com taxas da empresa diferentes. Por exemplo, um pra clientes atacadistas — exibindo produtos em lote e taxas menores — enquanto outro seria visível ao público e listaria produtos em quantidades menores mas com margem maior.
{% endhint %}

Pra essa regra funcionar você precisa ter marcado o cliente e o ciclo com a mesma tag. Pra marcar um ciclo, veja a aba Tags na seção sainte de um ciclo (página 3 do [Ciclo de Pedidos](../order-cycle/order-cycles-for-hubs.md#3-outgoing-products)).

![](<../../../.gitbook/assets/tag oc.jpg>)

Nesse exemplo, o Ciclo de Pedidos foi atribuído a clientes com a tag 'atacado'. Você poderia configurar:

* regra padrão: ciclos marcados 'atacado' são invisíveis
* regra condicional: para clientes marcados 'atacado', o ciclo marcado 'atacado' é visível

Assim, apenas clientes atacadistas poderiam comprar deste ciclo.

## Preços específicos por cliente

Às vezes os usuários querem cobrar preços diferentes pra clientes diferentes, frequentemente baseado no status de membro vs não-membro (ou atacado vs varejo). Atualmente não há forma de automaticamente cobrar preços diferentes pra membros vs não-membros, mas há formas alternativas de alcançar o mesmo.

Você pode usar **marcação de clientes** com regras de tag pra fazer isso:

* Tornar certas [variantes](tags-and-tag-rules.md#show-or-hide-variants-in-my-shopfront) disponíveis apenas a grupos específicos: por exemplo, 'compras em lote' com taxa reduzida por peso disponíveis apenas a clientes com tag de atacado.
* Rodar mais de um [Ciclo de Pedidos](tags-and-tag-rules.md#show-hide-order-cycles-at-my-shopfront) concorrentemente com apenas membros (ou clientes atacadistas) podendo ver e comprar do ciclo com taxa da empresa menor.
* Você poderia usar [taxas do método de envio](tags-and-tag-rules.md#show-hide-shipping-methods) pra cobrar preços diferentes. Pra garantir que apenas membros selecionem a 'taxa de membro' reduzida, precisaria adicionar uma tag a esse método (senão qualquer um poderia 'trapacear' e selecionar o método mais barato).
* Se você tornar um [método de pagamento](tags-and-tag-rules.md#show-hide-payment-methods) como dinheiro na coleta disponível apenas a membros, então adicionaria uma margem a todos os outros métodos, cobrando mais dos não-membros.

{% hint style="info" %}
Além do uso de tags, algumas empresas optam por configurar duas centrais: uma para clientes atacadistas/membros apenas (veja Vitrine Privada) e uma pra todos os outros.

Usando o recurso de [Estoque Próprio](../../products-1/inventory-tool.md), as duas lojas podem oferecer os mesmos produtos mas você pode definir preços independentemente pra cada.

Esse método oferece mais flexibilidade: preços podem ser ajustados pra grupos de clientes caso a caso em vez de uma porcentagem ou diferença fixa.
{% endhint %}
