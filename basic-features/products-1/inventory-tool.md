# Ferramenta de estoque próprio

{% hint style="warning" %}
## A ferramenta de Estoque Próprio foi descontinuada e está disponível apenas para usuários legados. Entre em contato com o suporte para mais informações.
{% endhint %}

## Introdução

O 'estoque próprio' dá às empresas maior controle e flexibilidade no gerenciamento de produtos, se necessário. O recurso será principalmente do interesse de centrais e gerentes de central.

Usando o Estoque Próprio, a Central A pode modificar preço e níveis de estoque dos itens que tem permissão pra comercializar. O recurso também permite à Central A tornar disponível na vitrine apenas um subconjunto de produtos dos fornecedores, se não quiser distribuir todas as linhas. Tudo isso pode ser feito sem modificar a cópia mestra dos produtos. Então se ambas as Centrais A e B comercializam os mesmos produtos, usando essa ferramenta a Central A pode alterar preço e outras informações fundamentais dos itens que vende sem impactar a Central B.

## Configurações de perfil para o Estoque Próprio

Para acessar o Estoque Próprio, vá em Empresas (no menu horizontal principal) e depois 'Configurações'. Na barra de menu à esquerda, selecione 'Configurações de Estoque'.

![](<../../.gitbook/assets/inventory enterprise settings.jpg>)

Você tem duas opções:

* **Novos produtos podem ser colocados na minha vitrine (recomendado):** Os produtos do seu fornecedor podem ser adicionados à sua loja online _sem você precisar adicioná-los ao seu estoque próprio primeiro_. Quando você cria um ciclo de pedidos, _todos_ os produtos dos produtores selecionados estarão disponíveis pra adicionar à porção 'entrante' do ciclo.\
  Essa é a opção padrão e recomendada para centrais que não querem modificar preço ou níveis de estoque dos itens comercializados.

{% hint style="warning" %}
CUIDADO — se você mantiver as configurações de estoque no modo padrão 'desligado' mas ao mesmo tempo fizer upload de produtos ao seu estoque próprio e modificar os preços ou níveis, a informação modificada aparecerá na sua vitrine, e não a da cópia mestra.
{% endhint %}

* **Novos produtos precisam ser adicionados ao meu estoque antes de aparecerem na vitrine:** Quando você cria um ciclo de pedidos, apenas produtos previamente adicionados ao estoque próprio estarão visíveis pra seleção na porção 'entrante'.

## Visitando seu Estoque Próprio de Loja/Central

Clique no menu Produtos no topo do dashboard admin, e depois em Estoque Próprio no submenu. Se você gerencia várias empresas, será solicitado a selecionar uma, pois cada estoque é gerenciado independentemente.

![](<../../.gitbook/assets/inventory 1.jpg>)

Se novos produtos foram adicionados pelos seus fornecedores entre visitas ao estoque, você verá a mensagem:

![](<../../.gitbook/assets/inventory products to review.jpg>)

Até você adicionar esses produtos ao estoque, eles ficarão na categoria '**Novos Produtos**' e invisíveis para seleção ao criar um ciclo. Clicando em '**Revisar Agora**' você será redirecionado para a lista de novos produtos.

## Revisando novos produtos

Novos produtos podem ser **Adicionados** ao seu estoque ou **Ocultados**. Se há um produto na lista para o qual você quer sobrescrever detalhes, ou aplicar um nível de estoque recorrente, você precisa **adicioná-lo** ao seu estoque. Se há um produto que você nunca quer vender na sua loja, ou pelo menos não em breve, você pode escolher **ocultá-lo** (veja seção **Produtos Ocultos** abaixo).

![](<../../.gitbook/assets/switching invent.jpg>)

{% hint style="info" %}
Lembre: se suas **Configurações de Estoque** estão como 'novos produtos precisam ser adicionados ao meu estoque antes de aparecerem na vitrine', quaisquer produtos deixados na lista de Novos Produtos ficarão efetivamente ocultos. Se a configuração é 'novos produtos podem ser colocados na vitrine', os produtos da lista continuarão aparecendo no ciclo.
{% endhint %}

## Gerenciando seus produtos no Estoque Próprio

Sua lista de produtos no estoque é onde você pode sobrescrever detalhes do produto, configurar reset de estoque e ocultar produtos.

Pelo botão de colunas à direita da tabela, você pode escolher quais configurações quer ver e modificar.

![](<../../.gitbook/assets/invent columns.jpg>)

### Modificar SKU, preços e níveis de estoque para produtos na vitrine

Qualquer alteração aqui será visível na sua loja e sobrescreverá os detalhes definidos pelo fornecedor. Você pode modificar os campos:

* **SKU** – se você quer usar um SKU alternativo (número de referência) para um produto, pode sobrescrever o SKU do produtor aqui digitando uma alternativa.
* **Preço** – Você pode definir um preço diferente para exibir na sua loja. Note que a unidade do produto continua a mesma. Então se o produto é precificado por kg, você só pode modificar seu custo por kg, não mudar pra custo fixo por item.
* **Em estoque** – Se seu estoque desse produto difere do estoque disponível oferecido pelos produtores, você pode indicar seu estoque. Seus produtos não serão mais visíveis na loja quando o nível do estoque atingir zero.

{% hint style="info" %}
Útil se você recebe uma compra em lote de, digamos, 50 itens por mês, e precisa acompanhar as vendas antes da próxima entrega.
{% endhint %}

* **Ilimitado?** – Você pode selecionar entre 'usar configurações de estoque do produtor' (nesse caso o número na coluna 'em estoque' fica cinza e os níveis de estoque do produtor são herdados), ter estoque ilimitado selecionando 'sim' (onde o item nunca acaba e sempre está disponível, se adicionado a um ciclo ativo), ou definir seus próprios níveis selecionando 'não' (nesse caso o número na coluna 'em estoque' fica em fundo branco).

![](<../../.gitbook/assets/invent unlimited.jpg>)

Relembre 'em estoque' e 'ilimitado' [aqui](products.md#adding-products).

{% hint style="warning" %}
Não é possível alterar nome do produto, propriedades, descrição ou imagem no estoque próprio.
{% endhint %}

### Habilitar reset de estoque?

A coluna **habilitar reset de estoque** permite resetar a quantidade 'Em estoque' para um valor padrão, por exemplo no início de cada novo ciclo. O **valor padrão** é o número informado nessa coluna ao lado da caixa. A caixa permite selecionar apenas os itens que você quer resetar em cada momento.

Para resetar o estoque padrão desses produtos, clique em 'Ações' no canto superior esquerdo da tabela de estoque e depois em 'Resetar níveis de estoque para os padrões'. Apenas produtos com a caixa de reset marcada serão afetados por essa ação.

![](<../../.gitbook/assets/invent reset stock.jpg>)

> Neste exemplo, o nível padrão de estoque das maçãs Fuji é 50. Atualmente há 30 restantes. Se o usuário, no início de um ciclo, quer resetar para 50, precisa clicar em 'Resetar níveis de estoque para os padrões' em 'Ações'.

{% hint style="info" %}
Recurso útil para centrais que recebem entregas de produtos específicos uma vez por mês ou em cronograma regular.
{% endhint %}

### Herdar?

Se você não alterou nenhum dos valores na tabela de Estoque para um produto, a caixa "herdar?" ficará marcada por padrão. Isso significa que a informação informada pelo produtor e visível em cinza será exibida na sua vitrine.

![](<../../.gitbook/assets/invent inherit.jpg>)

Ao modificar um ou mais campos, essa caixa será automaticamente desmarcada. Para resetar valores (preço, estoque, SKU etc.) para os valores da cópia mestra do produtor, você pode re-marcar essa caixa a qualquer momento.

### Ocultar

Como na lista de **Novos Produtos**, você também pode **ocultar** produtos da sua **Lista de Estoque**. Clicando em ocultar, o produto vai para a lista de **Produtos Ocultos**. Se seu perfil de estoque está como '**Novos produtos precisam ser adicionados ao meu estoque antes de aparecerem na vitrine'** (veja [aqui](inventory-tool.md#profile-settings-for-the-inventory)), o produto que você acabou de ocultar não estará mais disponível para seleção no ciclo da central e portanto não será visível na vitrine.

<figure><img src="../../.gitbook/assets/invent hide product.jpg" alt=""><figcaption></figcaption></figure>

## Produtos ocultos

Ao ver sua lista de produtos ocultos, você pode escolher torná-los visíveis novamente clicando no botão '**Adicionar**' à direita do item.

![](<../../.gitbook/assets/invent hidden products.jpg>)

## Estoque próprio e ciclos de pedidos

Ao configurar ciclos de pedidos, você pode escolher, caso a caso, entre selecionar de todos os produtos disponíveis ou apenas dos que estão no estoque próprio da loja/central.

Isso é controlado em 'Configurações Avançadas' (canto superior direito da página do ciclo):

![](<../../.gitbook/assets/invent order cycle.jpg>)

Essa opção tem o mesmo efeito que alterar as [configurações de perfil do estoque](inventory-tool.md#profile-settings-for-the-inventory), mas diferente destas, se aplica apenas ao ciclo em questão.

{% hint style="danger" %}
Após fazer qualquer alteração, sempre lembre de clicar em 'Atualizar' ou 'Salvar' antes de continuar!
{% endhint %}
