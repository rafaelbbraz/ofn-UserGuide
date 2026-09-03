# Ciclos de pedidos (para lojas)

{% hint style="warning" %}
Continue lendo se você está cadastrado como [Loja de Produtor](../../../your-quick-start-on-ofn-given-who-you-are.md#shop) e quer abrir sua própria loja.

Visite [esta página](order-cycles-for-hubs.md) se você quer abrir uma loja online pra uma vitrine multi-produtor ([central](../../../your-quick-start-on-ofn-given-who-you-are.md#hub)).
{% endhint %}

Na Nossa Feira, os Ciclos de Pedidos são onde os gerentes de loja abrem sua loja. Isso envolve selecionar quais dos seus produtos estão em estoque, quais taxas se aplicam e as datas de abertura e fechamento da loja.

**Por que usar Ciclos de Pedidos?**\
Muitos produtores que vendem pequenas quantidades podem achar útil ter um ciclo perpetuamente aberto e atender pedidos individualmente conforme chegam.\
Outros produtores que vendem grandes quantidades a múltiplos clientes acham útil estabelecer ciclos periódicos, coletivamente atendidos no fim de um período. Por exemplo, um agricultor pode ter um ciclo aberto (aceitando pedidos) por duas semanas. No fim do ciclo, todos os pedidos são empacotados, ordenados e distribuídos ao mesmo tempo. Uma vez que esse lote for atendido, um novo ciclo é aberto. Estruturar ciclos dessa forma pode tornar as tarefas de embalagem e entrega mais eficientes.

## Acessar ciclos de pedidos

Uma vez logado no dashboard admin, você pode acessar ciclos por esse botão:

![](<../../../.gitbook/assets/dashboard order cycle.jpg>)

Ou 'Ciclos de Pedidos' no menu horizontal principal no topo da página. Depois clique em **+Novo Ciclo de Pedidos**.

![](<../../../.gitbook/assets/oc list.jpg>)

{% hint style="info" %}
Note que você não pode criar um ciclo até ter pelo menos um método de [envio](../shipping-methods.md) e um de [pagamento](../payment-methods.md) configurados.
{% endhint %}

Você será redirecionado a uma nova tela:

![](<../../../.gitbook/assets/oc shop.jpg>)

**Nome (**_**obrigatório**_**):** Escolha um nome pra esse ciclo. Só será visível pra você, então pode ser qualquer coisa significativa. Recomendamos seguir um protocolo consistente de nomenclatura, ex: CentralAlimentos\_Semana27\_2026.

**Pedidos abrem:** Data em que sua loja estará aberta e começará a aceitar pedidos.

**Pedidos fecham:** Data em que sua loja fechará e deixará de aceitar pedidos. Se você pretende ter um ciclo continuamente aberto, selecione uma data de fechamento bem no futuro.

**Pronto em (data/hora) (**_**obrigatório**_**):** Essa caixa informa ao cliente quando o pedido estará pronto pra coleta ou entrega.

{% hint style="info" %}
Se seu ciclo é constantemente aberto, use essa caixa pra informar algo como 'Dois dias após o pedido'.
{% endhint %}

{% hint style="info" %}
Se você tem ciclos específicos de produto ou localização rodando concorrentemente, pode 'hackear' esse campo adicionando informação extra, ex: 'Carnes pra terça'.
{% endhint %}

**Instruções ao cliente:** Essa mensagem será incluída no email de confirmação do cliente, abaixo da mensagem correspondente ao método de envio escolhido. Essa nota é visível apenas pros clientes, então você pode incluir informações mais sensíveis como endereços, telefones etc.

**Produtos:** Você precisa selecionar os produtos que serão visíveis na sua loja online durante esse ciclo.

{% hint style="info" %}
Lembre, se você adicionar novos produtos depois que um ciclo está em andamento, precisa selecioná-los aqui, senão não aparecerão online!
{% endhint %}

**Adicionar taxa do coordenador:** Existe a opção de adicionar uma taxa do coordenador. Aqui você pode aplicar uma [taxa da empresa](../enterprise-fees.md) criada pra sua empresa.

## Abrir a vitrine

Clique em Criar pra salvar esse ciclo.

{% hint style="warning" %}
Se a data de abertura do ciclo já passou, sua vitrine estará ativa imediatamente!\
Se você não está bem pronto pra abrir, defina 'Abre em' pra uma data futura.
{% endhint %}

Para ciclos periódicos e repetitivos, você pode copiar um ciclo existente e alterar as datas, tornando o processo mais rápido. Selecione o ícone com duas folhas de papel à direita da tabela, destacado abaixo:

![](<../../../.gitbook/assets/oc list copy.jpg>)

Ciclos de pedidos aparecem em verde quando estão ativos, amarelo quando agendados pra o futuro e cinza quando fechados. Se um ciclo foi fechado há mais de um mês, não aparecerá nessa lista. Pra ver todos os ciclos passados, clique em **mostrar mais 30 dias** ou **mostrar mais 90 dias** no fim da lista.

{% hint style="warning" %}
Reabrir um ciclo para reabrir uma vitrine pode causar confusão no checkout, veja o aviso abaixo. Para vitrines que abrem periodicamente, duplique ou crie novos ciclos cada vez que abrir a loja em vez de editar as datas de um mesmo ciclo.
{% endhint %}

Os clientes serão avisados quando já tiverem feito pedido em um ciclo, mesmo se o ciclo foi fechado por um tempo antes de reabrir:

![](<../../../.gitbook/assets/pop up in checkout.jpg>)
