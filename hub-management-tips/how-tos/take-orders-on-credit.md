# Receber pedidos em crédito

## Introdução

Embora esse recurso ainda não esteja embutido na Nossa Feira, com alguns passos rápidos é possível permitir que clientes paguem com crédito pré-pago. Em resumo, isso envolve primeiro criar um produto de crédito que o cliente finaliza a compra. O gerente da loja então vai ao painel admin e 'deleta' esse produto, colocando 'crédito' na conta do cliente. Pedidos futuros podem então ser 'pagos' com o crédito da conta.

## Processo

Primeiro crie um produto de crédito no admin. Ao criar o [produto](../../basic-features/products-1/) no admin, crie também uma variante chamada 'Crédito Placeholder' por R\$ 0 e com '0' de 'em mãos'. Isso será útil depois no admin de pedidos. Depois adicione todas as variantes a um [ciclo de pedidos](../../basic-features/shopfront/order-cycle/) pra vender crédito pré-pago aos clientes.

<figure><img src="../../.gitbook/assets/prod 1.jpg" alt=""><figcaption></figcaption></figure>

Aqui um exemplo de produto de crédito na vitrine que o cliente pode escolher pra adicionar 'crédito' à conta.

<figure><img src="../../.gitbook/assets/credit shop.jpg" alt=""><figcaption></figcaption></figure>

Instrua o cliente a escolher a quantidade de crédito que quer aplicar à conta e finalizar o pedido. Garanta que ele 'salve' as informações da conta escolhendo 'LOGIN' no checkout e criando uma conta com senha.

![image3](https://user-images.githubusercontent.com/88801240/207040600-029c79d3-f975-4985-849d-4af2f0df0085.png)

Agora no admin você terá o pedido dele com a quantidade de crédito que está comprando.

<figure><img src="../../.gitbook/assets/order 1.jpg" alt=""><figcaption></figcaption></figure>

Uma vez que ele pagou o pedido, você pode 'capturar' o pagamento usando o check verde.

<figure><img src="../../.gitbook/assets/order 1 paid.jpg" alt=""><figcaption></figcaption></figure>

Depois você precisa entrar e 'editar' o pedido, mas primeiro precisará adicionar 'em mãos' ao produto 'crédito placeholder'. Adicione a quantidade 'em mãos' igual ao número de pedidos de crédito que está processando naquele momento (ex: você tem 1 pedido de crédito, adicione '1' como 'em mãos' à variante 'crédito placeholder' e SALVE).

<figure><img src="../../.gitbook/assets/prod 2.jpg" alt=""><figcaption></figcaption></figure>

Agora você pode voltar à lista de pedidos e escolher ['editar' o pedido de crédito](../../basic-features/orders/).

Primeiro, você precisará adicionar o 'Crédito Placeholder' ao pedido.

<figure><img src="../../.gitbook/assets/order edit 1.jpg" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/order edit 2.jpg" alt=""><figcaption></figcaption></figure>

Agora você pode deletar o outro produto 'crédito' do pedido (adicionar a variante 'crédito placeholder' primeiro impede que o pedido inteiro seja cancelado; esse passo seria desnecessário se o pedido já contivesse outros produtos).

<figure><img src="../../.gitbook/assets/order edit 3.jpg" alt=""><figcaption></figcaption></figure>

Agora na sua lista de pedidos o estado do pagamento pro pedido reverterá pra 'crédito devido' pelo valor do crédito pré-pago.

<figure><img src="../../.gitbook/assets/order 1 credit.jpg" alt=""><figcaption></figcaption></figure>

Também aparecerá assim na sua lista de clientes na aba [**Clientes**](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/) pra esse cliente.

<figure><img src="../../.gitbook/assets/customer 1.jpg" alt=""><figcaption></figcaption></figure>

E se você fizer um [**Relatório de Entrega — Gerenciamento de Ciclo**](../../basic-features/reports/reports-for-hub-management.md), mostrará saldo positivo pro cliente.

<figure><img src="../../.gitbook/assets/report 1.jpg" alt=""><figcaption></figcaption></figure>

E se o cliente fizer login na conta da Nossa Feira e for em Transações, verá um saldo corrente da conta com você.

Pra aplicar o crédito em pedidos futuros, você precisará [criar uma opção de pagamento](https://guide.openfoodnetwork.org/basic-features/shopfront/payment-methods#setting-up-a-payment-method) — 'pagar com crédito' que os clientes podem escolher no checkout pra indicar que querem que você use os créditos deles.

<figure><img src="../../.gitbook/assets/payment method 1.jpg" alt=""><figcaption></figcaption></figure>

Você pode usar [tags](https://guide.openfoodnetwork.org/basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules) se quer que essa opção esteja disponível/visível apenas pros clientes que compraram crédito pré-pago. Adicione a tag apropriada à conta do cliente:

<figure><img src="../../.gitbook/assets/customer tag 1.jpg" alt=""><figcaption></figcaption></figure>

E configure as seguintes regras de tag:

<figure><img src="../../.gitbook/assets/tags 1.jpg" alt=""><figcaption></figcaption></figure>

Garanta que você adiciona o novo método de pagamento à página 4 dos seus ciclos ('Opções de Checkout') quando configura um novo ciclo.

Isso é o que o cliente verá quando finalizar a compra.

<figure><img src="../../.gitbook/assets/customer pay.jpg" alt=""><figcaption></figcaption></figure>

Uma vez que o cliente fez um 2º pedido, aparecerá na sua lista de **Pedidos** com **Saldo Devedor**.

<figure><img src="../../.gitbook/assets/order 2.jpg" alt=""><figcaption></figcaption></figure>

Isso é o que ele verá se fizer login na conta. O valor negativo significa o saldo de crédito restante.

<figure><img src="../../.gitbook/assets/customer account 2.jpg" alt=""><figcaption></figcaption></figure>

E isso é o que você verá como gerente na sua lista de clientes.

<figure><img src="../../.gitbook/assets/customer 2.jpg" alt=""><figcaption></figcaption></figure>

E se você rodar o Relatório de Entrega.

<figure><img src="../../.gitbook/assets/delivery report 2.jpg" alt=""><figcaption></figcaption></figure>

**SE** você quer marcar o novo pedido como 'Pago', mudando o estado de 'Saldo Devedor' pra 'Pago', pode clicar no check verde à direita do pedido. (**Nota**: você pode primeiro querer verificar sua lista de clientes pra garantir que o cliente tem 'crédito devido' suficiente pra cobrir o custo do pedido. Se não tem, você pode fazer um pagamento parcial no pedido com o valor 'crédito devido' restante e depois enviar uma fatura pelo saldo.)

Agora o estado do pagamento é 'pago' na sua lista de pedidos.

<figure><img src="../../.gitbook/assets/order 2 paid.jpg" alt=""><figcaption></figcaption></figure>

Mas no registro do cliente e na sua lista de clientes, o saldo corrente reverterá pro valor total pré-pago.

<figure><img src="../../.gitbook/assets/customer tag 1.jpg" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/customer account 3.jpg" alt=""><figcaption></figcaption></figure>

Pra creditar o pagamento do 2º pedido ao saldo corrente de crédito, agora precisamos ir naquele pedido original de crédito e fazer um pagamento negativo no valor do 2º pedido (ex: -R\$ 5,70).

Primeiro edite o pedido original de crédito.

<figure><img src="../../.gitbook/assets/edit order 1.jpg" alt=""><figcaption></figcaption></figure>

Depois escolha Pagamentos no menu à direita. Escolha Novo Pagamento no menu superior direito.

<figure><img src="../../.gitbook/assets/credit new pay.jpg" alt=""><figcaption></figcaption></figure>

Informe o valor do pedido pago que foi 'pago com crédito' precedido por sinal de menos (ex: -R\$ 5,70) e escolha 'Pagar com Crédito', depois 'Atualizar'.

<figure><img src="../../.gitbook/assets/new pay.jpg" alt=""><figcaption></figcaption></figure>

'Capture' esse pagamento com o check verde.

<figure><img src="../../.gitbook/assets/capture new pay.jpg" alt=""><figcaption></figcaption></figure>

Agora o 'crédito devido' foi reduzido pelo valor correto no pedido de crédito.

![image30](https://user-images.githubusercontent.com/88801240/207069952-80e23eb1-92a8-4654-931d-1bdd316d7be9.png)

E o saldo está correto na sua lista de clientes.

<figure><img src="../../.gitbook/assets/customer 2.jpg" alt=""><figcaption></figcaption></figure>

E o Relatório de Entrega mostrará o saldo atualizado pro cliente. O 2º pedido foi pago (então não é mais negativo) e o crédito ou saldo positivo foi reduzido.

<figure><img src="../../.gitbook/assets/report final.jpg" alt=""><figcaption></figcaption></figure>

E, finalmente, quando o cliente fizer login na conta, o saldo corrente e valor do crédito estarão precisos.

<figure><img src="../../.gitbook/assets/customer account 4.jpg" alt=""><figcaption></figcaption></figure>
