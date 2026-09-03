# Como criar vouchers-presente

{% hint style="info" %}
Recomendamos usar a funcionalidade de [Voucher](../../basic-features/shopfront/vouchers.md) se quer oferecer Vouchers-presente à venda pela sua vitrine.
{% endhint %}

{% hint style="success" %}
As vantagens dos códigos de voucher:

* Não é necessário que os compradores tenham conta na Nossa Feira ou sejam clientes existentes.
* São fáceis pros clientes usarem e fáceis pros gerentes facilitarem.
{% endhint %}

{% hint style="danger" %}
Limitações que você precisa saber antes de começar:

* Códigos de voucher não têm data de expiração — você precisará lembrar de fazer login e desativar o voucher quando for resgatado pra impedir uso múltiplo.
* Um código de voucher não é específico a um cliente — se compartilhado, poderia ser resgatado por alguém que não é o destinatário pretendido.
* Saldos de voucher não são ajustados após compras (ex: se um cliente gasta menos que o valor do voucher, o saldo restante será perdido quando o voucher for desativado).
{% endhint %}

## Introdução

Vouchers-presente são sempre populares no Natal e outros eventos sazonais — são uma opção 'garantida' pra muitos que não sabem exatamente o que o destinatário gostaria. Também podem ser presentes muito atenciosos pra quem está com dificuldades no orçamento doméstico.

Você pode descobrir não só que amigos e familiares de clientes regulares e fiéis da sua empresa vão querer comprar vouchers-presente pra eventos especiais, mas também que esses clientes vão querer comprá-los pra dar aos amigos (introduzindo novas pessoas à sua loja).

## Processo

Este é um processo em TRÊS etapas:

* (Opcional) [Oferecer vouchers-presente à venda](how-to-create-gift-vouchers.md#step-one) na sua vitrine.
* Após um presente ser comprado, [criar o voucher](how-to-create-gift-vouchers.md#step-two).
* [Desativar o voucher-presente](how-to-create-gift-vouchers.md#step-three) quando gasto.

{% hint style="warning" %}
Se você tem vouchers-presente 'Valor fixo' ativos na sua empresa, recomendamos fortemente verificar os pedidos conforme chegam pra identificar quando os vouchers foram resgatados (e desativá-los rapidamente antes que sejam potencialmente mal usados).
{% endhint %}

### Passo 1

Crie um [cadastro de produto](../../basic-features/products-1/products.md) pra vouchers. Sugerimos manter simples — com no máximo três denominações diferentes (R\$50, R\$100, R\$200).

![](<../../.gitbook/assets/gift voucher 2.jpg>)

Lembre:

* Incluir instruções ao cliente sobre como receberá o código do voucher. Você coletará o email do cliente durante o pedido mas não do destinatário do presente. Você poderia optar por uma etapa adicional onde envia email ao cliente pedindo se tem o email do destinatário e a data que gostaria que o voucher fosse enviado, mas precisará garantir se manter dentro dos limites da LGPD durante esse processo.
* É boa prática (pra não causar decepção depois) informar ao cliente as limitações do voucher (um código por compra e saldos não são transferidos se o valor total não for resgatado).
* [Taxas da empresa](../../basic-features/shopfront/enterprise-fees.md) estão incluídas no preço do voucher. A pessoa que resgatar o voucher também terá a taxa da empresa adicionada aos produtos que comprar (ou seja, taxas serão cobradas duas vezes). A taxa extra pode ser necessária pra cobrir custos administrativos de processar vouchers-presente. Alternativamente, o preço do produto pode ser ajustado pra que o preço visto pelo cliente (preço do produto + taxa) seja o valor do voucher.

![](<../../.gitbook/assets/voucher shop front.jpg>)

{% hint style="success" %}
Você pode considerar criar um voucher em papel com o código único escrito em cada.
{% endhint %}

### Passo 2

* Crie um novo voucher em Empresas -> Configurações -> Vouchers e selecione **Adicionar Novo**.

<figure><img src="../../.gitbook/assets/new voucher (1).jpg" alt=""><figcaption></figcaption></figure>

* Complete o formulário:\
  Código do voucher: Escolha uma string única. Sugerimos adicionar caracteres especiais e talvez datas ou números pra impedir mau uso.\
  Tipo de voucher: Valor fixo\
  Valor: valor monetário do voucher-presente comprado.

![](<../../.gitbook/assets/gift voucher 3.jpg>)

* Informe à pessoa que comprou o voucher-presente sobre o código do voucher por email, ou imprima um voucher-presente com esse código pra ela passar ao destinatário.

### Passo 3

Confira os pedidos conforme recebe pra ver se e quando os clientes usam vouchers como parte (ou total) do pagamento.

Lugares pra olhar:

* Vouchers aparecem como um Ajuste quando você edita um [pedido](../../basic-features/orders/).

<figure><img src="../../.gitbook/assets/voucher order.jpg" alt=""><figcaption></figcaption></figure>

* Também aparecem entre as linhas de Subtotal e Total nos emails de confirmação de pedido (enviados tanto ao cliente quanto à empresa):

<figure><img src="../../.gitbook/assets/voucher email.jpg" alt=""><figcaption></figcaption></figure>

* Há uma opção de ver Vouchers e códigos de voucher usados ao visualizar ou baixar todas as variedades de [relatórios de Totais do Ciclo](../../basic-features/reports/order-reports.md).

Quando você nota que um voucher foi resgatado, precisa visitar sua lista de Vouchers (Empresas -> Configurações -> Vouchers) e desativá-lo, alterando a caixa à direita de marcado para desmarcado.

Ativo:

<figure><img src="../../.gitbook/assets/active voucher gift.jpg" alt=""><figcaption></figcaption></figure>

Desativado:

<figure><img src="../../.gitbook/assets/inactive gift voucher.jpg" alt=""><figcaption></figcaption></figure>
