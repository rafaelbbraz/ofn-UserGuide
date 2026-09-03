# Recompensar seus voluntários

{% hint style="info" %}
Essa funcionalidade pode ser alcançada usando o recurso de [Voucher](../../basic-features/shopfront/vouchers.md) ou [Tags e Regras de Tag](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md).

Recomendamos usar Tags e Regras de Tag pelos seguintes motivos:

* Voluntários frequentemente já são clientes da sua loja, então configurar as tags é mais direto no caso deles do que pra público em geral.
* Impede que um código de voucher de desconto seja publicado e compartilhado online, onde poderia ser usado por não-voluntários pra ganhar desconto. Igualmente, se um voluntário para de ajudar, a tag pode ser facilmente removida sem precisar reemitir um novo código de voucher pra todos.
* Apenas um voucher pode ser resgatado por vez. Oferecendo aos voluntários um desconto por tags, eles também poderão resgatar um voucher no valor já com desconto que pode ser presenteado no Natal ou aniversário por amigos/família.
{% endhint %}

## Introdução

Gostaria de dizer um pequeno obrigado pra pessoas que ajudam a rodar sua empresa comunitária de alimentos? Uma opção é permitir que funcionários e voluntários tenham um pequeno desconto em qualquer compra. Abaixo, um guia passo a passo de como implementar isso.

## Processo

* Peça aos voluntários que te informem o email vinculado à conta na Nossa Feira.
* Faça login na sua conta e visite a página de [Clientes](https://openfoodnetwork.org.uk/admin/customers).
* Use a caixa 'Busca Rápida' pra identificar se a pessoa já comprou antes.

![](../../.gitbook/assets/customers.jpg)

* Se o email não aparecer, clique em **+ Novo Cliente** e adicione o endereço.
* Adicione a tag 'voluntario' à entrada do cliente.

![](<../../.gitbook/assets/volunteer 1.jpg>)

* Visite **Empresas -> Configurações** e depois selecione '[Métodos de Pagamento](../../basic-features/shopfront/payment-methods.md)' no menu à esquerda.
* Clique em **+ Novo Método de Pagamento**.

![](<../../.gitbook/assets/volunteer 3.jpg>)

\
Nome: Desconto 5% Voluntário\
Descrição: Obrigado por ajudar a rodar nossa central de alimentos local.\
Exibição: Checkout e back office\
Ativo: sim\
**Tags: Adicione a tag 'voluntario' nesse espaço.**\
Provedor: escolha o método mais apropriado pro seu negócio.\
Calculadora de Taxa: Porcentagem fixa

* Após selecionar Criar, adicione '-5' \* no campo 'Valor' da seção 'Calculadora de Taxa'. (Sinal negativo resulta em desconto)\
  \
  \*-5 resultará em um desconto de 5% se sua empresa não usa Taxas da Empresa.

{% hint style="danger" %}
Todas as **taxas percentuais** são calculadas sobre o custo dos **produtos** apenas.
{% endhint %}

{% hint style="warning" %}
Se seu negócio adiciona uma Taxa da Empresa percentual fixa a todos os produtos, o valor a informar no campo 'Porcentagem fixa' desse método de pagamento com desconto é:

&#x20;$$= (100 + Taxa da Empresa) * Desconto Desejado / 100$$&#x20;

Ex: para um negócio com Taxa da Empresa de 20% que quer oferecer 5% de desconto aos voluntários:

$$= -(100 + 20) *5/100 = -6$$&#x20;
{% endhint %}

* Visite **Empresa -> Configurações** e selecione '[Regras de Tag](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md#show-hide-payment-methods)' no menu à esquerda. Configure:

Padrão: Métodos de pagamento marcados 'voluntario' não são visíveis.\
Para clientes marcados 'voluntario', métodos de pagamento marcados 'voluntario' são visíveis.

![](<../../.gitbook/assets/volunteer 2.jpg>)

* Quando você abre um [ciclo de pedidos](../../basic-features/shopfront/order-cycle/), garanta selecionar pelo menos dois métodos de pagamento na Página 4, em 'Opções de Checkout' — o método marcado com tag que oferece desconto aos voluntários e um método sem tag visível pra todos.

<figure><img src="../../.gitbook/assets/volunteer 4.jpg" alt=""><figcaption></figcaption></figure>

No checkout, este é um exemplo do que um voluntário verá (quando logado na conta):

![Visão de checkout do voluntário](<../../.gitbook/assets/volunteer 5.jpg>)
