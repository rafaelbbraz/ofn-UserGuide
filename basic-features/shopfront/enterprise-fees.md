# Taxas da empresa

Taxas da empresa são úteis pra produtores e centrais trabalhando juntos. Elas permitem que custos associados a administração, embalagem, transporte, vendas e arrecadação sejam alocados a diferentes partes.

Por exemplo, uma central pode escolher adicionar uma taxa de 10% a todos os produtos que vende, para cobrir custos administrativos (armazenamento de produtos antes da distribuição, custos com equipe etc.).

Para produtores vendendo seus próprios produtos diretamente, esses custos já estão presentes no preço do produto, então aplicar Taxas da Empresa pode não ser necessário.

Um dos muitos benefícios pros clientes da Nossa Feira é a transparência de preços. Compradores podem ver a porcentagem do preço de um item atribuída a administração, embalagem etc. Essa informação é exibida clicando no gráfico de pizza ao lado do preço do produto na vitrine:

![](../../.gitbook/assets/feebreakdown.jpg)

## Configurando uma Taxa da Empresa

* Vá em 'Taxas da Empresa' clicando em **Empresas** no menu principal e depois em **Configurações** ao lado da sua empresa. A página **Taxa da Empresa** fica no menu à esquerda.
* Clique em **Criar Uma Agora** (ou **Gerenciar Taxas da Empresa** se você já criou alguma). Você será direcionado a uma página como esta:

![](<../../.gitbook/assets/list of enterprise fees.jpg>)

**Empresa:** Na primeira coluna, selecione a empresa à qual a taxa se aplica.

**Tipo de taxa:** Selecione o serviço ao qual a taxa se aplica. Opções: Taxa de embalagem, Taxa de transporte, Taxa administrativa, Taxa de venda ou Taxa de arrecadação.

**Nome:** Escolha um nome pra sua taxa.

**Categoria fiscal:** Selecione a categoria fiscal apropriada. Na maioria dos casos, a alíquota do imposto pra taxa da empresa será herdada do produto. Se a taxa está associada a um serviço adicionado ao produto, pode estar sujeita a imposto mesmo que o produto não esteja. Nesse caso, escolha entre 'Alíquota reduzida', 'Alíquota cheia' ou 'Isento'.

**Calculadora:** A taxa pode ser calculada de várias formas. Selecione a calculadora mais apropriada.

{% hint style="warning" %}
Nota: se a Categoria Fiscal da Taxa da Empresa é 'Herdar do produto', as únicas duas calculadoras que podem ser usadas são 'Porcentagem fixa (por item)' e 'Taxa fixa (por item)'.
{% endhint %}

Clique em **Atualizar** para salvar sua taxa da empresa. A coluna 'valores da calculadora' agora conterá campos de entrada relevantes.

{% hint style="success" %}
Você só poderá especificar taxas ou valores (na coluna 'valores da calculadora') depois que a Taxa da Empresa for salva. Não esqueça de clicar em **Atualizar** após informar um valor pra salvar as alterações.
{% endhint %}

## Calculadoras de taxa

![](<../../.gitbook/assets/enterprise fee calc.jpg>)

**Porcentagem fixa** – Taxa cobrada como porcentagem do valor total do pedido.

**Peso (por kg)** – Taxa aplicada aos produtos por kg. A taxa é aplicada _apenas a produtos precificados por kg_, não a produtos listados como itens (ex: um produto listado como '1 maço de salsa' não terá uma taxa da empresa associada com essa opção).

**Taxa fixa (por pedido)** – Taxa aplicada como padrão a todos os pedidos, independente do tamanho.

**Taxa flexível** – Especialmente útil se você quer incentivar pedidos grandes: a taxa da empresa pode ser reduzida ou zerada quando o número limite de itens é atingido.

* **Custo do primeiro item** — taxa cobrada pelo primeiro item do pedido.
* **Custo do item adicional** — taxa cobrada por itens além do primeiro.
* **Máximo de itens** — número máximo de itens sobre os quais a taxa se aplica.

![](<../../.gitbook/assets/flexible rate ent fee.jpg>)

> Por exemplo, se 'Custo do primeiro item' é R$ 1,00, 'Custo do item adicional' é R$ 0,50 e 'Máximo de itens' é 3, um cliente que compra 5 itens será cobrado R$ 2,00 em taxas. R$ 1 pelo primeiro item, R$ 0,50 pelo segundo e terceiro, R$ 0 pelo quarto e quinto.

**Taxa fixa (por item)** — Taxa constante aplicada a produtos listados como 'itens'. (Não é aplicada a produtos vendidos por peso ou volume.)

**Faixa de preço** — Método flexível que permite recompensar compradores que gastam acima de um 'valor mínimo' aplicando um desconto, ex: em um método de envio. Se o cliente gasta menos que o 'valor mínimo', você pode definir qual taxa ele paga. Também pode ser usado pra criar uma taxa de **compra mínima** — se o cliente gasta abaixo de um valor, é cobrada uma taxa pra compensar.

* **Valor mínimo** — Se o total do pedido é abaixo desse valor, nenhum desconto é aplicado. Se está acima, o desconto é aplicado no checkout.
* **Valor normal** — Taxa aplicada a vendas abaixo do 'Valor mínimo'.
* **Valor com desconto** — Taxa aplicada a pedidos acima do 'Valor mínimo'. Pode definir 0 pra frete grátis, ou usar sinal de menos pra aplicar desconto, ex: -5 pra R$ 5 mais barato.

![](<../../.gitbook/assets/price sack ent fee.jpg>)

{% hint style="warning" %}
Agora que você criou sua Taxa da Empresa, lembre que **ela não se aplica na sua loja a menos que seja adicionada a um ciclo de pedidos**. Veja as páginas de Ciclo de Pedidos pra [produtores](order-cycle/order-cycles-for-producers.md) ou [centrais](order-cycle/order-cycles-for-hubs.md) pra mais detalhes.
{% endhint %}
