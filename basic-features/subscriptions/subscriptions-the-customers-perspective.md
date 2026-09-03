# Assinaturas — perspectiva do cliente

Esta página detalha o que um cliente com assinatura pode esperar. Também destaca algumas coisas que lojas oferecendo assinaturas devem estar atentas.

## Cadastro na Nossa Feira

Os clientes precisam ter uma conta na Nossa Feira antes que você possa processar pedidos de assinatura pra eles.

Pra criar uma conta, direcione o cliente à página inicial da Nossa Feira e clique em 'Entrar' no canto superior direito. Ele será guiado pelo cadastro. _**Os clientes precisam ter um email ativo pra se cadastrar**_.

Após o cadastro, receberá um email de confirmação. Uma vez que clicar no link do email, a conta será confirmada e ele poderá fazer login.

{% hint style="info" %}
Devido a filtros de email muito rígidos (que combatem spam), às vezes os clientes não recebem o email de confirmação (ou vai pra pasta de spam). Se isso acontecer, peça pra adicionar a Nossa Feira à lista 'segura' nas configurações do email.
{% endhint %}

## Salvando cartões e autorizando cobranças

Clientes que querem pagar seus pedidos de assinatura por cobrança automática no cartão (Stripe) precisam: a) salvar o cartão preferido na conta da Nossa Feira e b) conceder à loja permissão pra cobrar esse cartão.

### Salvando dados de cartão na conta do cliente

A página da Conta do Cliente pode ser acessada após login na Nossa Feira pelo botão 'Perfil' no canto superior direito:

![](../../.gitbook/assets/subcard1.jpg)

Seu cliente pode salvar um ou mais cartões na conta, na aba **cartões de crédito**.

![](../../.gitbook/assets/subcard2.jpg)

Se um cliente registra mais de um cartão, o que estiver marcado como 'padrão' será cobrado automaticamente pelo Stripe (se ele tem uma assinatura com Stripe como método escolhido).

{% hint style="danger" %}
Se nenhum dos cartões está selecionado como 'padrão', os pagamentos por cartão não serão processados.
{% endhint %}

![](<../../.gitbook/assets/image (26).png>)

Se seu cliente salva cartões na conta, também poderá selecioná-los rapidamente na hora do checkout.

![](<../../.gitbook/assets/image (4).png>)

### **Autorizar uma loja a cobrar o cartão padrão**

**Você deve adicionar seus clientes à sua** [**Lista de Clientes**](../shopfront/customer-management-and-conditional-displays-prices/customers.md) **antes de pedir pra eles salvarem os dados do cartão e autorizarem a loja a cobrar. O cliente não verá sua empresa na lista 'Lojas Autorizadas' à direita se você não fizer isso antes.**

Pra que o método Stripe funcione em uma assinatura que o cliente tem na sua empresa, ele precisa marcar a caixa 'Permitir Cobranças':

![](../../.gitbook/assets/subcard2.jpg)
