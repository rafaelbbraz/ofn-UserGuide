# Entrega grátis/com desconto pra clientes vulneráveis

{% hint style="info" %}
Essa funcionalidade é melhor alcançada usando o recurso [Tags e Regras de Tag](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md).
{% endhint %}

## Introdução

Clientes idosos ou vulneráveis podem achar mais difícil chegar ao seu ponto de coleta. Embora não fosse necessariamente possível você entregar produtos na porta de cada cliente (por custo, tempo e distâncias), você pode ter capacidade pra ajudar um pequeno número de clientes 'prioritários' locais.

Abaixo, um guia passo a passo pra permitir que clientes selecionados acessem entrega grátis (ou com desconto).

O processo usa o recurso de Gerenciamento de Clientes descrito [em detalhe aqui](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md#show-hide-shipping-methods).

## **Coisas a considerar antes de começar**

* Qual o número máximo de slots de entrega que você pode oferecer com taxa grátis/desconto?
* Quais áreas você consideraria entregar grátis ou com desconto? Por exemplo, limite a área a um CEP/rua/bairro específico ou ruas no caminho pra casa.
* Seja realista sobre o número de entregas que você pode fazer e o custo de combustível/tempo.

## Processo

* Mantenha um registro do nome do cliente e email vinculado à conta na Nossa Feira.
* Faça login na sua conta de negócio na Nossa Feira e visite a [página de Clientes](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/customers.md).
* Use a caixa 'Busca Rápida' pra identificar se a pessoa já comprou com você antes.

![](../../.gitbook/assets/customers.jpg)

* Se o email dela não aparecer, clique em **+ Novo Cliente** e adicione o endereço.
* Adicione a tag 'entrega\_gratis' à entrada do cliente.

![](<../../.gitbook/assets/free\_delivery 3.jpg>)

* Visite **Empresas -> Configurações ->** [**Métodos de Envio**](../../basic-features/shopfront/shipping-methods.md) e clique em **+Novo Método de Envio**.

![](<../../.gitbook/assets/free\_delivery 2 (1).jpg>)

Nome: Entrega local grátis para clientes idosos e vulneráveis.\
Descrição: Entrega local grátis no seu endereço.\
Exibição: Checkout e back office\
Categoria: Entrega\
**Tags: Adicione a tag 'entrega\_gratis' nesse espaço.**\
Calculadora de Taxa: Taxa fixa = 0,00\
Categorias: Padrão\
Zonas: (selecione a apropriada)

* Visite **Empresa -> Configurações** e selecione '[Regras de Tag](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md)' no menu à esquerda. Configure as seguintes regras:

Padrão: Métodos de envio marcados 'entrega\_gratis' não são visíveis.\
Para clientes marcados 'entrega\_gratis', Métodos de envio marcados 'entrega\_gratis' são visíveis.

![](<../../.gitbook/assets/free\_delivery 1.jpg>)

Abra um ciclo e na Página 4 'Opções de Checkout' selecione pelo menos um método de entrega/coleta que estará disponível pra todos os clientes E o novo método 'Entrega grátis para clientes idosos e vulneráveis' configurado com tag acima.

**Pronto! Um cliente que se cadastrou com você como idoso e mora próximo poderá ver uma opção extra no checkout em comparação aos outros compradores:**

![Visão do cliente marcado no checkout](<../../.gitbook/assets/free\_delivery 4.jpg>)

{% hint style="success" %}
Adicione um comentário aos seus métodos de entrega padrão (na 'caixa de Descrição') pra informar clientes idosos e vulneráveis sobre como entrar em contato e ser elegíveis à entrega grátis no futuro.
{% endhint %}

## **Você também pode gostar de: Adicionar uma mensagem aos seus clientes na página Avisos da loja.**

Não esqueça de editar sua '[Mensagem da Vitrine](../../basic-features/enterprise-profile/enterprise-settings.md#shop-preferences)' (em **Empresas -> Configurações -> Preferências da Loja**) pra convidar novos clientes idosos/vulneráveis/prioritários a entrar em contato pra serem priorizados.

![Visão admin](<../../.gitbook/assets/priority 4.jpg>)

![](../../.gitbook/assets/notices2.jpg)
