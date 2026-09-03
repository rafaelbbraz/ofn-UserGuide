# Métodos de pagamento

{% hint style="danger" %}
Você **precisa** criar pelo menos um método de pagamento antes de abrir sua loja.
{% endhint %}

## Configurando um método de pagamento

* Vá na página de Métodos de Pagamento clicando em **Empresas** no menu horizontal principal e depois em **Configurações** ao lado da sua empresa. A página **Métodos de Pagamento** fica no menu à esquerda.
* Clique em **Criar novo método de pagamento +**. Você será direcionado a uma página como esta:

![](<../../.gitbook/assets/payment method.jpg>)

* Marque sua empresa na caixa à direita da página em Centrais. Isso indica a qual empresa o método de pagamento se aplica. Você pode selecionar mais de uma.
* **Nome:** Escolha um nome pro método. (Ex: 'Pagar com cartão de crédito', 'Pix', 'Transferência bancária'). Esse nome é exibido no checkout e nos emails de confirmação do cliente.

![](<../../.gitbook/assets/payment checkout2.jpg>)

* **Descrição:** Forneça mais detalhes sobre o método. Por exemplo, para transferência bancária, você informaria os dados da conta bancária nessa caixa. Para Pix, a chave. Essa descrição é exibida no checkout e nos emails.
* **Exibição:** Escolha entre 'Apenas back office' ou 'Checkout e back office'.

{% hint style="info" %}
Se você quer inativar um método por um tempo mas pode oferecê-lo no futuro (por exemplo, temporariamente parar de oferecer dinheiro na coleta), mude pra 'Apenas back office'.
{% endhint %}

{% hint style="warning" %}
Alterar todos os métodos de pagamento pra 'Apenas back office' vai resultar em uma [Vitrine de Exibição](display-only-order-cycles.md) para ciclos ativos.
{% endhint %}

* **Ativo:** Selecione se esse método está atualmente visível e disponível ou não.
* **Tags:** Use regras de tags se quer disponibilizar/indisponibilizar certos métodos para clientes específicos (por exemplo, permitir apenas clientes atacadistas pagarem por transferência bancária). Mais informações [aqui](customer-management-and-conditional-displays-prices/).
* **Provedores de pagamento:** Selecione a opção relevante ao método que está criando. Opções comuns:
  * Stripe (cartão de crédito)
  * PayPal Express
  * Dinheiro / Pix / Transferência (pagamentos que não passam por gateway online e não têm validação automática)

![](<../../.gitbook/assets/payment provider.jpg>)

{% hint style="warning" %}
Lembre! Se sua empresa tem '_**Clientes podem alterar ou cancelar pedidos enquanto o ciclo está aberto**_' habilitado (em Empresas -> Configurações -> [Preferências da Loja](../enterprise-profile/enterprise-settings.md#shop-preferences)), o único provedor recomendado compatível com esse recurso é 'Dinheiro / Pix / Transferência...'
{% endhint %}

* **Calculadora:** Selecione como aplicar cobranças associadas ao método a um pedido. Note que taxas de método de pagamento podem ser zero. Veja abaixo mais informações sobre [Taxas do Método de Pagamento](payment-methods.md#fee-calculators).

Clicando em Criar, o método será criado e você terá novos campos pra definir as taxas. Os campos visíveis dependem da 'Calculadora' selecionada.

{% hint style="info" %}
Se você alterar a 'Calculadora' de Taxa do Método de Pagamento, precisa primeiro salvar (Atualizar) para os novos campos ficarem visíveis.
{% endhint %}

## Provedores de pagamento integrados

{% tabs %}
{% tab title="Stripe" %}
[Stripe](https://stripe.com/br) é uma plataforma de pagamento online. Permite aceitar pagamentos com cartão de crédito dos seus clientes. É uma plataforma global disponível em várias instâncias da Nossa Feira. Contate a equipe local pra verificar disponibilidade.

#### Por que usar Stripe?

Stripe é simples de configurar para donos de loja e tem preço razoável. As taxas variam por país — verifique [pricing](https://stripe.com/br/pricing) para Brasil.

Stripe também é fácil para os clientes. Diferente do PayPal, no checkout o cliente não precisa fazer login — só informa os dados do cartão e completa o pedido.

Stripe é o método recomendado para lojas que querem usar [**assinaturas**](../subscriptions/) na Nossa Feira, pois permite que clientes autorizem cobrança automática do cartão para pedidos de assinatura. Isso não é oferecido por PayPal ou outros.

#### Setup

**Conectar com Stripe**

Antes de configurar um método usando Stripe, você precisa se Conectar. Clique no botão 'Conectar com Stripe'.

![](../../.gitbook/assets/connect-with-stripe.png)

Você será levado a um formulário. Se já tem conta Stripe, faça login. Se não, preencha para criar uma conta.

Informações pedidas incluem: país, descrição do seu negócio, endereço comercial e CNPJ, seus dados pessoais e conta bancária (onde os pagamentos serão depositados).

**Criar um novo método de pagamento**

Uma vez conectado, você pode criar um método que funcione com sua conta conectada.

Trate os campos **Nome**, **Descrição**, **Ativo** e **Tags** como faria com qualquer método.

**Provedor:** Selecione Stripe.

Uma vez selecionado, aparecerão 'Configurações do Provedor'.

**Proprietário da conta Stripe:**

Selecione a empresa que tem uma conta Stripe conectada.

Se você selecionar uma empresa que não está conectada ao Stripe (veja acima), receberá o erro mostrado abaixo. Clique em 'Conectar uma' ou volte à aba de Métodos de Pagamento pra se conectar.

![](../../.gitbook/assets/stripe-connect.png)

#### Pagamentos Stripe para clientes

Quando os clientes finalizam a compra em uma loja com Stripe, terão a opção de marcar uma caixa permitindo que os dados do cartão sejam armazenados na conta deles (se estiverem logados).

Clientes também podem salvar um cartão na Conta ou deletar salvos.

![](../../.gitbook/assets/add-card.png)

Na próxima compra em uma loja com Stripe, o cliente pode selecionar entre os cartões salvos.

**Visualizando e recebendo seus pagamentos via Stripe**

Quando um cliente paga com Stripe, os fundos (menos as taxas do Stripe) vão para sua conta Stripe. Dependendo da configuração no Stripe, os fundos serão automaticamente transferidos periodicamente pra sua conta bancária escolhida.

**Recebendo pagamento adicional**

Se você precisa cobrar valor adicional do cliente por saldo devedor, pode criar uma fatura no Stripe. O cliente receberá um email pedindo pra pagar com cartão. Isso não será comunicado à Nossa Feira, então você precisará marcar o pagamento manualmente.

![](<../../.gitbook/assets/image (31).png>)
{% endtab %}

{% tab title="PayPal" %}
Pra configurar um método PayPal, você precisa de uma conta PayPal comercial. Você pode criar uma [aqui](https://www.paypal.com). Uma vez que tem, pode configurar 'acesso à API' no PayPal, que permite a Nossa Feira conectar os clientes diretamente à sua conta PayPal.

1. Faça login na sua conta PayPal.
2. No seu nome no canto superior direito há um menu com 'Configurações da Conta'.

![](../../.gitbook/assets/paypalmay1.jpg)

3. Selecione 'Atualizar' em Acesso à API.

![](../../.gitbook/assets/paypalmay2.jpg)

4. Selecione 'Gerenciar credenciais da API'.

![](../../.gitbook/assets/paypalmay3.jpg)

Daqui você acessará seu usuário API, senha e assinatura.

![](../../.gitbook/assets/paypalmay4.jpg)

**Na Nossa Feira,** garanta que está logado como usuário da empresa. Vá em uma Empresa e crie um Método de Pagamento. Selecione PayPal e preencha os detalhes.

**Server:** Mude o campo 'server' pra 'live' — sensível a maiúsculas.

**Login:** Informe o usuário da API.

**Password:** Informe a senha da API.

**Signature:** Informe a assinatura da API.

![](../../.gitbook/assets/paypal.jpg)

**Solution:** Solution determina se o usuário precisa de conta PayPal para finalizar. Digite "Mark" se quiser que os usuários tenham conta PayPal, ou "Sole" se puderem finalizar sem (com cartão).

**Landing Page:** Você pode selecionar qual página mostrar aos clientes uma vez redirecionados ao PayPal. Digite "Login" pra direcionar ao formulário de login PayPal, ou "Billing" pra mostrar formulário onde podem informar cartão.
{% endtab %}
{% endtabs %}

## Taxas do método de pagamento

![](<../../.gitbook/assets/fee calculator.jpg>)

Você pode anexar uma taxa aos métodos de pagamento. Mais comumente isso é usado para repassar as taxas do gateway de pagamento ao cliente. Por exemplo, você pode querer cobrar do cliente a conveniência de pagar por cartão pra cobrir a taxa do Stripe.

{% hint style="danger" %}
Taxas do método de pagamento NÃO incluem imposto.
{% endhint %}

### Calculadoras de taxa

**Porcentagem fixa:** Taxa cobrada como porcentagem do valor total do pedido.

{% hint style="danger" %}
Todas as **taxas percentuais** são calculadas sobre o custo dos **produtos** apenas.
{% endhint %}

{% hint style="warning" %}
Se seu negócio adiciona uma [Taxa da Empresa](enterprise-fees.md) percentual fixa a todos os produtos, para que a 'Porcentagem fixa' **Valor** seja a porcentagem desejada:

&#x20;$$= (100 + Taxa da Empresa) * Porcentagem desejada / 100$$&#x20;

Ex: para um negócio com Taxa da Empresa de 20% que quer cobrar 5% do carrinho total, o valor a informar é:

$$= (100 + 20) *5/100 = 6$$&#x20;
{% endhint %}

**Taxa fixa (por pedido):** Taxa aplicada como padrão a todos os pedidos, independente do tamanho.

**Taxa flexível** – Calculadora especialmente útil se você quer incentivar pedidos grandes: o custo do pagamento pode ser reduzido ou zero quando o número limite de itens é atingido.

* 'Custo do primeiro item': Taxa cobrada pelo primeiro item do pedido.
* 'Custo do item adicional': Taxa cobrada por itens além do primeiro.
* 'Máximo de itens': Número máximo de itens sobre os quais a taxa se aplica. Itens além dessa quantidade não terão a taxa.

![](<../../.gitbook/assets/fee- flexible rate.jpg>)

> Por exemplo: se o 'Custo do primeiro item' é R$ 1,00, 'Custo do item adicional' é R$ 0,50 e 'Máximo de itens' é 3, um cliente que compra 5 itens será cobrado R$ 2,00 em taxas (R$ 1 pelo primeiro, R$ 0,50 pelos itens dois e três, R$ 0 pelos itens quatro e cinco).

**Taxa fixa (por item):** Taxa constante aplicada a produtos listados como 'itens'. (Não é aplicada a produtos vendidos por peso ou volume.)

**Faixa de preço:** Método flexível que permite recompensar compradores que gastam acima de um 'valor mínimo' aplicando um desconto.

* Valor mínimo: Se o total do pedido é abaixo desse valor, nenhum desconto é aplicado. Se está acima, o desconto é aplicado no checkout.
* 'Valor normal': Taxa aplicada a vendas abaixo do 'Valor mínimo'.
* 'Valor com desconto': Taxa aplicada a vendas acima do 'Valor mínimo'.

{% hint style="danger" %}
O **Valor mínimo** é o _**custo total dos produtos**_ no carrinho e não inclui nenhuma [taxa da empresa](enterprise-fees.md).
{% endhint %}

![](<../../.gitbook/assets/fees price sack (1).jpg>)

{% hint style="info" %}
Gateways de pagamento frequentemente cobram um valor fixo por transação mais uma pequena % do total. Assim, taxas encontradas por uma central ou loja para clientes que compram o mesmo total em várias vendas pequenas serão maiores do que se o cliente fizesse toda a compra de uma vez.

As calculadoras Taxa flexível e Faixa de preço, aplicadas às taxas do método de pagamento, podem ser úteis pra contrabalancear isso.
{% endhint %}

## Reembolsos

Emitir e gerenciar reembolsos depende de como o cliente originalmente pagou o pedido. Mais detalhes [aqui](../orders/refunds-and-adjusting-payments.md).
