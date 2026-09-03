# Assinaturas — criando e gerenciando pedidos

Esta página descreve como as lojas podem configurar assinaturas únicas pra clientes individuais, incluindo quais itens são incluídos, qual [cronograma](subscriptions-configuration.md#schedules) a assinatura segue (ou seja, a frequência com que recebem o pedido) e como pausar/editar a assinatura.

{% hint style="danger" %}
Nesta primeira versão do recurso de assinaturas, **as empresas precisam configurar as assinaturas em nome dos clientes**. Os clientes não podem configurar suas próprias assinaturas.
{% endhint %}

**Checklist antes de criar assinaturas pros clientes:**

* Habilite assinaturas nas [Configurações da Empresa](subscriptions-configuration.md#activate-subscriptions).
* Crie [métodos de envio e pagamento](subscriptions-configuration.md#shipping-and-payment-methods-for-subscriptions).
* Tenha contatado os clientes pra [obter os dados](subscriptions-configuration.md#gather-information-from-your-customers).
* Adicione os clientes de assinatura à sua [lista de clientes](subscriptions-configuration.md#add-your-subscribers-to-your-customer-list).
* Tenha contatado os clientes pedindo pra [se cadastrarem na Nossa Feira](subscriptions-the-customers-perspective.md#signing-up-to-ofn) e, _se_ forem cobrados por Stripe, pedir que [salvem o cartão e autorizem a loja a cobrar](subscriptions-the-customers-perspective.md#saving-credit-cards-and-authorising-charges).
* Crie pelo menos um [Cronograma](subscriptions-configuration.md#schedules).

## Criar assinaturas

Clique em **Pedidos** no menu horizontal principal e depois em **Assinaturas** no submenu.

![](../../.gitbook/assets/sub1.jpg)

Clique em **+ Nova Assinatura** pra configurar um pedido recorrente. Primeiro será solicitado a selecionar a loja com a qual quer criar a nova assinatura.

{% hint style="danger" %}
Você precisa ter criado um cronograma de ciclos antes de criar uma assinatura. Leia mais [aqui](subscriptions-configuration.md#schedules).
{% endhint %}

### Dados básicos

![](<../../.gitbook/assets/sub2 (1).jpg>)

**Cliente:** Selecione um cliente do menu suspenso. Você só pode escolher entre pessoas adicionadas à [Lista de Clientes](subscriptions-configuration.md#add-your-subscribers-to-your-customer-list) da empresa com a qual está criando a assinatura.

**Cronograma:** Selecione o cronograma ao qual esse cliente quer assinar.

**Método de pagamento:** Selecione o método preferido do cliente. Precisa ser Stripe ou um método manual (dinheiro, transferência). Veja [aqui](subscriptions-configuration.md#payment-methods) pra mais informações.

**Método de envio:** Selecione o método preferido do cliente.

**Começa em:** Data em que o primeiro pedido de assinatura será gerado.

{% hint style="danger" %}
Se essa data está no meio de um ciclo aberto no cronograma dele, um pedido será gerado pra esse ciclo. Se não, o primeiro pedido de assinatura será feito quando o próximo ciclo abrir no cronograma.
{% endhint %}

**Termina em:** Após esta data, os pedidos de assinatura não serão mais gerados. Campo opcional — se deixado em branco, o pedido continua a ser gerado indefinidamente.

{% hint style="danger" %}
Se a data 'Termina em' cai no meio de um ciclo futuro, nenhum pedido de assinatura será feito. Por exemplo:

* Se 'Termina em' é 10/01/2026 mas o ciclo mais próximo no cronograma do cliente abre em 09/01/2026 e fecha em 11/01/2026, nenhum pedido será gerado.
* Se 'Termina em' é 12/01/2026, o ciclo acima gerará um último pedido de assinatura pro cliente.
{% endhint %}

### Endereço

Preencha os detalhes de cobrança e entrega do cliente. Dados de endereço de clientes que já fizeram pedidos na Nossa Feira serão carregados automaticamente.

![](../../.gitbook/assets/sub3.jpg)

{% hint style="warning" %}
Se você atualizar os dados de endereço/contato do cliente na página de [Clientes](../shopfront/customer-management-and-conditional-displays-prices/customers.md), a alteração não é automaticamente refletida na assinatura. Você precisa atualizar aqui também.
{% endhint %}

### **Adicionar produtos**

Adicione os itens que o cliente deseja receber da sua empresa regularmente.

![](../../.gitbook/assets/sub4.jpg)

{% hint style="warning" %}
Você só pode adicionar produtos que estão listados em ciclos futuros da sua empresa que também pertencem ao cronograma de assinatura escolhido pelo cliente.
{% endhint %}

### Revisar e salvar

Confira se os detalhes estão corretos e depois clique em **Criar Assinatura** ou **Cancelar**.

{% hint style="warning" %}
Se o cronograma para o qual você acabou de criar uma nova assinatura tem um ciclo aberto, o primeiro pedido será gerado imediatamente, a menos que você altere a data 'Começa em' pra um momento futuro.
{% endhint %}

#### **O que acontece se o preço de um produto mudar após a assinatura ser criada?**

Os preços dos itens nas assinaturas serão atualizados e o cliente será cobrado de acordo com o preço atualizado. No início de cada ciclo com o qual sua assinatura é gerada, ele receberá um email com resumo do pedido, incluindo preços atualizados.

#### **E se um produto da assinatura não estiver disponível em um ciclo?**

Quando um item da assinatura não está disponível (por exemplo, se é sazonal), o cliente será alertado nos emails de confirmação.

## Editar a assinatura de um cliente

### Editar a assinatura base

Pra fazer alterações na assinatura toda (ou seja, todos os pedidos feitos daqui pra frente), vá em **Pedidos** (menu principal) -> **Assinaturas** (submenu).

Selecione a empresa com a qual o cliente tem uma assinatura no menu suspenso.

![](<../../.gitbook/assets/sub1 (1).jpg>)

Uma tabela listando todas as assinaturas dos seus clientes ficará visível. Selecione o ícone de Editar (caneta e papel) à direita do cliente:

![](../../.gitbook/assets/sub5.jpg)

{% hint style="success" %}
Você pode alterar os produtos que o cliente pede pela assinatura, os métodos preferidos de envio e pagamento e as datas de início/fim.
{% endhint %}

{% hint style="danger" %}
Você não pode alterar o cronograma da assinatura. Em vez disso, a assinatura precisa ser recriada no novo cronograma preferido e a versão antiga deletada.
{% endhint %}

### Editar um pedido específico

Se você quer alterar um único pedido futuro em uma assinatura, pode clicar no número na coluna _**pedidos**_ do cliente.

Isso revelará todos os pedidos futuros no cronograma e você pode então editar um pedido específico.

![](<../../.gitbook/assets/sub6 (1).jpg>)

{% hint style="warning" %}
Note que você pode remover itens de um pedido dessa forma, mas não adicionar. Itens adicionais precisarão ser adicionados criando um novo pedido como descrito [aqui](../orders/create-orders-manually.md).
{% endhint %}

### Deletar uma assinatura

Pra deletar uma assinatura de um cliente que não quer mais receber os produtos regularmente, clique no botão **X** à direita da tabela. Isso impedirá que futuras assinaturas sejam geradas e deletará permanentemente essa assinatura.

![](../../.gitbook/assets/sub7.jpg)

{% hint style="warning" %}
Se você deletar uma assinatura enquanto há um ciclo aberto, será perguntado se quer manter o pedido aberto do cliente ou se ele quer deletar o pedido atual.
{% endhint %}

### Pausar uma assinatura

Um cliente pode querer pausar o pedido durante férias, por exemplo. Nesse caso, clique no botão de **pausa** (duas linhas verticais) à direita da tabela de assinaturas. Isso impedirá que todos os pedidos futuros da assinatura sejam gerados, até que seja ativada novamente.

![](../../.gitbook/assets/sub8.jpg)

Pra despausar (reativar) uma assinatura, clique no botão **play** (seta).

<figure><img src="../../.gitbook/assets/sub9.jpg" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Se você pausar uma assinatura enquanto um ciclo ainda está aberto, será perguntado se quer manter o pedido atual ou não.

Assinaturas reativadas no meio de um ciclo aberto vão gerar pedidos imediatamente.
{% endhint %}

## Como as assinaturas são processadas?

Você configurou uma assinatura pra um cliente. O que acontece agora, cada vez que um ciclo abre e fecha?

### **Ciclo de pedidos do cronograma da assinatura abre:**

* O pedido do cliente será criado imediatamente. Ele receberá um email notificando.
* Os níveis de estoque dos produtos pedidos pela assinatura serão deduzidos nesse momento.
* Um email será enviado ao [gerente da empresa](../enterprise-profile/enterprise-settings.md#users) coordenando o ciclo, resumindo quantas assinaturas foram feitas e quantas tiveram problemas (ex: estoque insuficiente).
* Se sua empresa está configurada como 'Pedidos podem ser alterados/cancelados enquanto o ciclo está aberto' (veja [aqui](subscriptions-configuration.md#activate-subscriptions)), os clientes com pedido gerado por assinatura podem remover produtos ou cancelar.

{% hint style="info" %}
Note que, se você criar uma assinatura enquanto há um ciclo aberto no cronograma, _um pedido será criado imediatamente_ pra esse assinante.
{% endhint %}

{% hint style="warning" %}
Os clientes não conseguem adicionar itens a um pedido de assinatura uma vez que foi gerado, mesmo se 'Pedidos podem ser alterados/cancelados enquanto o ciclo está aberto' está habilitado. Ao tentar, criarão um segundo pedido e serão levados ao checkout normalmente.
{% endhint %}

### **O ciclo de pedidos fecha**

* Quando o ciclo fecha, os pedidos de assinatura serão _confirmados_. Os clientes receberão um _email de confirmação_.
* Clientes que optaram por pagar via Stripe terão o cartão debitado nesse ponto.
* Um email será enviado ao [gerente da empresa](../enterprise-profile/enterprise-settings.md#users) coordenando o ciclo confirmando quantas assinaturas foram processadas. Também detalhará possíveis erros (ex: um cartão que não pôde ser cobrado).

### Planejando assinaturas futuras

Há várias formas de planejar ciclos futuros pra sua empresa, agora que você oferece a opção de assinatura automática regular:

* Crie todos os ciclos da temporada antecipadamente. Um jeito rápido é copiar um ciclo e modificar as datas de abertura/fechamento e nome pra abranger o período desejado. Adicione os ciclos aos cronogramas de assinatura conforme desejado.

{% hint style="info" %}
Se você configura muitos ciclos com antecedência, confirme com seus fornecedores sobre a disponibilidade sazonal dos itens!
{% endhint %}

* Crie ciclos semanalmente (ou mensalmente). Na criação, garanta que também adiciona ao cronograma de assinatura relevante.

{% hint style="success" %}
Dicas:

* Você pode promover o fato de que oferece assinaturas. Isso pode atrair clientes potenciais. Esquemas de cesta de verduras são muito populares e podem ser replicados usando a funcionalidade de assinatura.
* Se você nota que vários clientes pedem os mesmos itens regularmente, oferecer a eles a opção de pedido automatizado (assinatura) pode ser muito apreciado.
{% endhint %}
