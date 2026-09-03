# Configuração

## Ativar assinaturas

Pra ativar a funcionalidade de assinaturas na sua empresa, vá em Empresas -> Configurações -> [preferências da loja](../enterprise-profile/enterprise-settings.md#shop-preferences).

No rodapé da página, altere a configuração Assinaturas pra 'habilitado'.

![](<../../.gitbook/assets/shop pref.jpg>)

**Pedidos de visitante:** Para empresas com assinaturas habilitadas, recomendamos alterar essa configuração pra 'exigir login pra pedir'. Isso garante que os clientes vejam quaisquer pedidos de assinatura ativos após login, minimizando o risco de fazerem um pedido duplicado por engano.

**Alterar pedidos:** Para empresas com assinaturas, as opções desta configuração afetam o cliente de assinatura das seguintes formas:

* _Pedidos feitos não podem ser alterados/cancelados:_ O cliente precisará _contatar você_ pra modificar o pedido atual da assinatura (ex: alterar quantidades ou cancelar o pedido daquela semana), pois está impedido de editar por conta.
* _Clientes podem alterar/cancelar pedidos enquanto o ciclo está aberto:_ O cliente pode ajustar quantidades e/ou cancelar o pedido da semana _por conta_, sem contatar você.

Note que essa configuração se aplica a todos os seus pedidos. Geralmente, recomendamos 'pedidos feitos não podem ser alterados/cancelados'.

{% hint style="info" %}
Atenção: novos itens não podem ser adicionados a pedidos de assinatura durante um ciclo aberto, seja por você ou pelo cliente. Se um cliente com assinatura quer comprar um produto que não faz parte do pedido regular, ele terá que criar um segundo carrinho com os itens extras e finalizar normalmente.
{% endhint %}

## Métodos de envio e pagamento para assinaturas

Ao criar a assinatura do cliente, você precisa selecionar qual método de envio ele usará e qual método de pagamento será cobrado. As opções escolhidas na configuração da assinatura se aplicarão a todos os pedidos subsequentes feitos em nome do cliente.

### **Métodos de envio**

Você pode aplicar qualquer [método de envio/entrega](../shopfront/shipping-methods.md) a uma assinatura.

### **Métodos de pagamento**

Você só pode atribuir dois tipos de [métodos de pagamento](../shopfront/payment-methods.md) a assinaturas.

1. **Métodos manuais:** Dinheiro, boleto, transferência bancária (qualquer método que não envolve validação automática online pela plataforma).
2. **Stripe:** Gateway de pagamento que aceita débito e cartão de crédito. Detalhes sobre como configurar Stripe [aqui](../shopfront/payment-methods.md#integrated-payment-providers).

{% hint style="info" %}
A cada pedido feito automaticamente por uma assinatura, o cartão do cliente será debitado pelo pedido (no fechamento do ciclo associado). O valor debitado refletirá quaisquer modificações feitas por você ou pelo cliente. Os clientes não serão cobrados se cancelarem o pedido da assinatura.
{% endhint %}

{% hint style="warning" %}
Pra o cliente ser debitado corretamente, é necessário que ele tenha uma conta na Nossa Feira. Na conta, ele precisa ter registrado um cartão padrão e autorizado sua empresa a debitar dele. Mais informações [aqui](subscriptions-the-customers-perspective.md#saving-credit-cards-and-authorising-charges).
{% endhint %}

{% hint style="success" %}
Se você usa Stripe como método de pagamento pra assinaturas, é útil pro cliente que você adicione uma explicação clara e detalhada de como o pagamento será processado.\
\
Por exemplo, em vez de chamar o [método de pagamento](../shopfront/payment-methods.md) de 'Cartão de crédito', você poderia chamar de 'cobrança automática de cartão pra assinaturas'. Uma descrição possível: 'Seu cartão padrão salvo na sua conta Nossa Feira será cobrado quando o pedido da assinatura for confirmado às quartas à noite'. Esse nome e descrição aparecerão no email de confirmação aos clientes de assinatura, então é bom deixar detalhado pra que o cliente saiba o que esperar.
{% endhint %}

![](<../../.gitbook/assets/image (15).png>)

## Colete informações dos clientes

Pra configurar uma assinatura, você precisa obter algumas informações do cliente:

**Nome**, **telefone** e **email:** Lembre que qualquer cliente que quer um pedido automático regular (assinatura) na sua empresa PRECISA ter uma conta cadastrada e confirmada na Nossa Feira. Clientes com assinatura precisam estar na sua [Lista de Clientes](../shopfront/customer-management-and-conditional-displays-prices/customers.md).

**Endereço de cobrança e entrega**

**Produtos:** Quais itens quer incluir na assinatura?

**Método de envio/entrega:** Você precisa atribuir um método de envio/entrega/coleta ao pedido de assinatura. Como o cliente prefere receber os produtos?

**Método de pagamento:** Os clientes podem escolher entre seus métodos manuais (dinheiro, transferência) ou pagar por cartão via Stripe da sua loja. Se o cliente quer pagar as assinaturas por Stripe, precisa adicionar um cartão padrão e dar autorização. Veja [aqui](subscriptions-the-customers-perspective.md#saving-credit-cards-and-authorising-charges) pra mais detalhes.

**Datas de início e fim das assinaturas:** Lembre, pra uma assinatura ser criada pra um determinado ciclo, ela precisa ter data de início antes ou após a data de abertura do ciclo, e a data de fim precisa ser após a data de fechamento do ciclo.

## Adicione seus assinantes à lista de clientes

Antes de configurar um pedido de assinatura, o cliente precisa ser adicionado à sua [Lista de Clientes](../shopfront/customer-management-and-conditional-displays-prices/customers.md).

**Depois de adicionar seus clientes à lista, envie um email** e [peça pra se cadastrarem na Nossa Feira](subscriptions-the-customers-perspective.md#signing-up-to-ofn). Se você planeja cobrar via Stripe, precisa também pedir que sigam os passos adicionais [aqui](subscriptions-the-customers-perspective.md#saving-credit-cards-and-authorising-charges) pra adicionar um cartão padrão na conta e dar autorização à sua empresa pra fazer cobranças.

{% hint style="info" %}
Você pode adicionar clientes à sua lista antes ou depois deles se cadastrarem. Mas antes que um pedido de assinatura seja configurado com sucesso, o cliente precisa ter confirmado o email da conta.
{% endhint %}

{% hint style="warning" %}
Se você quer debitar o cliente por Stripe pra sua assinatura, ele precisa ser adicionado à sua [lista de clientes](../shopfront/customer-management-and-conditional-displays-prices/customers.md) ANTES de poder [autorizar sua empresa a fazer cobranças](subscriptions-the-customers-perspective.md#saving-credit-cards-and-authorising-charges) no cartão.\
Recomendamos o procedimento:

1. Contate o cliente e obtenha todas as informações que precisa (veja [acima](subscriptions-configuration.md#gather-information-from-your-customers)).
2. Adicione-o à sua [lista de clientes](../shopfront/customer-management-and-conditional-displays-prices/customers.md).
3. Envie email pro cliente pedindo pra [se cadastrar na Nossa Feira](subscriptions-the-customers-perspective.md#signing-up-to-ofn) e [adicionar dados de cartão](subscriptions-the-customers-perspective.md#saving-credit-cards-and-authorising-charges) na conta.
4. [Crie a assinatura](subscriptions-creating-and-managing-orders.md).
{% endhint %}

## Cronogramas

{% hint style="info" %}
Se você é novo na Nossa Feira, recomendamos se familiarizar com a configuração de [ciclos de pedidos](../shopfront/order-cycle/) antes de configurar cronogramas e assinaturas.
{% endhint %}

### Sobre cronogramas

Assinaturas são configuradas para que, cada vez que uma empresa abre um ciclo, pedidos possam ser automaticamente gerados pra clientes que têm uma assinatura naquela loja. A frequência com que um pedido de assinatura é feito pra um determinado cliente (ou seja, qual dos ciclos ativos dispara sua assinatura) é controlada por uma facilidade chamada '**Cronogramas**'.

Cronogramas são grupos aos quais ciclos podem ser atribuídos. Uma vez criado um cronograma, assinaturas de clientes são aplicadas ao cronograma, então um pedido pra assinatura só será gerado pra novos ciclos naquele cronograma.

{% hint style="info" %}
Você pode ter clientes que querem um pedido regular toda semana, caso em que você adicionaria suas assinaturas a um cronograma que inclui todos os seus ciclos semanais. Para outros grupos de clientes que desejam pedidos quinzenais/mensais, você pode criar cronogramas adicionais que incluem apenas ciclos semanais alternados/um em cada quatro.
{% endhint %}

{% hint style="success" %}
Há bastante flexibilidade nesse arranjo. Sinta-se livre pra experimentar até encontrar a combinação ciclo-cronograma que funciona melhor. Por exemplo, você pode ter cronogramas de 'semana ímpar' e 'semana par', 'atacado', 'carnes mensais'...
{% endhint %}

### Criar um cronograma

Depois de completar todos os passos acima, o botão **+Novo Cronograma** aparecerá no topo do menu Ciclos de Pedidos:

![](<../../.gitbook/assets/new sched.jpg>)

{% hint style="warning" %}
Você precisa ter pelo menos um ciclo aberto ou prestes a abrir pra poder criar um novo cronograma.
{% endhint %}

![](../../.gitbook/assets/sched1.jpg)

**Nome:** Dê ao cronograma um nome lógico que descreva esse grupo de ciclos. Ex: 'semanal', 'mensal', 'Entregas terça', 'atacado' ou 'varejo'. Esse nome não é visível aos clientes.

{% hint style="info" %}
Se você gerencia várias empresas com assinaturas habilitadas em mais de uma, nomear seus cronogramas claramente é essencial. Ex: semanal\_centralA, semanal\_centralB, quinzenal\_centralA, quinzenal\_centralB.\
Cada empresa precisará de um cronograma diferente, mas ao criar uma assinatura pra um cliente, os cronogramas de todas as suas empresas ficarão visíveis. O nome descritivo ajuda a garantir que a assinatura seja criada pra empresa correta.
{% endhint %}

Você pode adicionar ciclos existentes de dentro e fora do novo cronograma clicando nos botões < e >.

Clique em **criar** quando terminar.

### Editar ou deletar um cronograma

Pra editar ou deletar um cronograma, clique no nome dele ao lado de um ciclo correspondente, na coluna 'cronogramas'. (A coluna 'Cronogramas' pode precisar ser tornada visível marcando no menu suspenso de colunas no canto superior direito.)

![](../../.gitbook/assets/sched2.jpg)

Você pode alterar o nome, adicionar/remover ciclos ou deletar o cronograma.

![](../../.gitbook/assets/sched3.jpg)

{% hint style="danger" %}
Você não pode deletar um cronograma se há assinaturas associadas a ele.
{% endhint %}

### Adicionando ou removendo ciclos de cronogramas

Você pode adicionar e remover ciclos de cronogramas editando o cronograma ([acima](subscriptions-configuration.md#edit-or-delete-a-schedule)) ou editando o ciclo e adicionando/removendo o cronograma no campo 'cronogramas':

![](<../../.gitbook/assets/oc sched.jpg>)

{% hint style="success" %}
Ciclos podem estar em mais de um cronograma. Por exemplo, se seus ciclos são semanais mas você tem três cronogramas (semanal, quinzenal-semana ímpar e quinzenal-semana par), um ciclo pode estar associado aos cronogramas 'semanal' e 'quinzenal-ímpar'.
{% endhint %}
