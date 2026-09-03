# Rodar uma promoção nas redes sociais

{% hint style="info" %}
Recomendamos usar a funcionalidade de [Voucher](../../basic-features/shopfront/vouchers.md) da plataforma se quer oferecer um código de desconto a todos os clientes via campanha em redes sociais.
{% endhint %}

{% hint style="success" %}
As vantagens dos códigos de voucher:

* Não é necessário que os compradores tenham conta na Nossa Feira ou sejam clientes existentes.
* São fáceis pros clientes usarem e fáceis pros gerentes de central facilitarem.
{% endhint %}

{% hint style="danger" %}
Limitações que você precisa saber antes de começar:

* Códigos de voucher não têm data de expiração, então você precisará lembrar de fazer login e desativar o voucher no fim do período promocional pra impedir que seja usado continuamente.
* Apenas um código pode ser resgatado por vez. Portanto um cliente que quer gastar seu [voucher-presente com código único](how-to-create-gift-vouchers.md) da sua central não conseguirá resgatá-lo junto com esse tipo de voucher percentual de rede social.
* Não é possível declarar um gasto mínimo junto com o código de voucher.
* Vouchers só podem ser resgatados sobre a compra e não sobre o custo do envio.
{% endhint %}

## Introdução

Pra reter clientes fiéis e/ou atrair novos, você pode de tempos em tempos querer rodar uma promoção em redes sociais. Por exemplo, você pode postar no Facebook e Instagram que, pra todos os pedidos recebidos na próxima semana, os clientes podem reivindicar 5% de desconto na compra com um código de voucher específico.

Além de potencialmente incentivar um gasto maior no carrinho durante um período 'fraco' (por exemplo, após o Natal), esse tipo de campanha pode atrair novos seguidores e aumentar sua presença nas redes sociais. Tudo isso é bom pra construir uma comunidade forte e sustentável ao redor da sua central.

Abaixo, um guia passo a passo pra implementar o exemplo acima. O processo depende do recurso altamente flexível de [Regras de Tag](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md#show-hide-payment-methods). No fim desta página há dicas sobre como [adaptar](running-a-social-media-promotion.md#you-might-also-like-to-consider-rewarding-repeat-customers-with-a-small-discount) essa oferta promocional.

## Processo

{% hint style="warning" %}
Este é um processo em DUAS etapas:

1. [Criar um voucher](running-a-social-media-promotion.md#step-one) e publicar nas redes sociais.
2. No fim do período promocional, [desativar o código do voucher](running-a-social-media-promotion.md#step-two).
{% endhint %}

### Passo 1

* Crie um novo [voucher](../../basic-features/shopfront/vouchers.md) em: Empresas -> Configurações -> Vouchers e selecionando **+ Adicionar Novo**.

![](<../../.gitbook/assets/new voucher (1).jpg>)

* Preencha as opções:\
  Código do voucher: Opte por algo simples sem espaços ou caracteres especiais.\
  Tipo de voucher: Percentual\
  Valor: a porcentagem de desconto que você está oferecendo.

<figure><img src="../../.gitbook/assets/new voucher percent1.jpg" alt=""><figcaption></figcaption></figure>

* Salve o voucher — ficará ativo.
* Crie seus posts em redes sociais e publique. Exemplo:

<figure><img src="../../.gitbook/assets/Thankyou5.jpg" alt="" width="375"><figcaption></figcaption></figure>

* Defina um lembrete muito importante no celular ou calendário pra desativar o voucher na data de fim da promoção.
* Visão do cliente no checkout:

<figure><img src="../../.gitbook/assets/voucher checkout.jpg" alt=""><figcaption></figcaption></figure>

### Passo 2

* No dia que você quer que sua promoção termine, visite Empresas -> Configurações -> Vouchers. Com o voucher ativo, aparecerá como:

![](<../../.gitbook/assets/active voucher.jpg>)

* Desative desmarcando a caixa ao lado do código relevante e salve as alterações.

![](<../../.gitbook/assets/unactive voucher.jpg>)
