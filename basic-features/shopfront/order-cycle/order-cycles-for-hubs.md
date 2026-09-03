# Ciclos de pedidos (para centrais)

{% hint style="warning" %}
Continue lendo se você selecionou o perfil de empresa '[Central Produtora ou Não-Produtora](../../../your-quick-start-on-ofn-given-who-you-are.md#hub)'.

Visite [esta página](order-cycles-for-producers.md) se você se cadastrou como '[Loja de Produtor](../../../your-quick-start-on-ofn-given-who-you-are.md#shop)' e quer configurar um ciclo pra sua vitrine.
{% endhint %}

Você abre sua loja criando um Ciclo de Pedidos. Ao criar um ciclo, você seleciona quando sua loja está aberta (de e até quando), quais produtos entrarão na loja e quaisquer taxas aplicáveis.

**Por que ciclos de pedidos?**\
Algumas centrais podem querer ter uma loja online perpetuamente aberta e atender pedidos um por um conforme recebidos. Mas muitas centrais operam com um sistema de pedidos periódico que permite processar pedidos em lote, tornando as atividades de produção, embalagem e distribuição mais eficientes (e reduzindo custos operacionais associados).

Por exemplo, um ciclo de pedidos pode ficar aberto por duas semanas. No fim da quinzena, todos os pedidos serão empacotados e entregues ao mesmo tempo na quarta-feira seguinte. Uma vez que esse lote for entregue, um novo ciclo pode reabrir.

## Visualizando ciclos de pedidos

Você pode criar um ciclo e ver ciclos anteriores clicando em **Gerenciar Ciclos de Pedidos** no seu [dashboard](../../dashboard.md).

![](<../../../.gitbook/assets/dashboard order cycle.jpg>)

Ou no menu horizontal no topo da página.

![](<../../../.gitbook/assets/oc list.jpg>)

{% hint style="warning" %}
Você não conseguirá publicar um ciclo ativo até ter pelo menos um método de [pagamento](../payment-methods.md) e [envio](../shipping-methods.md) configurados pra sua empresa.
{% endhint %}

## Criar um novo ciclo de pedidos

O primeiro passo é selecionar um coordenador pro seu ciclo. Apenas a empresa que coordena um ciclo tem permissão pra modificar e gerenciar **todos** os aspectos do ciclo.\
Outras empresas envolvidas em um ciclo (apenas como fornecedoras ou distribuidoras) têm acesso restrito.\
Pra mais informações sobre gerenciamento entre empresas no contexto de ciclos, [clique aqui](permissions-in-multi-enterprise-order-cycles.md).

![](<../../../.gitbook/assets/oc cord.jpg>)

Uma vez escolhido o coordenador, o processo de configuração pode ser dividido em quatro passos:

### 1) Configurações gerais

![](<../../../.gitbook/assets/general settings Oc.jpg>)

**Nome (**_**obrigatório**_**):** Dê ao ciclo um nome significativo pra você. Recomendamos seguir um protocolo consistente de nomenclatura, ex: CentralAlimentos\_Semana27\_2026. Também recomendamos incluir o nome da sua central no nome do ciclo, pra que o suporte da Nossa Feira consiga identificar seus ciclos se você precisar de ajuda.

**Pedidos abrem em:** Data e hora em que sua loja estará aberta, visível e apta a aceitar pedidos.

**Pedidos fecham em:** Data e hora em que sua loja fechará e deixará de aceitar pedidos. Se você pretende ter um ciclo continuamente aberto, selecione uma data de fechamento bem no futuro.

**Adicionar taxa do coordenador:** Como central, o coordenador provavelmente é você. Aqui você pode aplicar sua Taxa da Empresa que atua como margem. A taxa será calculada de acordo com a calculadora selecionada em [Taxas da Empresa](../enterprise-fees.md). Você só pode aplicar uma taxa da empresa criada previamente.

### 2) Produtos entrantes

![](<../../../.gitbook/assets/oc incoming.jpg>)

Nesta página você seleciona os produtores e seus produtos que estarão disponíveis nesse ciclo. No menu suspenso, você verá todos os produtores que te concederam permissão pra adicionar produtos ao seu ciclo (veja [Permissões entre Empresas](../../enterprise-profile/enterprise-to-enterprise-permissions-e2es.md)).\
Após selecionar um fornecedor e clicar em **Adicionar Fornecedor**, todos os produtos associados aparecerão. Marque os produtos que quer adicionar à loja, ou clique em **selecionar tudo**.

{% hint style="info" %}
Produtos fora de estoque (com valor 'em estoque' igual a zero) aparecem na lista mas, se adicionados ao ciclo, não aparecerão na vitrine. Sempre é bom conferir os níveis de estoque.
{% endhint %}

O campo **Detalhes de recebimento** é opcional. Informações adicionadas aqui serão automaticamente incluídas em qualquer email enviado aos produtores no fim de um ciclo (após clicar em 'Notificar Produtores'). Pode ser bom incluir um endereço de entrega exato pra os produtos antes da distribuição aos clientes.

O botão **Adicionar Taxa** nesta seção, no fim de cada entrada de produtor na tabela, permite adicionar diferentes [taxas da empresa](../enterprise-fees.md) a diferentes fornecedores. Por exemplo, transportar farinha ou produtos pesados aos clientes pode ser mais caro pra uma central do que salada. Assim, uma central pode adicionar de forma transparente uma taxa um pouco maior a produtos fornecidos pelo moinho de farinha do que ao agricultor de salada.

Selecione o nome da empresa que aplica a taxa no primeiro menu suspenso, depois clique no nome da taxa da empresa no segundo menu.

![Aplicar taxa da empresa ao fornecedor entrante](<../../../.gitbook/assets/ent fee incoming oc.jpg>)

{% hint style="warning" %}
Essa taxa será aplicada a todos os produtos do 'produtor demo' que forem comprados. A taxa é calculada de acordo com a calculadora selecionada quando a [Taxa da Empresa](../enterprise-fees.md) foi criada.
{% endhint %}

### 3) Produtos saintes

Aqui você seleciona uma ou mais centrais-distribuidoras. Todas as centrais escolhidas como distribuidoras nesse ciclo terão uma vitrine aberta durante o ciclo.\
Em um **modelo simples**, apenas uma central é listada como única distribuidora. Selecione a central e marque a caixa 'Selecionar tudo' pra adicionar todos os produtos entrantes à vitrine.\
Pra mais flexibilidade, o mesmo ciclo pode ter **múltiplas centrais distribuidoras**. Nesse caso você pode selecionar um subconjunto diferente dos produtos disponíveis para cada distribuidor, e/ou adicionar datas de entrega diferentes pra cada.

![](<../../../.gitbook/assets/oc outgoing.jpg>)

A coluna **Tags** é onde você pode marcar seus ciclos pra customizar se são visíveis/invisíveis para certos clientes. Veja [tags e regras de tags](../customer-management-and-conditional-displays-prices/tags-and-tag-rules.md) pra mais informações.

**'Pronto em (data/hora)' (**_**obrigatório**_**):** Essa caixa informa ao cliente quando seu pedido estará pronto pra coleta ou entrega. Se seu ciclo é perpétuo, atendendo pedidos individualmente em vez de em lote, você deve informar algo como 'Dois dias após o recebimento do pedido'. O exemplo abaixo mostra como um cliente pode alternar entre diferentes ciclos pra selecionar a data que melhor lhe convém.

![](../../../.gitbook/assets/multipleoc3.jpg)

{% hint style="info" %}
Se você opera com uma vitrine continuamente aberta (define a 'data de fechamento do ciclo' mais de 3 meses no futuro), a caixa de texto azul 'Pronto em' na sua vitrine (mostrada na captura acima) exibirá 'Pedidos estão abertos'.
{% endhint %}

**Adicionar Taxa:** Novamente, uma taxa da empresa criada previamente pode ser atribuída a esse distribuidor. Para modelos simples (com uma central distribuidora que também é a coordenadora), adicionar uma taxa aqui é o mesmo que adicionar uma 'Taxa do Coordenador' (será aplicada a todos os produtos).\
Para modelos complexos, o coordenador pode querer adicionar taxas diferentes a todos os produtos vendidos por cada distribuidor. O melhor lugar pra implementar essa funcionalidade é aqui.

### 4) Opções de checkout

Sua empresa pode ter vários ciclos abertos ao mesmo tempo, cada um com diferentes opções de coleta/entrega ou métodos de pagamento. Por exemplo, você pode ter dois ciclos concorrentes:

1. Produtos disponíveis pra coleta em um local físico em data e hora específicas. Você estará lá em pessoa e pode oferecer dinheiro na coleta como método de pagamento.
2. Produtos que podem ser enviados via correios (itens não perecíveis). Você prefere que os clientes paguem antes do envio e portanto quer só permitir 'pagamento com cartão' como opção visível.

Para fazer isso, sua empresa precisa ter métodos de envio de coleta e entrega configurados, além de dois métodos de pagamento diferentes (dinheiro na coleta e cartão).

Você pode então atribuir os métodos de envio e pagamento que quer usar para ciclos específicos (e portanto os produtos que contêm) durante o quarto estágio da configuração, simplesmente marcando as caixas:

<figure><img src="../../../.gitbook/assets/oc checkout options.jpg" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Por padrão, a caixa 'Selecionar tudo' vem marcada.
{% endhint %}

As opções aparecem pro cliente assim no checkout:

![](<../../../.gitbook/assets/shipping checkout multi.jpg>)

E todas as informações relevantes de envio/entrega e pagamento serão resumidas no email de confirmação do cliente:

![Mensagem de detalhes de coleta](<../../../.gitbook/assets/customer order confirm email.jpg>)

### Abrir a vitrine

Clique em **Salvar** pra agendar o ciclo. Se a data de abertura já passou, sua loja abre instantaneamente! Se você não está pronto pra abrir imediatamente, informe datas futuras que você pode alterar depois.

Para ciclos periódicos e repetitivos, você pode copiar um ciclo existente e alterar as datas pra tornar o processo mais rápido. Clique no botão com duas folhas de papel à direita da tabela, destacado abaixo:

![](<../../../.gitbook/assets/oc list copy.jpg>)

Ciclos de pedidos aparecem em verde quando estão ativos, amarelo quando agendados para o futuro e cinza quando fechados. Se um ciclo foi fechado há mais de um mês, não aparecerá mais nessa lista. Pra ver todos os ciclos passados, clique em **mostrar mais 30 dias** ou **mostrar mais 90 dias** no fim da lista.

{% hint style="warning" %}
Reabrir um ciclo para reabrir uma vitrine pode causar confusão no checkout do cliente, veja o aviso mostrado abaixo. Para vitrines que abrem periodicamente, duplique ou crie novos ciclos cada vez que abrir a loja em vez de editar as datas de abertura e fechamento de um ciclo.
{% endhint %}

Os clientes serão avisados quando já tiverem feito pedido em um ciclo, mesmo se o ciclo foi fechado por um tempo antes de reabrir:

![](<../../../.gitbook/assets/pop up in checkout.jpg>)

## Botão 'Notificar Produtores'

Ao usar esse botão no topo da página, todos os produtores vinculados ao ciclo recebem um email com a lista de produtos pedidos até o momento.

![](<../../../.gitbook/assets/notify producers.jpg>)

Ao selecionar o botão Notificar Produtores, aparecerá uma confirmação. Uma vez confirmado, um email será enviado automaticamente a todos os produtores relevantes. O email incluirá instruções de entrega (se esse campo foi preenchido na seção de produtos entrantes) além das seguintes informações do produto:

* SKUs (se relevante)
* Nome do fornecedor
* Nome do produto
* Quantidade pedida
* Preço unitário
* Subtotal por produto
* Imposto incluso (se relevante)

### Configurando notificações automáticas para produtores

Se você quer que os emails aos produtores sejam enviados automaticamente quando um ciclo fecha, pode fazer isso pelo menu 'Configurações avançadas' na tela de edição do ciclo:

![](<../../../.gitbook/assets/advanced settings.jpg>)

No menu que aparece, marque a caixa 'notificações automáticas' e clique em 'salvar e recarregar a página' pra salvar as alterações:

![](<../../../.gitbook/assets/auto notify.jpg>)

Pra também mostrar **nomes de clientes** nesses relatórios, por exemplo pra ajudar seus produtores a empacotarem os itens por cliente, garanta que a configuração 'nomes de clientes em relatórios' está habilitada no menu de preferências da loja das configurações da sua empresa:

![](<../../../.gitbook/assets/names in reports.jpg>)

{% hint style="info" %}
Por padrão, 'nomes de clientes em relatórios' está desabilitada. Garanta que ela está habilitada para seus produtores se você quer que eles recebam relatórios agrupados por cliente pra ajudar a empacotar os pedidos.
{% endhint %}

Uma vez que você configura as notificações automáticas para um ciclo, seus produtores receberão um email automaticamente após o ciclo fechar. Habilitar 'nomes de clientes em relatórios' vai ajudá-los a empacotar os pedidos por cliente.

## Relatórios de produtor / fornecedor

Se seu Ciclo de Pedidos inclui produtos de produtores/fornecedores vinculados, eles poderão fazer login na conta da Nossa Feira e ver [relatórios](../../reports/) sobre o ciclo. Por padrão, eles não conseguirão ver dados de clientes nesses relatórios. Se você quer que seus fornecedores acessem nomes de clientes nos relatórios, pode ajustar essas configurações em Preferências da Loja nas [Configurações da Empresa](../../enterprise-profile/enterprise-settings.md).
