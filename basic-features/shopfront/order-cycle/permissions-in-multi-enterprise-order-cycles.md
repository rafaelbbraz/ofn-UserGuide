# Permissões em ciclos de pedidos multi-empresa

Esta página explica os direitos que cada empresa tem no contexto de ciclos complexos com múltiplas empresas. Seja:

* o produtor ([perfil](../../../your-quick-start-on-ofn-given-who-you-are.md#profile) ou [loja](../../../your-quick-start-on-ofn-given-who-you-are.md#shop)) que apenas fornece ao ciclo,
* uma [central](../../../your-quick-start-on-ofn-given-who-you-are.md#hub) que apenas distribui produtos,
* ou uma central que [coordena](permissions-in-multi-enterprise-order-cycles.md#the-coordinator) o ciclo (e pode ou não também fornecer ou distribuir produtos).

Para mais detalhes sobre ciclos simples envolvendo um único produtor vendendo seu próprio estoque ([loja de produtor](../../../your-quick-start-on-ofn-given-who-you-are.md#shop)), veja [aqui](order-cycles-for-producers.md).

_**O coordenador tem o maior grau de controle sobre um ciclo. Outras empresas podem ver os ciclos em que estão envolvidas mas só editar configurações que as afetam.**_

## O coordenador

{% hint style="info" %}
**Funcionalidade completa de ciclo de pedidos** só pode ser obtida se uma empresa é cadastrada como [Central](../../../your-quick-start-on-ofn-given-who-you-are.md#hub). Pra alterar o tipo da sua empresa, veja [aqui](../../enterprise-profile/package-types.md#changing-your-profile-type).
{% endhint %}

{% hint style="warning" %}
Uma vez criado um ciclo, não é possível alterar o coordenador.
{% endhint %}

O coordenador de um [Ciclo de Pedidos](order-cycles-for-hubs.md) pode:

* Criar os ciclos.
* Definir e editar o nome do ciclo, além das datas de abertura e fechamento.
* Aplicar taxas da empresa a todos os produtos (taxa do coordenador), a produtos fornecidos por produtores (na seção de [entrantes](permissions-in-multi-enterprise-order-cycles.md#incoming)) e/ou a produtos distribuídos por centrais (na seção de [saintes](permissions-in-multi-enterprise-order-cycles.md#outgoing)).

### **Entrantes**

* O coordenador pode adicionar empresas como fornecedoras. Mas a empresa fornecedora (cadastrada como [Produtor](../../enterprise-profile/package-types.md#for-producers)) precisa ter concedido à central coordenadora [permissão pra adicionar seus produtos a um ciclo](../../enterprise-profile/enterprise-to-enterprise-permissions-e2es.md#granting-and-managing-permissions).
* O coordenador pode selecionar todos ou um subconjunto de produtos dos seus fornecedores que quer incluir no ciclo.
* O coordenador pode aplicar [taxas da empresa](../enterprise-fees.md) diferenciadas a cada fornecedor. Por exemplo, pode cobrar taxa maior de um açougueiro fornecedor (pra cobrir o custo extra de transporte refrigerado) do que de um padeiro.

### **Saintes**

O coordenador pode escolher por quais empresas os produtos listados em um ciclo são distribuídos (incluindo ele mesmo).

Para isso, cada distribuidor potencial precisa:

1. Estar cadastrado como [Central](../../../your-quick-start-on-ofn-given-who-you-are.md#hub).
2. Ter concedido à central coordenadora [permissão pra adicionar produtos](../../enterprise-profile/enterprise-to-enterprise-permissions-e2es.md#granting-and-managing-permissions) a um ciclo.
3. Ter pelo menos um método ativo de [envio](../shipping-methods.md) e [pagamento](../payment-methods.md).

{% hint style="info" %}
Se uma empresa distribuidora potencial aparece na lista de opções possíveis na seção de saintes do ciclo mas não pode ser selecionada, provavelmente ela ainda não configurou métodos de envio e/ou pagamento.
{% endhint %}

O coordenador pode escolher da lista completa de produtos entrantes quais serão exibidos na vitrine de cada central distribuidora. _**O fornecedor (perfil de produtor ou loja) precisa ter configurado uma**_ [_**permissão entre empresas**_](../../enterprise-profile/enterprise-to-enterprise-permissions-e2es.md) _**de 'adicionar ao ciclo de pedidos' entre ele e a central distribuidora específica (assim como o coordenador)**_.

O coordenador pode aplicar [taxas da empresa](../enterprise-fees.md) diferenciadas a cada central distribuidora se desejar. Isso pode ser vantajoso se uma central está mais distante do coordenador do que outra, e portanto teria maior custo de transporte associado.

## Empresas fornecedoras (entrantes)

O fornecedor ([produtor](../../enterprise-profile/package-types.md#for-producers)) pode ver todos os ciclos em que está envolvido visitando a página resumo de ciclos (no menu horizontal principal), mesmo que não tenha criado os ciclos.\
Clicando no ciclo, um produtor entrante pode ver apenas seus detalhes, não os produtos ou detalhes de outros envolvidos. Ele pode editar itens relacionados a si mesmo: por exemplo, pode remover um produto fora de estoque do ciclo.\
Uma empresa fornecedora não pode alterar o nome nem as datas de um ciclo.

Na seção Relatórios (menu horizontal principal), um produtor fornecedor entrante pode ver os pedidos que recebeu para o ciclo.

{% hint style="warning" %}
Uma empresa fornecedora entrante não vê automaticamente os nomes dos clientes que compraram seus produtos se ela não é também a coordenadora do ciclo. Essa configuração pode ser alterada pelo coordenador. Se você precisa ver nomes de clientes pra facilitar a embalagem e atendimento dos pedidos, contate seu coordenador de ciclo e peça pra marcarem a caixa Nomes de Clientes em Relatórios nas [Configurações da Empresa](../../enterprise-profile/enterprise-settings.md) em Preferências da Loja.
{% endhint %}

### **Entrantes**

* Um fornecedor pode ver, adicionar e remover _**seus**_ produtos da seção 'Produtos Entrantes' de um ciclo.
* Um fornecedor pode adicionar/remover taxas da empresa aplicadas aos _**seus**_ produtos na seção 'Produtos Entrantes'. Útil pra produtores que fornecem várias centrais, algumas mais distantes que outras. Podem querer adicionar uma taxa extra a centrais mais distantes pra cobrir custos de transporte.

### **Saintes**

O grau de influência que um fornecedor tem sobre seus produtos na seção 'Produtos Saintes' de um ciclo depende das permissões específicas entre empresas concedidas à central distribuidora e vice-versa.

* Se a central distribuidora concedeu ao produtor fornecedor (perfil, loja ou central) o direito de 'adicionar ao \[ciclo da central]', então o fornecedor pode ver, adicionar e remover produtos da lista na seção 'Produtos Saintes' do ciclo.
* Se a central distribuidora não concedeu essa permissão, então o fornecedor pode ver mas NÃO adicionar e remover produtos.
* Um fornecedor nunca pode alterar detalhes de coleta/entrega ou taxas da empresa aplicadas ao distribuidor.

## Empresa distribuidora (sainte)

Um distribuidor pode ver ciclos em que está envolvido na sua página resumo de ciclos, mesmo que não os tenha criado (ou seja, não é o coordenador).\
Clicando em um ciclo, a empresa distribuidora sainte pode ver detalhes do ciclo relacionados apenas a si mesma. (Por exemplo, se ela não é a única distribuidora, não conseguirá ver quem são as outras empresas distribuidoras nem os produtos que oferecerão na vitrine.)\
A central distribuidora sainte pode ver e editar detalhes da distribuição — datas e métodos de entrega, taxas da empresa pra distribuição — mas não o nome nem o período do ciclo.

No menu 'Relatórios', um distribuidor de ciclo pode ver os pedidos feitos (junto com nomes de clientes) pra auxiliar entrega/expedição.

### **Entrantes**

Um distribuidor pode _**ver**_ os produtos entrantes de fornecedores que lhe concederam permissão 'adicionar ao ciclo', mas não pode editar níveis de estoque/disponibilidade nem aplicar/remover taxas específicas do produtor.

{% hint style="warning" %}
Atualmente, apenas o coordenador de um ciclo pode adicionar fornecedores (produtores) extras.
{% endhint %}

### **Saintes**

O grau de influência da central distribuidora sobre os produtos na seção 'produtos saintes' de um ciclo depende das permissões entre empresas entre ela e o produtor fornecedor.

* A central distribuidora pode adicionar/remover produtos da sua troca de saída. Isso só se aplica a produtos de produtores que foram adicionados ao ciclo pelo coordenador e concederam ao distribuidor a permissão 'adicionar ao ciclo'.
* Pode alterar detalhes de coleta/entrega.
* Pode adicionar/remover sua taxa da empresa.
