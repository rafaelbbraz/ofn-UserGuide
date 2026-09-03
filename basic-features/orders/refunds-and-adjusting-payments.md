# Reembolsos e ajuste de pagamentos

De tempos em tempos, um cliente pode pedir que o pedido dele seja ajustado — adicionando ou removendo um item.

Em outras ocasiões você, como gestor do negócio, pode precisar alterar um pedido. Cenários comuns:

1. Um produto não foi entregue por um fornecedor.
2. Um produto teve qualidade menor que o esperado.
3. Um pedido contém produtos com peso variável como [carnes ou vegetais grandes](../products-1/pricing-irregular-items-kg.md#option-one-set-an-average-weight-price-and-reimburse) (itens inteiros precificados por peso).

O processo de emitir um reembolso ou solicitar pagamento adicional depende do [método de pagamento](../shopfront/payment-methods.md) usado.

{% hint style="warning" %}
Na Nossa Feira, reembolsos e pagamentos adicionais só podem ser feitos **automaticamente** usando o provedor de [Método de Pagamento](../shopfront/payment-methods.md) **Stripe/Stripe SCA**.
{% endhint %}

## Reembolsos

Usando a Nossa Feira, você pode processar um [reembolso total](refunds-and-adjusting-payments.md#total-refund), que reembolsa a totalidade do pedido, ou um [reembolso parcial](refunds-and-adjusting-payments.md#partial-refund), que você pode usar quando um item não estava disponível por exemplo.

{% hint style="warning" %}
Se você tem Stripe integrado como Método de Pagamento, pode fazer login na sua conta Stripe e emitir uma fatura ao cliente pelo Stripe. O cliente receberá um email pedindo pra pagar com cartão, mas atenção: a Nossa Feira não será notificada dessa transação e você ainda precisará capturar manualmente o pagamento como recebido na plataforma.
{% endhint %}

### Reembolso total

Pra emitir um _reembolso total_, selecione o método de pagamento relevante nas abas abaixo:

{% tabs %}
{% tab title="Dinheiro/Pix" %}
Para métodos não-automatizados (dinheiro na coleta ou transferência), há dois cenários:

**O cliente ainda não pagou pelo item.**\
Se um cliente faz um pedido selecionando dinheiro na coleta ou transferência e o pagamento não foi capturado no sistema, aparece como 'estado do pagamento: saldo devedor':

![](../../.gitbook/assets/balance.jpg)

Você pode [cancelar o pedido](refunds-and-adjusting-payments.md#marking-an-order-as-cancelled) imediatamente seguindo os passos abaixo.

**O cliente já pagou pelo item.**

Quando [visualizando pedidos](view-orders.md#listing-orders) o pedido aparece como 'estado do pagamento: pago' e 'Estado da entrega: Pronto':

![](<../../.gitbook/assets/paid not shipped.jpg>)

1. Organize o reembolso ao cliente fora da plataforma Nossa Feira.
2. Registre essa ação em [**Pedidos -> Editar**](view-orders.md#editing-an-order) e selecione a aba 'Pagamentos' no menu à direita.\
   Selecione o 'X' à direita do pagamento pra anulá-lo.

![Antes de marcar o pagamento como anulado](../../.gitbook/assets/void1.jpg)

![Depois de marcar como anulado, o status muda para 'anulado'](../../.gitbook/assets/void2.jpg)

Depois [marque o pedido como 'cancelado'](refunds-and-adjusting-payments.md#marking-an-order-as-cancelled) usando os passos abaixo.
{% endtab %}

{% tab title="Stripe" %}
Pagamento de pedido é coletado automaticamente na criação (exceto por [assinaturas](../subscriptions/)) e na [listagem de Pedidos](view-orders.md#listing-orders) o pedido aparece como:

!['Estado do pagamento = pago'](<../../.gitbook/assets/paid not shipped.jpg>)

Pra processar o reembolso total, vá em [**Pedidos -> Editar**](view-orders.md#editing-an-order) e selecione 'Pagamentos' no menu à direita.\
Clique no '**X**' à direita do pagamento pra anulá-lo.

![](../../.gitbook/assets/void1.jpg)

Isso automaticamente envia o pagamento de volta ao cartão usado pelo cliente.

{% hint style="info" %}
Pagamentos Stripe podem levar 3-5 dias úteis pra aparecer no extrato bancário do cliente.
{% endhint %}

Uma vez emitido o reembolso, siga os passos abaixo pra [cancelar o pedido](refunds-and-adjusting-payments.md#marking-an-order-as-cancelled).
{% endtab %}

{% tab title="PayPal" %}
Pagamento é coletado automaticamente no checkout e na [listagem de Pedidos](view-orders.md#listing-orders) o pedido aparece como:

!['Estado do pagamento = pago'](<../../.gitbook/assets/paid not shipped.jpg>)

Ir na tela de 'pagamentos' em Pedidos -> Editar mostrará o método usado:

![](<../../.gitbook/assets/paypal (2).jpg>)

{% hint style="danger" %}
**Pedidos feitos e pagos via PayPal não podem ser reembolsados pela plataforma da Nossa Feira.**
{% endhint %}

Pra reembolsar o cliente, você precisa fazer login na [sua conta PayPal](https://www.paypal.com/br/home) e emitir o valor de volta à conta do cliente pela interface do PayPal.

Uma vez feito isso, você pode [marcar o pedido como cancelado](refunds-and-adjusting-payments.md#marking-an-order-as-cancelled) usando os passos abaixo.
{% endtab %}
{% endtabs %}

#### Marcando um pedido como cancelado

Uma vez emitido o reembolso, você pode agora cancelar o pedido. [Edite o pedido](view-orders.md#editing-an-order) e selecione 'Cancelar Pedido' em 'Ações' (botão azul superior direito).

![](<../../.gitbook/assets/cancel order.jpg>)

{% hint style="success" %}
O cliente receberá um email dizendo que o pedido foi cancelado.
{% endhint %}

{% hint style="info" %}
Cancelar um pedido **atualiza automaticamente os níveis de estoque**. Por exemplo, se uma loja tinha cinco pães em estoque e um cliente pediu três, o estoque mostraria dois. Cancelar o pedido do cliente atualiza automaticamente pra cinco em estoque novamente.
{% endhint %}

{% hint style="danger" %}
Note que você não pode cancelar um pedido que foi marcado como 'Enviado'.
{% endhint %}

### Reembolso parcial

Pra emitir um reembolso parcial, você precisa primeiro editar o pedido pra alterar o saldo devido. Há duas formas principais de [editar um pedido](view-orders.md#editing-an-order) quando você quer emitir um reembolso parcial. Você pode ajustar quantidades de itens ou fazer um ajuste:

**1. Edite a quantidade de um item** indo em [Pedidos -> editar](view-orders.md#adding-and-removing-products-from-an-order) pedido e clicando no ícone 'editar' ao lado do item (destacado em vermelho abaixo) ou delete o item completamente usando o ícone de 'lixeira' (destacado em verde abaixo):

<figure><img src="../../.gitbook/assets/adjust order.jpg" alt=""><figcaption></figcaption></figure>

Ou você pode _reduzir_ a quantidade editando o valor, lembrando de clicar no botão 'check' pra salvar:

<figure><img src="../../.gitbook/assets/edit quant.jpg" alt=""><figcaption></figcaption></figure>

Selecione **'Atualizar e Recalcular Taxas'** no rodapé da página pra salvar as alterações.

{% hint style="danger" %}
Se o produto foi deletado pelo fornecedor da lista mestra de [produtos](../products-1/), não será possível editar essa página. Nesse caso, use o método de 'ajustes' abaixo.
{% endhint %}

**2. Edite adicionando um novo Ajuste** ao [**pedido**](view-orders.md#modify-an-order) indo em **Pedidos -> Editar -> Ajustes** no menu à direita e selecionando **+ Novo Ajuste** no canto superior direito.

<figure><img src="../../.gitbook/assets/adjustments 1 (1).jpg" alt=""><figcaption></figcaption></figure>

Adicione os detalhes relevantes, lembrando que pra **um reembolso**, o valor precisa ser um **número negativo**. Quando terminar, clique em 'continuar':

<figure><img src="../../.gitbook/assets/adjustments 2.jpg" alt=""><figcaption></figcaption></figure>

{% hint style="success" %}
Você pode usar 'Ajustes' pra reembolsar parcialmente um cliente por um produto abaixo do padrão.
{% endhint %}

Uma vez que o pedido foi alterado para refletir produtos ausentes/ajustados ou o novo ajuste, o pedido aparecerá com o estado de pagamento **'Crédito devido'** pelo valor que o cliente não precisa mais pagar.

**Processar o reembolso parcial**\
Pra processar um reembolso parcial do valor agora devido, veja as instruções escolhendo o método de pagamento nas abas:

{% tabs %}
{% tab title="Dinheiro/Pix" %}
1. Organize o reembolso ao cliente fora da plataforma.
2. Registre essa ação indo em **Pedidos -> Editar** e selecionando 'Pagamentos' no menu à direita, depois '**+ Novo Pagamento**':

<figure><img src="../../.gitbook/assets/manual8.jpg" alt=""><figcaption></figcaption></figure>

Informe um **valor negativo** no campo 'Valor' pra registrar o reembolso como feito.

{% hint style="info" %}
O botão **+ Novo Pagamento** só ficará visível se você já adicionou um ajuste (ex: o estado do pagamento é 'crédito devido').
{% endhint %}
{% endtab %}

{% tab title="Stripe" %}
Usando a Nossa Feira, você pode automaticamente reembolsar um cliente que pagou por Stripe. Isso vai diretamente processar o reembolso ao cartão.

1. Vá em **Pedidos -> Editar Pedido** e depois selecione 'Pagamentos' no menu à direita.
2. Como você criou o ajuste no passo anterior, a tela de pagamento agora dirá '**Crédito Devido**' com o valor especificado. Clicando no check ao lado do pagamento, qualquer crédito devido ao cliente será automaticamente reembolsado.

![](<../../.gitbook/assets/stripe credit owe.jpg>)

{% hint style="danger" %}
Clicar no 'X' vai **anular todo o pagamento** e emitir um **reembolso total** ao cliente.
{% endhint %}

{% hint style="warning" %}
Pagamentos Stripe podem levar 3-5 dias úteis pra aparecer no extrato do cliente.
{% endhint %}
{% endtab %}

{% tab title="PayPal" %}
**Você não pode emitir um reembolso parcial a um cliente que pagou por PayPal automaticamente pela plataforma no momento.**

1. Você precisa fazer login na sua [conta PayPal comercial](https://www.paypal.com/br/home) e reembolsar o cliente pelo valor correto pela interface.
2. Pra registrar essa ação, você precisa configurar um novo [Método de Pagamento](../shopfront/payment-methods.md):\
   Nome= 'Reembolsos PayPal'\
   Exibição = 'Apenas back office'\
   Provedor de pagamento = 'dinheiro/pix/etc'.
3. Vá em **Pedidos -> Editar Pedido -> Pagamentos** (no menu à direita).
4. Selecione **+Novo Pagamento** e selecione 'Reembolsos PayPal'.

Um valor negativo no campo 'Valor' significa que um reembolso é registrado.

{% hint style="danger" %}
Se você optar por adicionar um novo pagamento com o provedor 'PayPal', isso não será possível:
{% endhint %}

![](<../../.gitbook/assets/paypal refund hack.jpg>)
{% endtab %}
{% endtabs %}

## Coletando pagamentos adicionais

Siga os passos acima para [Reembolsos parciais](refunds-and-adjusting-payments.md#partial-refund) pra adicionar itens extras ao pedido de um cliente ou fazer ajustes pela página de [Gerenciamento em Lote](../products-1/group-buy-for-bulk-ordering.md#adjusting-orders-to-make-complete-batches).

Os pedidos aparecerão com Estado do Pagamento = 'Saldo Devedor':

<figure><img src="../../.gitbook/assets/balance.jpg" alt=""><figcaption></figcaption></figure>

Pra registrar o pagamento do valor extra devido, vá em [Pedidos -> Editar Pedido](view-orders.md#editing-an-order) e depois 'Pagamentos'.\
Selecione **+ Novo Pagamento** (botão azul superior direito).

1. Se o cliente deu o dinheiro devido em **dinheiro ou transferência**, registre da mesma forma que detalhado pra reembolso, mas use um valor positivo no campo 'Valor'.
2. Se o cliente está presente ou ao telefone, você pode receber o pagamento extra por **Stripe**. Você precisará dos dados do cartão do cliente. Você também pode fazer login na sua conta Stripe e emitir uma fatura ao cliente pelo Stripe. O cliente receberá um email pedindo pra pagar com cartão, mas atenção: a Nossa Feira não será notificada dessa transação e você ainda precisará capturar manualmente o pagamento como recebido.

{% hint style="warning" %}
Coleta de pagamentos adicionais via PayPal não é possível no momento.
{% endhint %}

{% hint style="warning" %}
Se um método de pagamento tem uma taxa associada, a taxa será registrada pelo sistema cada vez que você coleta dinheiro extra do cliente ou emite um reembolso.
{% endhint %}

## Acompanhando saldos de pagamento dos clientes

Valores devidos (crédito) ou a receber (débito) para **pedidos individuais** podem ser visualizados na sua [página de listagem de pedidos admin](view-orders.md).

{% hint style="warning" %}
Lembre que apenas pagamentos para métodos integrados (PayPal e Stripe) são automaticamente capturados pela plataforma. Se um cliente paga por dinheiro ou transferência (ou similar), você precisa [capturar esse pagamento](view-orders.md#capturing-a-payment) manualmente pra manter os registros atualizados.
{% endhint %}

Você pode querer permitir que seus clientes de confiança paguem (por transferência) uma vez por mês por todos os pedidos daquele período, ou dar a quem tem restrições de fluxo de caixa uma semana de tolerância. Pra acompanhar saldos **individuais dos clientes** com seu negócio, visite sua lista de [Clientes](../shopfront/customer-management-and-conditional-displays-prices/customers.md). O valor de crédito/débito devido é exibido à direita de cada entrada do cliente.

![](<../../.gitbook/assets/customer add tag (1).jpg>)
