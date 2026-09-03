# Hora antecipada de compra pra grupos prioritários

{% hint style="info" %}
Essa funcionalidade é melhor alcançada usando o recurso [Tags e Regras de Tag](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md).
{% endhint %}

## Introdução

O surto de COVID-19 em março de 2020 viu uma onda de compras em pânico pelos consumidores antes (ou nos primeiros dias) dos 'lockdowns' nacionais. Isso deixou grupos vulneráveis e trabalhadores essenciais sem alimentos.

Abaixo, um guia passo a passo pra permitir que clientes selecionados (você pode escolher como negócio ser pessoas acima de 80 anos ou incluir trabalhadores essenciais também) comprem antes dos outros e portanto tenham a primeira escolha de produtos (caso acabem no fim do ciclo).

O processo usa o recurso de Gerenciamento de Clientes descrito [em detalhe aqui](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/).

{% hint style="warning" %}
Sua empresa precisará estar cadastrada como [Central](../../your-quick-start-on-ofn-given-who-you-are.md#hub) na Nossa Feira pra adicionar tags a Ciclos de Pedidos, como descrito abaixo.
{% endhint %}

## Processo

O processo é bem parecido com o que você usaria pra abrir sua [loja cedo em 'Preview'](open-your-shop-on-preview.md), mas dessa vez torna a loja visível a um subconjunto diferente de cliente.

* Estabeleça como negócio a qual(is) grupo(s) você quer oferecer esse serviço.
* Mantenha um registro do nome do cliente e email vinculado à conta na Nossa Feira.
* Faça login na sua conta e visite a [página de Clientes](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/customers.md).
* Use a caixa 'Busca Rápida' pra identificar se a pessoa já comprou com você antes.

![](../../.gitbook/assets/customers.jpg)

* Se o email dela não aparecer, clique em **+ Novo Cliente** e adicione o endereço.
* Na coluna 'tags', digite 'prioridade' pra esse cliente.

![](<../../.gitbook/assets/priority 2.jpg>)

**Passo 1: Antes do ciclo abrir**

* Visite sua página de [Ciclos de Pedidos](https://openfoodnetwork.org.uk/admin/order\_cycles). Configure seu próximo [ciclo](../../basic-features/shopfront/order-cycle/order-cycles-for-hubs.md) normalmente, **definindo o horário de abertura pra uma hora (ou mais) antes** do horário em que quer estar aberto a todos os clientes.
* Na página 3 do ciclo adicione 'prioridade' na seção de tags:

![](<../../.gitbook/assets/priority 3.jpg>)

* Visite **Empresa -> Configurações** e selecione '[Regras de Tag](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md#show-hide-order-cycles-at-my-shopfront)' no menu à esquerda. Configure:

Padrão: Ciclos de Pedidos marcados 'prioridade' não são visíveis.\
Para clientes marcados 'prioridade', Ciclos marcados 'prioridade' são visíveis.

![](<../../.gitbook/assets/priority 1.jpg>)

**Passo 2: No dia do ciclo**

* Defina um lembrete no celular ou calendário pro horário em que quer que sua vitrine fique visível a todos os clientes.
* Nesse horário, faça login na Nossa Feira e edite o ciclo que está atualmente aberto apenas pra clientes prioritários.
* Vá em Página 3 'Produtos Saintes' e remova a tag. Lembre de salvar.

<figure><img src="../../.gitbook/assets/preview 6.jpg" alt=""><figcaption></figcaption></figure>

**Sua vitrine agora ficará visível pra todos os clientes verem e comprarem.**

## **Você também pode gostar de: Adicionar uma mensagem aos clientes na página Avisos.**

Não esqueça de editar sua '[Mensagem da Vitrine](../../basic-features/enterprise-profile/enterprise-settings.md#shop-preferences)' (em **Empresas -> Configurações -> Preferências da Loja**) pra convidar novos clientes idosos/vulneráveis/essenciais a contatarem você pra serem priorizados.

![Visão admin](<../../.gitbook/assets/priority 4.jpg>)

![](../../.gitbook/assets/notices2.jpg)
