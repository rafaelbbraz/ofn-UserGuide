# Vitrine apenas de exibição

Em alguns casos, donos de loja podem querer exibir produtos mas não permitir que clientes façam checkout. Por exemplo, pra mostrar a linha completa de produtos (que pode variar sazonalmente), ou dar aos clientes potenciais uma ideia dos produtos que estarão à venda no próximo ciclo antes dele abrir.

Para configurar um ciclo apenas de exibição:

* Abra um [Ciclo de Pedidos](order-cycle/order-cycles-for-hubs.md) normalmente, com os produtos que quer exibir e o intervalo de datas do ciclo.
* Altere o estado de 'Exibição' de todos os seus [Métodos de Pagamento](payment-methods.md) para 'Apenas back office'. Isso pode ser feito em Empresas -> Configurações -> Métodos de Pagamento -> Editar:

![](<../../.gitbook/assets/back office payment.jpg>)

Sua loja agora está no estado 'apenas exibição'.\
Abaixo, um exemplo de como a loja aparece aos clientes. Fica claramente marcada como fechada, mas os clientes conseguem ver a linha de produtos.

![](../../.gitbook/assets/displayonly.jpg)

{% hint style="warning" %}
Quando você abrir um próximo ciclo ativo para vender, precisará alterar o estado de Exibição de pelo menos um [método de pagamento](payment-methods.md) para 'Checkout e back office' ou 'Apenas checkout'.
{% endhint %}
