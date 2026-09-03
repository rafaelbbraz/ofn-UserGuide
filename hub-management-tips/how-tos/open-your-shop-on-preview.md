# Abrir sua loja em 'Preview'

{% hint style="info" %}
Essa funcionalidade é melhor alcançada usando o recurso [Tags e Regras de Tag](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md).
{% endhint %}

## Introdução

Como gerente de central, você frequentemente pode ser solicitado pelos fornecedores a ver como os produtos deles ficam na sua vitrine antes do ciclo ir ao ar pros clientes. Fornecedores podem querer ajustar seus cadastros — mudar uma foto ou adicionar às descrições dos produtos, por exemplo. Isso é especialmente comum nos primeiros dias (semanas e meses) de uma nova central.

O processo abaixo descreve como implementar um Ciclo de Pedidos em 'Preview'. Depende do recurso altamente flexível de Tags e Regras de Tag.

{% hint style="info" %}
Sua empresa precisará estar listada como Central na Nossa Feira pra adicionar tag a ciclos.
{% endhint %}

## Processo

{% hint style="warning" %}
Este é um processo em **DUAS** etapas:

1. Abrir um Ciclo que apenas você e os fornecedores podem visualizar.
2. Remover a tag que facilita (1) quando o ciclo vai ao ar pros clientes.
{% endhint %}

### Passo 1

* Faça login na sua conta e visite a página de [Clientes](https://openfoodnetwork.org.uk/admin/customers).
* Clique em **+ Novo Cliente** e adicione os emails dos seus fornecedores. (Se já fizeram um pedido na sua loja no passado, já serão clientes e esse passo não é necessário.)
* Na coluna 'tags', digite 'produtor' pra esse cliente.

![](<../../.gitbook/assets/preview 3.jpg>)

* Visite sua página de [Ciclos de Pedidos](https://openfoodnetwork.org.uk/admin/order\_cycles).
* Configure seu próximo [ciclo](../../basic-features/shopfront/order-cycle/order-cycles-for-hubs.md). Defina o horário de abertura como 'agora' e o horário de fechamento como o usual.
* Na página 3 ('Produtos Saintes') adicione 'preview' na seção de tags:

![](<../../.gitbook/assets/preview 4.jpg>)

* Visite **Empresa -> Configurações** e selecione '[Regras de Tag](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md#show-hide-order-cycles-at-my-shopfront)' no menu à esquerda. Configure:\
  Padrão: Ciclos marcados 'preview' não são visíveis.\
  Para clientes marcados 'produtor', Ciclos marcados 'preview' são visíveis.

![](<../../.gitbook/assets/preview 2.jpg>)

**Pronto! Seu ciclo agora está aberto pros produtores visualizarem seus produtos na sua vitrine, mas clientes gerais não conseguirão ver (nem comprar).**

{% hint style="warning" %}
Produtores/fornecedores podem fazer compras durante esse período.
{% endhint %}

### Passo 2

* **Defina um lembrete no celular/calendário pra editar seus ciclos no horário e dia que quer que as compras comecem.**
* Nesse horário, visite seus [ciclos](https://openfoodnetwork.org.uk/admin/order\_cycles) e selecione 'Editar' ao lado do que quer tornar 'ao vivo' pros clientes:

![](<../../.gitbook/assets/preview 5.jpg>)

* Vá na seção 'Produtos Saintes' na página 3 e remova a tag:

![](<../../.gitbook/assets/preview 6.jpg>)

**Todos os seus clientes conseguirão ver sua loja e fazer compras agora!**

###
