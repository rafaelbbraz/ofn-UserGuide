# Adicionar produtos

Você pode adicionar produtos ao seu catálogo um por um (detalhado abaixo) ou por [importação em lote](product-and-inventory-import.md), se você tem os detalhes em um arquivo .csv.

## Adicionando produtos

Uma vez logado no Dashboard Admin, selecione **Produtos** no menu horizontal principal e clique em **+ Novo Produto**.

![](<../../.gitbook/assets/add product.jpg>)

Isso te leva à página de Novo Produto.

![](<../../.gitbook/assets/new product.jpg>)

**Fornecedor**

Selecione a empresa que produz e fornece o produto.

{% hint style="info" %}
Se você é produtor, será você mesmo. Se você é uma central, lembre que só poderá adicionar produtos a perfis de produtor que você criou, ou se recebeu permissão pra gerenciar os produtos de um perfil de produtor. Veja [aqui](../enterprise-profile/create-or-connect-with-your-supplying-producers.md) mais informações.
{% endhint %}

**Nome do produto:** É o título do produto quando exibido na vitrine.

{% hint style="info" %}
Os produtos são listados na vitrine em ordem alfabética por nome. Essa ordenação padrão pode ser sobrescrita usando o campo 'Ordenação de Categorias da Vitrine' nas [configurações da empresa](../enterprise-profile/enterprise-settings.md#shop-preferences).
{% endhint %}

**Unidades:** Escolha a unidade em que o produto é vendido (g, kg, mL, L… ou item (maço, saco, pacote))

Se você escolher g e informar 1000, o produto será exibido como 1kg pro comprador. Note que algumas unidades de medida impactam na operação de certas [taxas da empresa](../shopfront/enterprise-fees.md).

Por exemplo, uma [taxa fixa por peso](../shopfront/enterprise-fees.md#fee-calculators) só pode ser aplicada a produtos com unidade em **kg**. Nesse caso, você pode informar valores não inteiros, tipo 0,2 kg, e o produto será exibido como 200g mas registrado em kg nos relatórios e cálculos de preço.

**Valor:** Informe o valor de unidades em que esse produto é vendido (por exemplo, se é vendido em 100g, informe '100' aqui e escolha 'g' em 'unidades'; ou se é vendido em maços de flores, informe '1' aqui e 'unidades = itens').

**Exibir como:** Esse campo mostra automaticamente como as unidades e valor serão exibidos, uma vez que você preenche os dois campos anteriores (ex: unidades = kg, valor = 2, Exibir como = 2kg).

{% hint style="info" %}
Nota: Se você selecionou '**itens**' como unidade, o campo **exibir como** vai mudar pra '**nome do item**'. Preencha com o tipo de item (ex: pote, garrafa, maço).
{% endhint %}

**Categoria de produto:** Selecione a categoria mais apropriada. Atribuir uma categoria facilita pros clientes localizarem os itens que querem comprar; os compradores podem filtrar sua lista por categoria na vitrine.

**Preço:** Informe o preço para o valor descrito acima. Note que é o preço base cobrado pelo produtor e o valor que ele receberá por cada compra. Margens e taxas (para administração de distribuição, etc.) são adicionadas em [Taxas da Empresa](../shopfront/enterprise-fees.md), [Taxas de Envio](../shopfront/shipping-methods.md#fee-calculators) e [Métodos de Pagamento](../shopfront/payment-methods.md#fee-calculators).

{% hint style="info" %}
Se o produto tem imposto, o preço aqui deve incluir/excluir o imposto de acordo com as regras fiscais do país. No Brasil, geralmente inclui-se o imposto no preço exibido ao consumidor. Em caso de dúvida, consulte um contador.\
\
Se você seleciona que o produto é isento, o preço aqui será o preço isento.
{% endhint %}

**Preço unitário:** Calculado automaticamente a partir da unidade e preço fornecidos. Se as unidades são em peso ou volume, o preço unitário será custo por kg/L etc. Se as unidades são em 'itens', o preço unitário será custo por item.

**Em mãos:** Informe quanto desse produto você tem disponível e pronto para venda.

Use esse campo se você quer rastrear seus níveis de estoque. Conforme os clientes fazem pedidos, o estoque diminui, e quando chega a zero, o produto não é mais visível na loja. Se você não quer rastrear estoque dessa forma, marque 'sob demanda'.

**Sob demanda:** Se você marca essa caixa, indica que o produto está sempre disponível. Isso impede o software de rastrear níveis de estoque e ele sempre mostrará que o produto está em estoque.

**Imagem:** Faça upload de uma foto do produto.

{% hint style="info" %}
Imagens de produtos serão exibidas na vitrine em **formato quadrado (1:1)**. Recomendamos fazer upload de fotos com essas dimensões. Fotos em paisagem e retrato serão recortadas em quadrado automaticamente.
{% endhint %}

![Produto com unidades de peso](../../.gitbook/assets/productweightunit-price.jpg)

![Produto com unidades de 'itens' (torta)](../../.gitbook/assets/productitemunit-price.jpg)

{% hint style="warning" %}
Imagens de alta resolução são redimensionadas automaticamente quando exibidas na lista de produtos, dependendo do dispositivo do cliente.
{% endhint %}

{% hint style="success" %}
Recomendamos usar fotos de boa qualidade, preferencialmente foto real dos seus produtos em vez de uma imagem padrão da internet. Isso torna o produto mais atrativo pro consumidor. Sempre tire suas fotos com boa iluminação.

Se você usar uma imagem da internet, verifique se é livre de direitos.
{% endhint %}

**Categoria fiscal:** Selecione a categoria fiscal aplicável no menu suspenso. Impostos dependem da natureza do produto e do país em que você comercializa.

{% hint style="danger" %}
Impostos só serão coletados quando as empresas tiverem selecionado 'cobra impostos = sim' em Configurações da Empresa -> Dados do Negócio.
{% endhint %}

**Descrição do produto:** Conte aos clientes um pouco sobre o produto. Você pode incluir uma história sobre a variedade específica, hyperlinks para certificações, etc.

{% hint style="info" %}
Não esqueça de clicar em "criar" ou "criar e adicionar novo" no rodapé da página após preencher todos os campos obrigatórios (indicados por asterisco vermelho).
{% endhint %}

Uma demonstração curta dos passos acima:

![](<../../.gitbook/assets/create product.gif>)

Quando você termina de criar um produto, é redirecionado para a página "produtos" onde encontra todos os seus produtos:

![](<../../.gitbook/assets/bulk page edit new.jpg>)

Pra customizar o formato dessa tabela e exibir apenas informações relevantes pra sua organização, você pode escolher quais colunas mostrar no menu suspenso em 'Colunas'.

<figure><img src="../../.gitbook/assets/bulk edit columns.jpg" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
SKU (ou códigos de produto) podem ser adicionados na coluna 'Código do Produto' para cada item se desejado (útil, por exemplo, se você comercializa itens secos/atacado/higiene de um catálogo).
{% endhint %}

É assim que seus produtos serão exibidos aos clientes na vitrine:

![](../../.gitbook/assets/productbreakdown.jpg)

## Listando produtos similares/variações

Se você lista um produto que vem em várias opções (diferentes tamanhos ou sabores, cada um podendo ter preço diferente ou não), o melhor é criar uma 'variante' para esse produto, em vez de criar vários produtos separados. Criar variantes é discutido na [próxima página](product-variants.md).

{% hint style="success" %}
Variantes são úteis se, por exemplo, você vende limões avulsos e em 'pacotes' de 5. Em vez de ter dois cadastros de produto, as duas opções podem estar disponíveis pro mesmo produto.
{% endhint %}

Pra editar ou replicar um produto, clique nos três pontos verticais na coluna 'Ações' da linha do produto. As duas opções disponíveis são: Editar (destacado em verde abaixo) e Clonar (destacado em vermelho abaixo).

![](<../../.gitbook/assets/edit or clone.jpg>)

## Editar seus produtos

Uma vez que um produto é criado, o melhor lugar pra editar rapidamente atributos como quantidade, preço e estoque é a página de lista de produtos mostrada acima.

Pra editar imagens, descrições, categorias e mais, selecione 'editar' na coluna de ações à direita do produto. Isso abre a página:

![](<../../.gitbook/assets/edit product.jpg>)

No menu à direita você pode adicionar:

* **Propriedades ou etiquetas** aos seus produtos. Isso permite que clientes encontrem seus itens quando buscam por critérios específicos (ex: Orgânico Certificado) e destaca qualidades específicas dos produtos. Saiba mais [aqui](product-properties.md).
* **Compra em Grupo:** Permite gerenciar e organizar vendas de produtos em lotes. Leia mais [aqui](group-buy-for-bulk-ordering.md).
* **Termos de busca** descritos [abaixo](products.md#search-keywords).

Para dicas sobre gerenciar vendas de **produtos "irregulares"** como carnes ou vegetais grandes vendidos em unidades mas cobrados por peso, leia [aqui](pricing-irregular-items-kg.md).

{% hint style="danger" %}
**Não edite** o campo **Permalink**. Ele conecta seu produto internamente a uma entrada no banco. Editar pode corromper o cadastro.
{% endhint %}

### Palavras-chave de busca

Os clientes podem filtrar seus produtos com base em categoria e propriedades. Os filtros ficam no lado direito da página da loja.

![](<../../.gitbook/assets/searchfilter (1).jpg>)

Alguns clientes usam a barra de busca no topo esquerdo pra localizar produtos. Os seguintes campos são consultados por essa busca:

* Nome do produto
* Nome da variante
* Nome do produtor
* Palavras-chave de busca

Palavras-chave podem ser adicionadas em **Editar Produto -> Busca**. Palavras-chave informadas na caixa superior (em vermelho abaixo) são consideradas quando o cliente usa a busca da sua vitrine.

![](<../../.gitbook/assets/search keywords.jpg>)

A seção 'Notas' não é um campo ativo. É uma caixa útil pra você 'anotar' um termo de busca sazonal que pode ser eficaz/ineficaz em um ano específico, pra não esquecer.
