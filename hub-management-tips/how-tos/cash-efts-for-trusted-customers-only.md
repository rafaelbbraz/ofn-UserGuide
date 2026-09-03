# Dinheiro/Transferência só pra clientes de confiança

{% hint style="info" %}
Essa funcionalidade é melhor alcançada usando o recurso [Tags e Regras de Tag](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md) da plataforma.
{% endhint %}

## Introdução

É sempre decepcionante se seu fornecedor gastou tempo e recursos pra preparar produtos pra um cliente e depois ele não vem coletar. Isso é especialmente arriscado quando o pagamento não é cobrado antecipadamente.

Usando [Stripe (pagamento com cartão) ou PayPal](../../basic-features/shopfront/payment-methods.md), os negócios podem automaticamente coletar pagamento dos compradores no momento do checkout. Esses métodos podem não atender todos os clientes: algumas pessoas têm medo de pagamentos online, outras podem não ter conta bancária e outros podem usar dinheiro como forma de acompanhar o orçamento semanal.

Como gerente de uma empresa local de alimentos, você está em sintonia com as necessidades dos clientes. Você pode querer que a maioria pague com cartão (menos tempo administrativo pra buscar/coletar pagamentos por transferência ou dinheiro, tranquilidade de ter pagamento antecipado) mas permitir uma seleção pequena de clientes conhecidos e de confiança a pagar por dinheiro ou transferência. Você pode usar [Tags e Regras de Tag](../../basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md#show-hide-payment-methods) pra implementar isso como descrito abaixo.

## Processo

* Configure um método de pagamento [Stripe](../../basic-features/shopfront/payment-methods.md#integrated-payment-providers) (ou PayPal) que será sua única opção pra maioria dos compradores. (Visite **Empresas -> Configurações -> Método de Pagamento** e '**Criar Novo Método de Pagamento+**'.)
* Crie um segundo método de pagamento com as configurações:\
  Nome: 'Dinheiro ou Transferência bancária'\
  Descrição: forneça detalhes relevantes como dados bancários necessários pra um cliente de confiança fazer pagamento direto na sua conta\
  Exibição: Checkout e back office\
  Ativo: sim\
  **Tags: 'confiança'**\
  Provedor: Dinheiro/Pix/etc

![](<../../.gitbook/assets/trusted 3.jpg>)

* Visite sua página de [Clientes](https://openfoodnetwork.org.uk/admin/customers).
* Use a caixa 'Busca rápida' pra encontrar os detalhes do seu cliente regular e de confiança:

![](../../.gitbook/assets/customers.jpg)

* Adicione a tag 'confiança' à entrada dele:

![](<../../.gitbook/assets/trusted 2.jpg>)

* Visite **Empresas -> Configurações -> Regras de Tag** e adicione:

Padrão: Métodos de Pagamento marcados 'confiança' NÃO SÃO VISÍVEIS\
Regra: Para Clientes marcados 'confiança', Métodos de Pagamento marcados 'confiança' são visíveis.

![](<../../.gitbook/assets/trusted 1.jpg>)

* Quando você abre um [ciclo de pedidos](../../basic-features/shopfront/order-cycle/), na página 4 '**Opções de Checkout**' selecione pelo menos um método de pagamento automático que seja visível para a maioria dos clientes (Stripe e/ou PayPal), além do novo método marcado configurado acima 'Dinheiro/Transferência'.

**Pronto! Apenas seus clientes de confiança terão a opção de pagamento por dinheiro ou transferência.**

{% hint style="success" %}
Se você achar que um cliente regularmente falha em pagar na coleta ou está repetidamente atrasado com transferências, pode sempre remover essa opção deletando a tag 'confiança' no registro de [Cliente](https://openfoodnetwork.org.uk/admin/customers). O comprador só poderá pagar por cartão antecipadamente, como os outros clientes.
{% endhint %}
