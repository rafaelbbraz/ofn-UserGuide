# Vouchers

Códigos de voucher podem ser criados pra oferecer descontos a clientes novos ou existentes. A funcionalidade de vouchers ainda é relativamente limitada, leia [este guia antes de implementar vouchers no processo da sua loja](../../hub-management-tips/how-tos/vouchers-v.-tags.md).

{% hint style="info" %}
Vouchers está em modo 'beta' — é um recurso novo que ainda pode ter alguns problemas. [Entre em contato](https://www.openfoodnetwork.org/find-your-local-open-food-network/) com qualquer feedback sobre o que funciona, o que precisa melhorar ou como poderia ser melhor explicado.
{% endhint %}

{% hint style="success" %}
Visite estas páginas para um guia passo a passo do uso de Vouchers:

* oferecer desconto percentual via [campanha em redes sociais](../../hub-management-tips/how-tos/running-a-social-media-promotion.md)
* [vender e gerenciar vouchers-presente](../../hub-management-tips/how-tos/how-to-create-gift-vouchers.md)
{% endhint %}

Configure e gerencie vouchers na aba **Vouchers** nas [Configurações da Empresa](../enterprise-profile/enterprise-settings.md).

<figure><img src="../../.gitbook/assets/vouchers1.jpg" alt=""><figcaption></figcaption></figure>

## Configurando um voucher

* Vá em 'Vouchers' clicando em **Empresas** no menu principal no topo da página e depois em **Configurações** ao lado da sua empresa. A página **Vouchers** fica no menu à esquerda.
* Clique em **Adicionar Novo** no canto superior direito da página pra ir à página de novo voucher.

<figure><img src="../../.gitbook/assets/voucher add.jpg" alt=""><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/new voucher.jpg" alt=""><figcaption></figcaption></figure>

* **Código do voucher** — código que os clientes vão informar pra receber o desconto. É comparado como string, então confira ortografia, espaços e números.
* **Tipo de voucher** — Duas opções: Valor fixo (desconto fixo) e Percentual (desconto percentual).
* **Valor** — Percentual numérico ou valor fixo do desconto.
* Clique em **salvar** pra criar o voucher.

{% hint style="warning" %}
Novos vouchers são criados como ativos. Se você não quer que o voucher fique ativo, desligue usando os passos abaixo.
{% endhint %}

## Gerenciando vouchers

Vouchers podem ser ligados e desligados conforme necessário pelos gerentes da empresa.

{% hint style="warning" %}
Códigos de voucher não são desativados automaticamente após o uso do cliente.
{% endhint %}

Na página **Vouchers** nas Configurações da Empresa, use a caixa ao lado de cada código pra desativar ou reativar seus vouchers.

Clique em **atualizar** pra salvar as alterações.

<figure><img src="../../.gitbook/assets/voucher deactivate.jpg" alt=""><figcaption></figcaption></figure>

## Uso pelo cliente

Os clientes precisam do código exato como informado no campo Código do Voucher na configuração (acima).

No passo 2 do checkout, **Método de pagamento**, os clientes podem informar o código do voucher pra que seja aplicado ao pedido.

{% hint style="info" %}
Apenas 1 código de voucher pode ser aplicado por pedido.
{% endhint %}

Após aplicar o código, continue pelo checkout pra finalizar o pedido.

<div data-full-width="true">

<figure><img src="../../.gitbook/assets/Screenshot 2023-11-21 103819.png" alt=""><figcaption></figcaption></figure>

</div>

{% hint style="info" %}
Se o voucher trouxer o **total do pedido a zero** ou abaixo, o cliente não será solicitado a informar método ou dados de pagamento. _Veja captura abaixo._
{% endhint %}

<figure><img src="../../.gitbook/assets/Screenshot 2023-11-21 105438.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Se apenas parte do voucher for usada (**o total do pedido fica negativo**), o crédito restante não é transferido para o próximo pedido do cliente.
{% endhint %}
