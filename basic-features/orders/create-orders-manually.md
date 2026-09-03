# Criar pedidos manualmente

Às vezes você quer criar manualmente um pedido no sistema. Pode ser em nome de um cliente, ou pra que seus relatórios capturem um pedido de um canal de vendas diferente. Você cria um pedido indo em **Pedidos** e clicando no botão **+ Novo Pedido**.

![](../../.gitbook/assets/manual1.jpg)

Você será conduzido por um processo passo a passo pra criar o pedido:

![](../../.gitbook/assets/manual2.jpg)

Primeiro, será solicitado a selecionar o distribuidor com o qual o pedido será feito.\
Em seguida, precisa selecionar o ciclo de pedidos em que o pedido será colocado. Sua escolha de ciclo ditará quais produtos estarão disponíveis pra serem adicionados e as taxas aplicadas. Clique em próximo uma vez completado esses campos.

Você verá então a tela de detalhes do cliente onde pode escolher um cliente da sua lista de [clientes](../shopfront/customer-management-and-conditional-displays-prices/customers.md). Informe três ou mais caracteres na caixa 'escolha um cliente' e selecione seu cliente:

<figure><img src="../../.gitbook/assets/manual3.jpg" alt=""><figcaption></figcaption></figure>

Selecionar um cliente vai preencher automaticamente o endereço de entrega e cobrança salvo, economizando tempo. Você também pode informar os dados do cliente manualmente se ele não está salvo na sua lista completando os campos na tela.

Clique em 'Atualizar' pra salvar o progresso, depois vá em 'Detalhes do pedido' no menu à direita pra começar a informar produtos:

<img src="../../.gitbook/assets/order details man.jpg" alt="" data-size="original">\
Você será redirecionado à página de Detalhes do Pedido onde pode selecionar produtos. Você precisa digitar pelo menos os 3 primeiros caracteres do produto pra ele aparecer como opção na lista suspensa:

<figure><img src="../../.gitbook/assets/manual5.jpg" alt=""><figcaption></figcaption></figure>

Após encontrar o produto que quer pedir, informe a quantidade e clique no botão **+** à direita do produto pra adicioná-lo ao carrinho.

![](../../.gitbook/assets/manual6.jpg)

Uma vez adicionado, você pode editar a quantidade selecionando o ícone de caneta e papel à direita:

![](../../.gitbook/assets/manual7.jpg)

Após editar qualquer aspecto do carrinho, clique em **atualizar e recalcular taxas** pra atualizar o preço.

Um dos métodos de envio disponíveis oferecidos pela empresa distribuidora será selecionado por padrão. Você pode editar isso, além de adicionar detalhes de rastreamento ou nota, da mesma forma que ao [editar um pedido existente](view-orders.md#editing-an-order).

O passo final é adicionar o método de pagamento do cliente. Isso está no menu à direita:

![](../../.gitbook/assets/manual8.jpg)

{% hint style="warning" %}
Nota, se você opta por um [método de pagamento](../shopfront/payment-methods.md) fornecido pelo **Stripe**, será direcionado a informar os dados do cartão do cliente.\
&#x20;<img src="../../.gitbook/assets/stripeextra.jpg" alt="" data-size="original">
{% endhint %}

{% hint style="danger" %}
Você NUNCA deve anotar os dados do cartão de um cliente.
{% endhint %}

{% hint style="success" %}
A melhor prática é completar o formulário acima direto no computador/tablet/celular enquanto o cliente lê os números por telefone.
{% endhint %}

{% hint style="danger" %}
Você não conseguirá optar por um [método de pagamento](../shopfront/payment-methods.md) fornecido pelo **PayPal** para um pedido criado manualmente.

<img src="../../.gitbook/assets/paypalnewpayment (1).jpg" alt="" data-size="original">
{% endhint %}

Clicando em **atualizar** o pedido será finalizado e um email de confirmação será enviado ao cliente.
