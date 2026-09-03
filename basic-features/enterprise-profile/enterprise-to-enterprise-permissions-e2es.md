# Permissões entre empresas

## Permissões entre empresas

Na Nossa Feira, as Permissões entre Empresas são regras que governam os relacionamentos comerciais entre fornecedores e distribuidores. Essas regras precisam ser configuradas antes que uma empresa (Perfil de Produtor ou Loja de Produtor) possa se tornar fornecedora de outra (Central), ou vice-versa. Uma permissão (ou 'direito') é concedida por uma empresa a outra em relação a acesso/modificação de produtos e perfil. Esta página detalha as diferentes permissões e como atribuí-las.

Existem duas formas de acessar suas permissões:

* Vá em Dashboard > Empresas e selecione 'Permissões' no submenu.

<figure><img src="../../.gitbook/assets/ent permissions 1.jpg" alt=""><figcaption></figcaption></figure>

* OU em Dashboard > Empresas > Configurações e selecione 'Permissões entre Empresas' no menu à esquerda.

<figure><img src="../../.gitbook/assets/ent permissions 2.jpg" alt=""><figcaption></figcaption></figure>

Vamos explorar esse tópico do ponto de vista de:

* [uma Central](enterprise-to-enterprise-permissions-e2es.md#hub-perspective) (o distribuidor)
* [um perfil ou loja de produtor](enterprise-to-enterprise-permissions-e2es.md#producers-perspective) (o fornecedor)

## As Quatro Permissões

Existem 4 tipos diferentes de permissões entre empresas. Elas se combinam de formas diferentes pra dar mais ou menos direitos de acordo com os perfis.

![](<../../.gitbook/assets/ent per.jpg>)

**Permissão para adicionar ao ciclo de pedidos**: o fornecedor (produtor) permite que o distribuidor (uma Central) adicione produtos aos ciclos de pedidos deste último. Assim, os produtos do fornecedor podem aparecer na vitrine da central.

**Permissão para gerenciar produtos**: o fornecedor autoriza outra empresa cadastrada (tipicamente uma central) a criar, deletar e modificar produtos diretamente no seu catálogo de fornecedor.

{% hint style="danger" %}
Isso pode potencialmente impactar todas as centrais que o produtor fornece via Nossa Feira.
{% endhint %}

> _Por exemplo, se o produtor João fornece batatas para as Centrais A e B mas concede à Central A permissão para gerenciar seus produtos, e a Central A altera o preço das batatas, essa alteração (em configurações padrão) será refletida nas vitrines de ambas as Centrais A e B._

**Permissão para editar perfil:** uma empresa permite que outra modifique detalhes do [Perfil da Empresa](./) (dados de contato, endereço, descrição, etc.).

**Permissão para adicionar produtos ao estoque:** o fornecedor (produtor) autoriza o distribuidor (central) a adicionar seus produtos ao catálogo da loja (ou '[Estoque](../products-1/inventory-tool.md)') da central.

{% hint style="info" %}
Se um produtor fornece pra mais de uma central, para permitir que cada uma gerencie preços e níveis de estoque dos produtos de forma independente, recomendamos adicionar essa permissão entre as duas empresas e as centrais alterarem suas [configurações de estoque](enterprise-settings.md#inventory-settings).
{% endhint %}

## Concedendo e gerenciando permissões

Para modificar, adicionar ou deletar permissões, vá ao dashboard admin, depois 'Empresas' no menu principal e 'Permissões' no submenu.

![](<../../.gitbook/assets/grant per.jpg>)

Para dar permissão:

* Selecione sua empresa no menu suspenso da primeira coluna (você é um produtor que fornece a outros)
* Selecione o nome da empresa (central) que você quer fornecer na segunda coluna.
* Marque as permissões que você quer conceder ao distribuidor dos seus produtos (central), ou pra conceder várias, selecione 'tudo'.
* Clique em 'Criar'.

Note que você pode deletar ou alterar essas permissões a qualquer momento.

{% hint style="warning" %}
Apenas usuários listados como [Gerentes](enterprise-settings.md#users) de uma empresa podem alterar suas permissões.
{% endhint %}

Se você precisa que outra empresa te dê permissões, precisa contatá-la por email ou telefone. Não existe um recurso online pra isso.

## Permissões geradas automaticamente

Quando um usuário é o gerente principal (proprietário) de várias empresas na plataforma, [permissões](enterprise-to-enterprise-permissions-e2es.md#the-four-permissions) são criadas automaticamente entre cada empresa. Isso não acontece quando as empresas são gerenciadas por usuários diferentes.

## Perspectiva da central

Os cenários comuns a seguir demonstram permissões que você pode precisar configurar para sua central.

> **Eu** [**criei Perfis de Produtor para cada um dos meus fornecedores**](create-or-connect-with-your-supplying-producers.md#supplier-does-not-have-an-ofn-profile)**. Quais permissões preciso configurar antes de comercializar os produtos deles na minha vitrine?**

O sistema está configurado para que centrais que criam perfis de produtor tenham as _permissões corretas instaladas por padrão_, assim podem começar a adicionar produtos e negociar com esses perfis imediatamente.

> **Meu** [**fornecedor já tem uma empresa cadastrada na Nossa Feira**](create-or-connect-with-your-supplying-producers.md#supplyingproducer)**. Eu quero adicionar os produtos dele à minha vitrine.**

Você precisa contatar seu fornecedor pessoalmente. Os dados de contato dele (telefone, endereço e email) estarão no perfil dele.

Se você só pretende _**comercializar os produtos dele**_ e não quer ajudá-lo a gerenciar o resto do perfil, peça pro produtor conceder permissão _**pra adicionar ao ciclo de pedidos**_ e permissão _**pra adicionar ao estoque**_.

Se o fornecedor quer que você, como gerente de central, ajude a organizar a empresa dele na Nossa Feira, ele pode conceder todas as quatro permissões. Nesse caso, você poderá editar o perfil e gerenciar os produtos dele.

> **Minha central distribui através de grupos de compras. Quais permissões o grupo de compras vai precisar com minha central e meus produtores?**

{% hint style="warning" %}
Este é um exemplo onde a central que gerencia (coordena) um ciclo de pedidos é diferente da empresa onde os clientes retiram as compras.

_Se a Central A gerencia (coordena) um ciclo de pedidos pra um grupo de compras (Central B), o ciclo aparecerá na vitrine da Central B._
{% endhint %}

O grupo de compras (Central B acima) precisará conceder ao coordenador do ciclo (Central A acima) permissão pra adicionar ao ciclo de pedidos (e idealmente permissão pra adicionar ao estoque).

Produtores que fornecem à Central A com produtos que também são vendidos pelo grupo de compras (Central B) precisam conceder às duas Centrais A e B permissão pra adicionar ao ciclo de pedidos (e idealmente permissão pra adicionar ao estoque).

## Perspectiva do produtor

Quando um produtor quer começar a vender seus produtos através de outras empresas (centrais ou grupos de compras), precisa estabelecer as permissões apropriadas. Há diferentes níveis de permissão que o produtor pode conceder, dependendo de quanto poder quer dar à central pra gerenciar seus produtos e perfil (veja [topo da página](enterprise-to-enterprise-permissions-e2es.md#the-four-permissions)).

Esses exemplos exploram cenários comuns.

> **Sou produtor e gostaria que uma central local comercialize e venda meus produtos.**

**Essencial:** Para a central adicionar seus produtos à vitrine, você precisará conceder _'permissão para adicionar ao ciclo de pedidos'_.

**Opcional:** Você também pode querer dar à central permissão pra gerenciar seus produtos, editar seu perfil ou adicionar ao Estoque.

> **Uma central que forneço distribui através de grupos de compras.**

Para que seus produtos sejam distribuídos pelos grupos de compras, você terá que adicionar uma permissão mínima de 'adicionar ao ciclo de pedidos' para a empresa do grupo _além da_ central que você fornece diretamente.

> **Sou uma Loja de Produtor que fornece a uma central local além de operar minha própria vitrine. A central quer gerenciar os níveis de estoque e preços dos meus produtos. Eu&#x20;**_**também**_**&#x20;quero gerenciar níveis de estoque e preços dos meus produtos.**

Esse cenário pode ser resolvido concedendo à central permissão pra adicionar ao Estoque, além de permissão pra adicionar ao ciclo de pedidos.

Isso permite que a central comercialize seus produtos na loja dela, mas defina seus próprios preços e níveis de estoque. Quando você comercializa seus próprios produtos na sua loja, eles continuarão refletindo os preços e estoques que você definiu.
