# Métodos de envio

{% hint style="warning" %}
Você **precisa** criar pelo menos um método de envio antes de abrir sua loja.
{% endhint %}

## Configurando um método de envio

* Vá na página de Métodos de Envio clicando em **Empresas** no menu horizontal principal e depois em **Configurações** ao lado da sua empresa. A página **Métodos de Envio** fica no menu à esquerda.
* Clique em **Criar novo método de envio +**. Você será direcionado a uma página como esta:

![](<../../.gitbook/assets/new shipping method.jpg>)

* Marque a caixa ao lado da sua empresa no lado direito da página em 'Centrais'. Isso indica que o método de envio que você está prestes a criar se aplica a essa empresa. Você pode selecionar várias empresas, se desejar.
* **Nome:** Escolha um nome para o método. Esse nome será exibido pro cliente durante o processo de compra e nos emails de confirmação. Exemplo:

![](<../../.gitbook/assets/shipping checkout multi.jpg>)

* **Descrição:** Adicione detalhes adicionais, como o endereço preciso do ponto de coleta. Esses detalhes ficam visíveis pro cliente em cinza ao lado do nome (veja captura acima) e no email de confirmação.
* **Exibição:** Escolha entre 'Apenas back office' ou 'Checkout e back office'.

{% hint style="info" %}
Se você quer inativar um método de envio por um tempo mas pode querer oferecê-lo no futuro (talvez um ponto de coleta só de verão que você não quer disponível pros clientes no inverno), mude pra 'Apenas back office'.
{% endhint %}

* **Categoria:** Esse método é entrega ou retirada?
* **Tags:** Informe etiquetas aqui se você quer diferenciar entre clientes. Tags podem ser úteis se você quer oferecer frete grátis pra um subconjunto de clientes ou apenas oferecer entrega pra quem tem endereço próximo. Leia mais [aqui](customer-management-and-conditional-displays-prices/).
* **Calculadora:** Selecione como as taxas de frete serão adicionadas a esse método. Note que uma taxa de envio pode ser zero. Veja abaixo pra mais detalhes.
* **Categoria fiscal:** Permite definir o imposto associado ao método de envio/taxa de coleta independentemente do imposto atribuído aos produtos elegíveis a imposto da sua empresa. Opções: nenhum, alíquota cheia, isento, alíquota reduzida ou frete.
* **Categorias:** Condições de transporte (refrigerado, congelado, padrão) associadas a esse método.

{% hint style="danger" %}
Em 'Categorias', marque todas as caixas aplicáveis à sua empresa — ou seja, se você vende produtos listados com categoria de frete 'congelado', então para o cliente conseguir finalizar a compra, a categoria 'congelado' precisa estar marcada no método de envio desejado.
{% endhint %}

* **Zonas:** Selecione a zona apropriada (isso permite cálculos fiscais corretos).

Clicando em **Criar**, o método de envio será criado e novos campos aparecerão pra você adicionar detalhes das taxas. Os campos apresentados dependem da calculadora selecionada.

{% hint style="info" %}
Se você alterar o tipo de calculadora, precisa **salvar primeiro** antes de editar as configurações da calculadora.
{% endhint %}

## Calculadoras de taxa

![](<../../.gitbook/assets/shipping fee calc.jpg>)

**Porcentagem fixa** – Taxa cobrada como porcentagem do valor total gasto no pedido.

{% hint style="danger" %}
Todas as **taxas percentuais** são calculadas sobre o custo dos **produtos** apenas.
{% endhint %}

{% hint style="warning" %}
Se seu negócio adiciona uma [Taxa da Empresa](enterprise-fees.md) percentual fixa a todos os produtos, para que a 'Porcentagem fixa' **Valor** seja a porcentagem desejada sobre o carrinho do cliente:

&#x20;$$= (100 + Taxa da Empresa) * Porcentagem desejada / 100$$&#x20;

Ex: para um negócio com Taxa da Empresa de 20% que quer cobrar 5% do carrinho total do cliente pro frete, o valor a informar na porcentagem fixa desse método de envio é:

$$= (100 + 20) *5/100 = 6$$&#x20;
{% endhint %}

**Peso (por kg)** – Taxa aplicada aos produtos por kg. A taxa é aplicada _apenas a produtos precificados por kg_, não a produtos listados como itens (ex: um produto listado como '1 maço de salsa' não contribuirá pro cálculo geral da taxa de envio cobrada do cliente).

**Taxa fixa (por pedido)** – Taxa aplicada como padrão a todos os pedidos, independente do tamanho.

**Taxa fixa (por item)** – Taxa constante, aplicada a produtos listados como 'itens'. (Não é aplicada a produtos vendidos por peso ou volume. Portanto, não haverá custo de envio associado a um cliente que compra arroz por kg, por exemplo).

**Taxa flexível** – Calculadora especialmente útil se você quer incentivar pedidos grandes: o custo do frete pode ser reduzido ou zero quando um número limite de itens é atingido.

* 'Custo do primeiro item': Taxa cobrada pelo primeiro item do pedido.
* 'Custo do item adicional': Taxa cobrada por itens além do primeiro.
* 'Máximo de itens': Número máximo de itens sobre os quais a taxa será aplicada. Itens comprados além dessa quantidade não terão a taxa.

![](<../../.gitbook/assets/fee- flexible rate.jpg>)

> Por exemplo: Se a taxa de envio é R$ 10 pro 'primeiro item', 'Custo do item adicional' = R$ 5 e 'Máximo de itens' = 3.\
> Um cliente que compra 5 itens será cobrado R$ 20 de frete (R$ 10 pelo primeiro item, R$ 5 pelos itens dois e três, e R$ 0 pelos itens quatro e cinco).

**Faixa de preço** – Método flexível de taxa de envio cobrada pelo _valor total da venda_, em vez do número de itens comprados (Taxa flexível acima).

* 'Valor mínimo': Valor monetário do limite entre taxa de envio Normal e taxa com Desconto.
* 'Valor normal': Taxa de envio aplicada a vendas abaixo do limite em 'Valor mínimo'.
* 'Valor com desconto': Taxa de envio aplicada a vendas acima do limite em 'Valor mínimo'.

{% hint style="danger" %}
O **Valor mínimo** é o _**custo total dos produtos**_ no carrinho e não inclui nenhuma [taxa da empresa](enterprise-fees.md).
{% endhint %}

{% hint style="warning" %}
Por exemplo, se um negócio adiciona uma Taxa da Empresa de 20% a todos os produtos e quer definir o limite entre frete grátis (Valor com desconto = 0) e, digamos, R$ 25 de frete (= Valor normal) como um carrinho de R$ 150, então o Valor mínimo é:

$$= 150 * 100 /(100+20) = 125$$&#x20;
{% endhint %}

![](<../../.gitbook/assets/fees price sack (1).jpg>)
