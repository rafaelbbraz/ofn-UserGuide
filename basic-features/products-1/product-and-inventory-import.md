---
description: >-
  Esta página explica como produtores podem importar detalhes de produtos e
  distribuidores podem configurar seu estoque próprio em lote.
---

# Importação de produtos e estoque

A ferramenta de importação de produtos e estoque permite enviar um arquivo .csv para adicionar e atualizar seus produtos. Isso pode ser bem mais rápido e eficiente do que adicionar ou atualizar produtos um por um. Para produtores que já atualizam um catálogo dos seus produtos em uma planilha Excel regularmente, isso pode economizar muito tempo!

A ferramenta pode ser encontrada clicando em **Produtos** no menu horizontal azul e em **Importar produtos** no menu verde.

Existem quatro formas principais de usar a ferramenta:

1. Importar novos [produtos](./)
2. Atualizar detalhes de produtos existentes
3. Importar produtos para um novo [estoque próprio](inventory-tool.md) de loja/central
4. Atualizar produtos em um estoque próprio existente

Em todos os casos, o processo envolve baixar um template CSV, preencher os campos e depois fazer upload do CSV de volta na plataforma.

{% hint style="warning" %}
**Nota importante sobre arquivos CSV:** Microsoft Excel não abre .csv diretamente da forma correta.\
Se puder, sugerimos baixar o pacote gratuito Libre Office: [https://www.libreoffice.org/download/download/](https://www.libreoffice.org/download/download/)\
Com o Libre Office Calc, você conseguirá abrir e editar CSV facilmente e salvar no formato de encoding correto UTF-8.\
Se não puder usar Libre Office, veja como abrir CSV no Excel corretamente: [https://support.office.com/en-gb/article/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba](https://support.office.com/en-gb/article/import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba)
{% endhint %}

{% hint style="danger" %}
Nem todos os campos podem ser capturados e enviados/atualizados usando essa ferramenta. Atualmente [Imagens](products.md), [Propriedades](product-properties.md) e Configurações de [Compra em Grupo](group-buy-for-bulk-ordering.md) precisam ser enviadas manualmente para cada produto.

Esperamos incluir isso em desenvolvimentos futuros.
{% endhint %}

## Importar novos produtos

Use estas instruções se quer adicionar novos produtos a um perfil de produtor.

{% hint style="success" %}
Você pode simultaneamente enviar novos produtos e atualizar produtos existentes em um único upload de CSV. As instruções estão separadas por clareza mas você pode combinar novos produtos e atualizações na mesma planilha.
{% endhint %}

### Preparar o arquivo CSV

Primeiro, baixe o arquivo **Template CSV de Lista de Produtos** na página [**Importar Produtos**](https://nossafeira.com.br/admin/product\_import) e abra com Libre Office, Excel ou equivalente.

Você verá que o template dá todos os cabeçalhos de coluna necessários pra importar um produto com sucesso. Cada linha é para um novo produto ou variante. Abaixo, descrição de como preencher cada coluna.

{% hint style="danger" %}
**Atenção:** Todos os campos são sensíveis a maiúsculas/minúsculas. Ex: use `mL` e `Laticínio`, não `ml` ou `laticínio`.
{% endhint %}

<table><thead><tr><th width="195">Título da coluna</th><th width="110">Obrigatório?</th><th width="259">Descrição</th><th>Exemplo</th></tr></thead><tbody><tr><td>producer</td><td>Sim</td><td>O nome do perfil de produtor ao qual esse produto será atribuído</td><td>Sítio Quatro Milhas</td></tr><tr><td>sku</td><td>Não</td><td>O código SKU do produto</td><td>AD001265</td></tr><tr><td>name</td><td>Sim</td><td>Nome do produto</td><td>Iogurte</td></tr><tr><td>display_name</td><td>Não</td><td>Você pode usar este campo pra dar nomes únicos a diferentes variantes. Se não está criando variante, deixe em branco.</td><td>Iogurte de framboesa</td></tr><tr><td>category</td><td>Sim</td><td>Categoria do produto. Categorias estão listadas na página <a href="https://nossafeira.com.br/admin/product_import">Importar Produtos</a></td><td>Laticínio</td></tr><tr><td>description</td><td>Não</td><td>Descrição opcional do produto</td><td>Iogurte feito com framboesas locais</td></tr><tr><td>units</td><td>Sim</td><td>Valor de peso, volume ou quantidade</td><td>500</td></tr><tr><td>unit_type</td><td>Talvez</td><td>Unidade em que o produto é vendido (g, kg, T, mL, L). Se vendido como item (ex: maço), deixe em branco</td><td>g</td></tr><tr><td>variant_unit_name</td><td>Talvez</td><td>Se o produto é vendido como item (ex: pão, maço, abóbora), informe o tipo de item aqui</td><td>Maço</td></tr><tr><td>price</td><td>Sim</td><td>Preço do produto. Se o item tem imposto, deve ser o preço com imposto incluso.</td><td>18.50</td></tr><tr><td>on_hand<br>(estoque)</td><td>Talvez</td><td>Se você tem estoque limitado do produto, informe o nível aqui. Se ilimitado, deixe em branco</td><td>40</td></tr><tr><td>available_on</td><td>Não</td><td>Deixe em branco</td><td></td></tr><tr><td>on_demand (estoque ilimitado)</td><td>Sim</td><td>Se você tem estoque ilimitado, informe 1. Se informar número em on_hand <em>e</em> 1 em ilimitado, o produto será marcado como ilimitado.</td><td>1</td></tr><tr><td>shipping_category</td><td>Sim</td><td>Categoria de frete do produto. Categorias listadas na página <a href="https://nossafeira.com.br/admin/product_import">Importar Produtos</a></td><td></td></tr><tr><td>tax_category</td><td>Não</td><td>Categoria fiscal do produto. Categorias listadas na página <a href="https://nossafeira.com.br/admin/product_import">Importar Produtos</a></td><td>Alíquota cheia</td></tr></tbody></table>

#### Importar variantes de produto

No processo de importação, variantes são distinguidas pelas unidades (como framboesas vendidas em pacotes de 200g e 500g) ou pelo campo display\_name (como maçãs vendidas em várias variedades). Enquanto o nome do produto for o mesmo, as linhas serão importadas como variantes. Para produtos vendidos como itens, o unit\_type precisa ser o mesmo em todas as variantes (ex: pães abaixo).

| name            | display\_name    | price | units | unit\_type |
| --------------- | ---------------- | ----- | ----- | ---------- |
| Framboesas      |                  | 12,00 | 200   | g          |
| Framboesas      |                  | 18,00 | 300   | g          |
| Maçãs           | Fuji             | 12,00 | 500   | g          |
| Maçãs           | Gala             | 15,00 | 500   | g          |
| Pão integral    |                  | 4,00  | 2     | pães       |
| Pão integral    |                  | 9,00  | 5     | pães       |

A imagem abaixo mostra como esses produtos serão exibidos na loja. Note que o campo 'name' vira o título principal e o campo 'display\_name' e/ou as unidades viram o subtítulo.

![](<../../.gitbook/assets/samedisplayname (1).jpg>)

![](../../.gitbook/assets/differentdisplaynames.jpg)

#### Exemplos de tipos de unidade

Abaixo, exemplos de como produtos com diferentes unidades (g, mL, kg e itens) devem ser enviados.

<table data-header-hidden><thead><tr><th width="121">producer</th><th>name</th><th width="105">category</th><th width="73">price</th><th width="75">units</th><th width="110" align="center">unit_type</th><th align="center">variant_unit_name</th></tr></thead><tbody><tr><td>producer</td><td><strong>name</strong></td><td><strong>category</strong></td><td><strong>price</strong></td><td><strong>units</strong></td><td align="center"><strong>unit_type</strong></td><td align="center"><strong>variant_unit_name</strong></td></tr><tr><td>Saladas da Sue</td><td>Salada em saco</td><td>Verduras</td><td>15,00</td><td>500</td><td align="center">g</td><td align="center"></td></tr><tr><td>Pomar do Henrique</td><td>Suco de fruta</td><td>Bebidas</td><td>12,00</td><td>300</td><td align="center">mL</td><td align="center"></td></tr><tr><td>Sítio Fernwell</td><td>Batatas</td><td>Verduras</td><td>30,00</td><td>5</td><td align="center">kg</td><td align="center"></td></tr><tr><td>Padaria do Tom</td><td>Pão integral</td><td>Panificados</td><td>10,00</td><td>1</td><td align="center"></td><td align="center">unidade</td></tr></tbody></table>

### Importar o CSV

Uma vez preenchido o **Template CSV de Lista de Produtos**, você pode fazer upload:

1. Vá em **Produtos** > **Importar Produtos**.
2. Selecione tipo de importação: **Lista de Produtos**.
3. **Selecione uma planilha pra fazer upload:** escolha o CSV atualizado com as informações dos produtos.

    Como você está enviando novos produtos, pode deixar a caixa '_Definir estoque como zero para todos os produtos existentes não presentes no arquivo_' desmarcada (próxima seção explica esse recurso).
4. Clique em **Enviar**.

Você verá um resumo do upload, incluindo qualquer erro. Também será informado de quantos produtos você está criando e quantos está atualizando. Se o resultado estiver ok, clique em **salvar**.

{% hint style="success" %}
É boa prática verificar se os produtos foram enviados/atualizados como você pretendia.
{% endhint %}

Você pode então enviar outra planilha ou ir à página de produtos pra ver os novos.

## Atualizar detalhes de produtos existentes

Instruções para atualizar detalhes de um produto existente. Essa ferramenta é ideal como forma rápida de atualizar preços e níveis de estoque.

{% hint style="info" %}
Você pode simultaneamente enviar novos produtos e atualizar existentes em um único CSV.
{% endhint %}

### Preparar o CSV

Processo similar ao de [envio de novos produtos](product-and-inventory-import.md#import-new-products). Baixe o **Template de Lista de Produtos** e preencha nomes de produtos e fornecedores. Se você tem essa planilha de um upload anterior, ainda melhor.

O sistema precisa de sete campos pra identificar corretamente o produto que você quer atualizar. Há quatro campos que podem ser atualizados e quatro que não podem por essa ferramenta.

| Campos obrigatórios (que você não pode atualizar) | Campos que você pode atualizar | Campos que não atualizam e não são obrigatórios |
| ------------------------------------------------- | ------------------------------ | ------------------------------------------------ |
| \*producer                                        | sku                            | ^variant\_unit\_name                             |
| \*name                                            | price                          | ^tax\_category                                   |
| ^category                                         | in\_stock                      | ^shipping\_category                              |
| \*units                                           | unlimited                      | ^description                                     |
| ^unit\_type (se aplicável)                        |                                |                                                  |
| ^variant\_unit\_name (se aplicável)               |                                |                                                  |
| \*display\_name                                   |                                |                                                  |

_^ se você tentar atualizar esses campos, verá uma mensagem de erro._

_\*Se você tentar atualizar esses campos, na verdade vai criar novos produtos ou variantes, e não atualizar um existente._

Depois de preenchido, o .csv pode ser [importado](product-and-inventory-import.md#import-the-csv) da mesma forma que produtos novos.

{% hint style="info" %}
**Definir estoque como zero para produtos existentes não presentes no arquivo:**\
Se você marcar essa caixa, o sistema definirá o valor 'Em estoque' como zero para _todos os produtos já na sua lista que não estão no arquivo de importação_.\
Se um produto estava 'Ilimitado', removê-lo do arquivo marcará como 0 em estoque.
{% endhint %}

## Importar novo estoque próprio ou atualizar seu estoque

Use estas instruções se quer adicionar ou atualizar produtos no seu [estoque próprio](inventory-tool.md).

### Preparar o CSV

Baixe o arquivo **Template CSV de Estoque** na página **Importar Produtos**.

Você verá que o template dá todos os cabeçalhos necessários. Cada linha é para um novo produto ou variante. Abaixo, descrição de cada coluna.

{% hint style="info" %}
**Atenção:** Campos são sensíveis a maiúsculas/minúsculas. Ex: use `mL` não `ml`, ou `Laticínio` não `laticínio`.
{% endhint %}

| Título da coluna       | Obrigatório? | Descrição                                                                                                                                                                                                                          | Exemplo                              |
| ---------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| producer               | Sim          | Nome do perfil de produtor ao qual esse item de estoque será atribuído                                                                                                                                                             | Sítio Quatro Milhas                  |
| distributor            | Sim          | Nome do perfil da central ao qual o item de estoque será atribuído                                                                                                                                                                 | Central Demo                         |
| name                   | Sim          | Nome do produto                                                                                                                                                                                                                    | Iogurte                              |
| display name           | Não          | Aplica se você está criando variantes (veja instruções abaixo). Se não é variante, deixe em branco.                                                                                                                                | Iogurte de framboesa                 |
| variant\_unit\_name    | Sim          | Se o produto é vendido como item (ex: pão, maço, abóbora), informe o tipo de item aqui                                                                                                                                             | Maço                                 |
| units                  | Sim          | Valor de peso, volume ou quantidade                                                                                                                                                                                                | 500                                  |
| unit\_type             | Sim          | Unidade em que é vendido (g, kg, T, mL, L). Se vendido como item (ex: maço), deixe em branco                                                                                                                                       | g                                    |
| price                  | Sim          | Preço do produto. Se tem imposto, deve ser preço com imposto incluso.                                                                                                                                                              | 18,50                                |
| On\_Hand (in\_stock)   | Sim          | Verifique as regras de ilimitado abaixo                                                                                                                                                                                            | deixar em branco se ilimitado = 1    |
| On\_demand (ilimitado) | Sim          | Se em branco - "Use configurações de estoque do produtor", então "in\_stock" deve estar em branco. Se "1" - "Sim, ilimitado", então "in\_stock" em branco. Se "0" - "Não ilimitado", então "in\_stock" obrigatório. | 1                                    |
| sku                    | Não          | Código SKU do produto                                                                                                                                                                                                              | AD001265                             |

### Importar o CSV <a href="#import-the-csv" id="import-the-csv"></a>

Uma vez preenchido o **Template CSV de Estoque**, você pode fazer upload:

1. Vá em **Produtos** > **Importar Produtos**.
2. **Selecione tipo de importação:** Estoque
3. **Selecione uma planilha pra fazer upload**
4. Clique em **Enviar**.

Você verá um resumo do upload, incluindo qualquer erro. Também será informado quantos produtos você está criando e atualizando. Se o resultado estiver ok, clique em **salvar**.

{% hint style="success" %}
É boa prática verificar se os produtos foram enviados/atualizados como você pretendia.
{% endhint %}

**Atenção:** Todos os campos são sensíveis a maiúsculas/minúsculas — use os nomes exatos de categoria e unit\_type, ex: 'mL' e 'Laticínio' em vez de 'ml' ou 'laticínio'.
