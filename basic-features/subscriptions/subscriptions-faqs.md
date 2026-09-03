# Assinaturas — Perguntas frequentes

### **Se eu remover um Ciclo de Pedidos de um cronograma quando ele já tem pedidos de assinatura abertos, o que acontece com esses pedidos? As assinaturas serão deletadas?**

Esses pedidos permanecerão abertos. No fechamento do ciclo, os pedidos de assinatura serão processados como pedidos normais de assinatura. Se você quiser cancelar todos os pedidos de assinatura que estavam ligados a esse ciclo, precisará [deletar cada pedido de assinatura individualmente](subscriptions-creating-and-managing-orders.md#edit-a-customers-subscription).

### **Se eu adicionar uma nova assinatura no meio de um ciclo aberto, será gerada uma assinatura pra esse cliente?**

Sim, se você criar uma assinatura enquanto há um ciclo aberto no cronograma, um pedido será gerado pra esse cliente. Se você não quer que a assinatura se aplique ao ciclo aberto atual, precisa definir a data de início da assinatura pra depois do fechamento desse ciclo.

### **E se parte do estoque estiver disponível mas não todo? Quais clientes recebem o estoque limitado?**

No caso de o valor 'Em estoque?' de um produto não ser suficiente pra atender todos os pedidos de assinatura, o estoque limitado não será alocado uniformemente entre clientes — em vez disso, atenderá os pedidos dos clientes com estoque disponível até acabar. Alguns clientes receberão o pedido completo, outros não receberão nada.

### **E se eu alterar a assinatura enquanto está 'aberta'?**

Não é possível _**adicionar itens**_ ao pedido base da assinatura enquanto um ciclo do cronograma da assinatura está aberto. Quaisquer produtos adicionais precisarão ser adicionados quando os ciclos estiverem fechados (ou seja, para assinaturas semanais atribuídas ao cronograma 'Semanal', no período entre o fechamento do ciclo A e a abertura do ciclo B, onde ambos A e B pertencem ao 'Semanal').

Se você editar a assinatura base do cliente pra _**remover produtos**_ enquanto um ciclo está aberto, essa alteração impactará o pedido feito no ciclo atual.

### **E se há estoque limitado mas depois um cliente cancela o pedido — esse estoque será automaticamente alocado a outros assinantes que queriam esse produto mas não puderam ter?**

Não, se um cliente cancela o pedido de assinatura ou remove um produto, esse estoque voltará ao valor 'Em estoque?' do produto. Não será automaticamente alocado a outros clientes, mas você poderia agora adicionar esse estoque ao pedido de outro cliente manualmente [editando o pedido](../orders/view-orders.md#editing-an-order).

### **Eu ou o cliente podemos editar um pedido feito pelo sistema de assinatura?**

Depende se você quer adicionar ou remover produtos:

* Como gerente da empresa você poderá **remover produtos** (ou cancelar um pedido) que foi feito pelo sistema de assinatura via painel admin da Nossa Feira [normalmente](../orders/view-orders.md#editing-an-order).
* Como gerente da empresa, se você **adicionar produtos** a um pedido feito pelo sistema de assinatura via [painel admin](../orders/view-orders.md#editing-an-order), isso [gerará um segundo pagamento](../orders/refunds-and-adjusting-payments.md#collecting-additional-payments) que não será processado automaticamente no fim do ciclo.
* Se você habilitar os clientes a [editar ou cancelar pedidos](../enterprise-profile/enterprise-settings.md#shop-preferences) enquanto o ciclo está aberto, eles poderão remover itens do pedido de assinatura. Pra adicionar itens, precisarão gerar um segundo pedido e passar pelo checkout normalmente.
