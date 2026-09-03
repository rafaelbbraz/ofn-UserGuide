# Gerenciar pedidos

No admin há dois lugares onde os pedidos podem ser visualizados e modificados (se necessário):

1. a página [Pedidos](view-orders.md#listing-orders),
2. a página [Gerenciamento de Pedidos em Lote](view-orders.md#bulk-order-management).

Os recursos das duas páginas são discutidos abaixo.

## Listando pedidos

A página de listagem mostra uma visão em lista de todos os pedidos feitos pela(s) sua(s) loja(s). Daqui você acessa detalhes de pedidos individuais, edita pedidos e acompanha o status de pagamento e entrega. Para detalhes de como criar um novo pedido manualmente para um cliente veja [aqui](create-orders-manually.md).

A página tem filtros que permitem selecionar quais pedidos visualizar. Você pode filtrar por data, status ou email e nome do cliente.

![](<../../.gitbook/assets/listing orders.jpg>)

**Distribuidor:** É a empresa em cuja loja o pedido foi feito.

**Concluído em:** Data em que o pedido foi feito.

**Número:** Número arbitrário atribuído ao pedido. Um símbolo de exclamação com a palavra 'Nota' à esquerda aparecerá se o cliente incluiu um comentário no checkout. Passe o mouse sobre o exclamação pra ver o comentário.

**Estado:**

* Completo: O cliente finalizou o checkout.
* Cancelado: Se um gerente da empresa ou um cliente escolheu 'cancelar'.
* Carrinho: O cliente está no processo de compra mas ainda não finalizou.

**Estado do pagamento:**

* Saldo devedor: Se é dinheiro, transferência bancária ou similar (todos os pagamentos não automatizados), o pedido ficará 'saldo devedor' por padrão até que membros admin da empresa distribuidora marquem manualmente que o pagamento foi recebido — nesse ponto o estado muda pra 'pago'.

![](<../../.gitbook/assets/balance due.jpg>)

* Pago: Para pagamentos automatizados (PayPal, Stripe SCA), o gateway marca automaticamente um pedido como 'pago' quando processado.\
  Pagamentos não automatizados (dinheiro, transferência etc.) também serão marcados como 'pago' quando o pagamento for capturado manualmente (veja [Alterando o estado de pagamento e envio](view-orders.md#payment-and-shipment-state)).
* Crédito devido: Se alguém pagou pelo pedido, mas depois você edita o pedido e remove um item, o custo desse item vira 'crédito devido'.

![](<../../.gitbook/assets/credit owed.jpg>)

**Estado da entrega:**

* Pendente: Quando o pagamento é 'saldo devedor', a entrega fica pendente — significa que até o pagamento ser recebido, o envio não deve começar.
* Pronto: Quando o pagamento é recebido (status 'pago' ou 'crédito devido'), o estado da entrega vira 'pronto'.
* Enviado: Após entrega ou coleta, um pedido pode ser marcado manualmente como 'enviado' pelo gerente da empresa (veja [Alterando o estado de pagamento e envio](view-orders.md#payment-and-shipment-state)).

{% hint style="warning" %}
Você só pode atualizar manualmente um pedido pra 'enviado' se o estado do pagamento é 'pago' ou 'crédito devido'.
{% endhint %}

**Email do cliente:** Email de contato do cliente.

**Nome do cliente:** No formato 'Sobrenome, Nome'.

**Total:** Valor total do pedido do cliente.

### **Alterando o estado de pagamento e entrega de um pedido** <a href="#payment-and-shipment-state" id="payment-and-shipment-state"></a>

Ao lado de cada pedido na lista há dois ícones. Clicando no ícone de editar (símbolo de caneta e papel) abre os detalhes do pedido pra você revisar ou editar. Abaixo do ícone de edição haverá um de dois ícones. Eles mostram o status de pagamento e entrega, e podem ser clicados pra alterar. Se um pagamento não foi recebido, o ícone mostrará um "check" que pode ser clicado pra capturar o pagamento. Se o pagamento foi recebido, o ícone será uma estrada, que pode ser clicada pra marcar o pedido como entregue.

* Clicar no ícone "check" (destacado em vermelho abaixo) mudará o Estado do Pagamento pra **Pago**.
* Clicar no ícone de estrada (destacado em verde abaixo) mudará o estado da entrega pra **Enviado**.

![](<../../.gitbook/assets/orders capture.jpg>)

{% hint style="info" %}
O status de pagamento e entrega de um pedido também pode ser atualizado ao editar o pedido (veja [abaixo](view-orders.md#editing-an-order)).
{% endhint %}

#### Capturando um pagamento

Capturar um pagamento marca como recebido. Útil quando clientes não pagam no momento do pedido. Quando você recebe dinheiro ou transferência do cliente, entra na Listagem de Pedidos e captura o pagamento. Pra capturar rapidamente como recebido ou marcar um pedido como enviado, clique nos ícones de check ou estrada à direita do pedido na Lista.

Note que isso captura o valor total do pedido como pago. Se você quer revisar os detalhes antes de capturar, selecione o ícone de editar à direita. Na tela de Detalhes do Pedido, clique em Pagamentos pra ver o Saldo devedor e Status do Pagamento. Daí você clica no check pra capturar. Uma vez capturado, o Status muda pra Concluído.

![](<../../.gitbook/assets/payments capt.jpg>)

{% hint style="danger" %}
Quando um gerente de loja/central atualiza o 'Estado da entrega' pra 'enviado', _**isso envia automaticamente um email ao cliente**_ dizendo que os produtos foram enviados, independente do método de envio. Portanto pode causar confusão pra pedidos que serão coletados (em vez de enviados).\
Outra fonte potencial de confusão é quando clientes pagam na coleta. Atualizar o status de pagamento (e depois envio) após a coleta dos produtos enviará um email ao cliente, mesmo que ele já tenha os produtos.
{% endhint %}

### **Editando um pedido**

À direita de um pedido você vê um ícone de caneta e papel. Clique nele pra acessar a página de gerenciamento onde pode editar, modificar e cancelar um pedido.

Assim é a página de gerenciamento do pedido:

![](<../../.gitbook/assets/edit order.jpg>)

#### **Adicionar e remover produtos de um pedido**

Você pode adicionar um produto ao pedido selecionando a variante desejada de uma lista suspensa das disponíveis (pelo menos 3 letras precisam ser digitadas em 'Selecionar Variante' pra lista de opções aparecer). Pra remover um produto do pedido, clique no ícone de lixeira à direita. Você também pode alterar a quantidade de cada item pedido. Lembre de clicar no botão **atualizar e recalcular taxas** pra salvar as alterações (isso também atualizará as taxas de empresa, envio e pagamento quando apropriado).

**Alterando o método de envio**

Um cliente pode entrar em contato pedindo pra receber os produtos por entrega em vez de coleta. Você pode editar o método de envio atribuído ao pedido selecionando o símbolo de editar à direita do método de envio:

![](<../../.gitbook/assets/edit shipping 1.jpg>)

Aí você tem acesso a todos os métodos disponíveis. Selecione o que o cliente quer usar.

![](<../../.gitbook/assets/edit shipping 2.jpg>)

Pra salvar as alterações, selecione o ícone de 'check' à direita. Pra descartar, selecione o 'X'.

**Adicionar rastreamento ou uma nota a um pedido**

Se o pedido será enviado por transportadora e você tem detalhes de rastreamento, pode adicioná-los selecionando o símbolo 'caneta e papel' à direita de 'Detalhes de rastreamento' (destacado em vermelho abaixo).

Clientes podem adicionar notas aos pedidos no checkout, como onde deixar uma encomenda se não estiverem em casa. Às vezes esquecem de adicionar no checkout e contatam depois com esse tipo de informação. Você pode adicionar a nota retrospectivamente selecionando o símbolo de caneta e papel à direita de Notas (destacado em verde abaixo).

<figure><img src="../../.gitbook/assets/tracking or note.jpg" alt=""><figcaption></figcaption></figure>

### **Opções adicionais em 'Ações'**

![](<../../.gitbook/assets/actions (1).jpg>)

* **Reenviar Confirmação**: Se você editou o pedido, pode querer reenviar um email de confirmação atualizado.
* **Enviar Nota Fiscal**: Envia automaticamente ao cliente uma [nota](../reports/view-orders.md) (em PDF) por email. Enviar nota é puramente pra registros e não facilita pagamento.
* **Imprimir Nota:** Gera a [nota](../reports/view-orders.md) em formato PDF pra impressão.
* **Cancelar Pedido:** Cancela o pedido. É importante processar quaisquer reembolsos ou ajustes antes de cancelar. **Um pedido cancelado não pode ser editado ou reembolsado.**

{% hint style="info" %}
Mais informações sobre [notas](../reports/view-orders.md) da Nossa Feira aqui.
{% endhint %}

#### **Ver dados do cliente**

Informações do cliente (email, endereços de cobrança/entrega e telefones) são acessíveis no menu à direita da página:

![](<../../.gitbook/assets/customer details.jpg>)

#### **Modificar um pedido ou registrar pagamento parcial**

Clique em 'Ajustes' no menu à direita (captura acima). Nessa página você pode adicionar ou subtrair do total do pedido selecionando o botão **+ Novo Ajuste**.

![](<../../.gitbook/assets/adjustments 1 (1).jpg>)

Você pode usar essa funcionalidade pra:

* dar desconto em um pedido se um produto está danificado
* deduzir crédito devido ao cliente do saldo total
* reembolsar um cliente
* registrar um pagamento parcial
* veja [Reembolsando e Ajustando Pagamentos](refunds-and-adjusting-payments.md) pra mais informações sobre ajustes

<figure><img src="../../.gitbook/assets/adjustments 2.jpg" alt=""><figcaption></figcaption></figure>

## Gerenciamento de pedidos em lote

Vimos acima que a aba [Listando Pedidos](view-orders.md#listing-orders) apresenta uma tabela dos **pedidos por cliente**. A página de Gerenciamento de Pedidos em Lote, por outro lado, detalha todos os produtos comprados nos seus pedidos. Essa funcionalidade é útil pra modificar vários pedidos de uma vez que possam conter o mesmo produto (alteração de quantidade, produto fora de estoque etc.). A página se parece com:

![](<../../.gitbook/assets/bulk order 1.jpg>)

**Data inicial/final:** Você pode filtrar pra exibir todos os pedidos feitos em uma janela de tempo.

**Produtor:** Filtre por um produtor específico. Pode restringir a exibição se você só está interessado em um produto de um produtor.

**Loja:** Filtre pela loja em que o pedido foi feito.

**Ciclo de pedidos:** Talvez o filtro mais útil — exibe apenas os pedidos feitos em um ciclo selecionado.

**Ações:** Você pode selecionar as caixas de vários pedidos (coluna esquerda) pra executar a mesma função em todos eles, como deletar.

**Colunas:** Você pode selecionar quais campos quer ou não que sejam exibidos na tabela:

![](<../../.gitbook/assets/bulk columns.jpg>)

{% hint style="success" %}
Linhas ('Nome', 'Produtor', 'Produto: Unidade') podem ser ordenadas pelo conteúdo clicando no cabeçalho relevante da coluna: um clique pra A-Z, dois cliques pro reverso (Z-A).
{% endhint %}

{% hint style="warning" %}
A coluna **Preço** indica o preço de um item incluindo impostos mas excluindo taxas (da empresa, envio ou método de pagamento). Taxas são recalculadas cada vez que um pedido é modificado.
{% endhint %}

### Exemplos de uso do Gerenciamento em Lote:

#### Exemplo 1: Você tem escassez de estoque e precisa reduzir as quantidades pedidas de um produto.

_No seu ciclo atual, os clientes pediram 5kg de tomates. Infelizmente teve uma tempestade e você só conseguiu colher 2kg. Você precisa identificar todos os clientes que pediram tomates e reduzir pela metade os pedidos deles._

Isso pode ser feito no gerenciamento em lote:

1. Filtre pelo intervalo de datas ou ciclo atual.
2. Busque por 'tomates'. Todos os pedidos de tomates dentro do intervalo/ciclo aparecerão.
3. Clique no produto 'Tomates' na coluna Produto:Unidade.
4. Uma caixa aparecerá no topo da página, mostrando a quantidade total pedida (dentro do intervalo/ciclo selecionado).

![](<../../.gitbook/assets/beef tom.jpg>)

Você pode então ajustar a quantidade (ou deletar produtos) de cada pedido único na coluna Quantidade. A Quantidade Total Pedida na caixa do topo atualiza automaticamente conforme você ajusta.

{% hint style="danger" %}
Nenhum email automático é enviado aos clientes após você ajustar os pedidos. Boa prática é fazer isso manualmente, senão o cliente pode ficar decepcionado na coleta/entrega.
{% endhint %}

Aqui, a quantidade de tomates alocada a cada pedido foi reduzida pra atender o total disponível de 2kg:

![](<../../.gitbook/assets/beef tom adjusted.jpg>)

#### Exemplo 2: Atualizando o peso final de produtos.

Ao vender produtos indivisíveis como pernas de cordeiro ou abóboras inteiras, você pode não saber o peso e preço finais até depois que o cliente fez o pedido. (Leia mais [aqui](../products-1/pricing-irregular-items-kg.md).) Você pode usar o Gerenciamento em Lote pra atualizar o peso exato uma vez que tem o produto em mãos.

Exemplo de duas empadas anunciadas como 250g cada mas que acabam sendo 275g cada nesse lote:

1. Filtre pelo ciclo ou intervalo de datas.
2. Busque o produto desejado.
3. Torne as colunas **Peso/Volume** e **Preço** visíveis.
4. Informe o peso real das empadas que cada cliente receberá na coluna peso/volume. O preço será recalculado automaticamente.
5. Clique em atualizar.

![](<../../.gitbook/assets/bulk 2.jpg>)

## **Visão do cliente sobre seu pedido**

Seus clientes podem ver uma lista dos pedidos deles quando fazem login na Nossa Feira e clicam na conta (abaixo).

![](../../.gitbook/assets/account-login.png)

Aqui seus clientes verão os pedidos e pagamentos passados, além do saldo corrente na sua loja (e em qualquer outra da Nossa Feira em que fizeram pedidos).

![](<../../.gitbook/assets/customer account.jpg>)

{% hint style="warning" %}
Para pagamentos não automatizados (dinheiro, transferência etc.), o 'saldo' do cliente aparecerá como 'devendo' até você [registrar manualmente o pagamento](view-orders.md#editing-an-order).\
&#xNAN;_**Se os pagamentos não são atualizados regularmente por um gerente, isso pode confundir seus clientes — eles podem ter pago mas não estará documentado acima.**_
{% endhint %}
