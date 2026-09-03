# Precificação de carnes e outros produtos 'inteiros' com peso desconhecido

Aqui nos referimos a produtos como _**'irregulares'**_ quando são vendidos por peso/volume mas a quantidade exata só é conhecida no momento da colheita/distribuição.

Por exemplo: peças de carne, fatias de queijo, vegetais grandes.

Existem várias ferramentas na plataforma para ajudar a gerenciar e organizar essas vendas.

## Opção 1: Definir peso/preço médio e reembolsar

Você pode cobrar o preço médio do produto e depois reembolsar ou cobrar extra do cliente, se o peso real desviar da média.

Quando você sabe o peso real dos produtos (ou seja, quando está preparando os pedidos pra retirada pelos clientes), acesse "Gerenciamento de Pedidos em Lote" (Pedidos -> Gerenciamento em Lote) e adicione a coluna Peso/Volume à tabela.

![](<../../.gitbook/assets/edit weight of irregular product (1).jpg>)

Você pode então alterar o peso exibido para cada comprador em um determinado pedido e produto. O preço será recalculado automaticamente de acordo com a quantidade informada.

{% hint style="info" %}
Não esqueça de reenviar o email de confirmação de pedido pro cliente pra notificar sobre a diferença de preço e valores que ele possa dever.
{% endhint %}

## Opção 2: Exibir faixas de preço

Mesma lógica da Opção 1, mas em vez de exibir um preço médio inicialmente, indica uma faixa. Essa solução tem a vantagem de deixar claro pro comprador que o preço final provavelmente vai ser modificado.

[Variantes](product-variants.md) também podem ser utilizadas para criar diferentes faixas.

> **Exemplo 1** (produto único com uma variante):\
> Produto = Frango (entre 1,5 e 2,5 kg com preço conforme peso, R$ 40 / kg)
>
> **Exemplo 2** (duas variantes para um produto):\
> Produto = Frango (R$ 40 / kg)\
> Variante 1 = Frango pequeno (entre 1,5 e 2 kg, preço conforme peso real)\
> Variante 2 = Frango grande (entre 2,5 e 3,5 kg, preço conforme peso real)...

## Opção 3: Criar variantes com preços fixos

Uma versão um pouco mais simples da Opção 2 é criar variantes para seus produtos baseadas em faixas de peso mas cobrar um **preço fixo** para todos os itens que caírem na faixa.\
Por exemplo, se abóbora custa R$ 6/kg, você poderia listar as variantes com os seguintes preços fixos:

* Pequena (0,7 - 0,9 kg)      R$ 5,00
* Média (0,9 - 1,1 kg)          R$ 6,00
* Grande (1,1 - 1,3 kg)          R$ 7,50
* Extra Grande (1,3 - 1,5 kg) R$ 9,00

## Opção 4: Criar variantes com pesos conhecidos

Se você sabe o peso de todos os seus bifes, por exemplo, com antecedência, pode usar a funcionalidade de variantes pra exibir diretamente o preço preciso de cada item. Exemplo:

![](../../.gitbook/assets/knownweight.jpg)

## Editando pedidos

Pode ser difícil pra produtores de carne saber com antecedência sobre a disponibilidade do produto ou preparar embalagens adequadamente. (Até o abate, o peso de um frango ou de uma perna de cordeiro pode ser desconhecido.)

Isso não é um problema, pois os pedidos podem ser modificados (adicionando, modificando ou deletando produtos) se necessário. Para mais informações, veja [Pedidos](../orders/).

## Reembolsando ou cobrando a diferença dos clientes: como funciona?

Se um cliente _**paga pelos produtos na retirada**_ ou entrega, o gerente da central pode modificar o pedido antes do pagamento de acordo com o peso real e produtos efetivamente entregues. Nesse caso, não haverá necessidade de reembolsar ou refaturar o cliente.

Se um pedido é _**pago online antes da entrega**_, você precisa reembolsar ou faturar a diferença entre valores já recebidos e o valor devido pelos produtos precisos a serem entregues. Veja [como](../orders/refunds-and-adjusting-payments.md).

{% hint style="danger" %}
Uma alternativa é usar um sistema de pagamento online para armazenar temporariamente o valor "pendente" até que o pedido seja validado.

_Esse recurso ainda não está implementado na Nossa Feira. Também estamos trabalhando na implementação automatizada de "créditos" que permitam a uma central reembolsar em forma de nota de crédito que o cliente pode usar como parte do pagamento do próximo pedido._
{% endhint %}

## Informar o comprador sobre sua política de preços

Você pode notificar seus clientes sobre suas políticas de preços para itens de peso variável (como carnes) na [caixa de mensagem](../enterprise-profile/enterprise-settings.md#shop-preferences) exibida no topo da vitrine. Fica em Configurações da Empresa -> Preferências da Loja.

Pode ser útil também adicionar um lembrete dessas políticas na descrição dos [Métodos de Pagamento](../shopfront/payment-methods.md). Por exemplo: "Lembre que o preço final pode variar em até 10% dependendo do peso se você comprou itens não divisíveis como carnes ou vegetais grandes."
