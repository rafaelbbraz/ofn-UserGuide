---
description: Xero
---

# Notas Xero

Devido às limitações legais das notas fiscais geradas pela plataforma Nossa Feira, pode ser necessário usar os dados incluídos nos relatórios como fonte pra software externo de emissão.

Muitas empresas de alimentos usam o software Xero pra geração de notas e contabilidade. Os relatórios disponíveis na seção 'Notas Xero' permitem baixar dados em formato compatível com upload automático em lote no Xero.

{% hint style="warning" %}
Xero é uma plataforma de software totalmente independente da Nossa Feira e portanto as capturas de tela aqui são apenas demonstrativas.

Contate o Xero diretamente se quiser mais orientação sobre como usar o software deles.
{% endhint %}

## Notas Xero

Este relatório cria arquivos CSV que podem ser importados no software Xero pra gerar notas fiscais dos clientes. Há duas opções: um relatório resumido e um detalhado — o último inclui uma linha para cada item comprado pelo cliente, incluindo quaisquer taxas e ajustes.

### Gerando o relatório

![Campos do Relatório Xero](<../../.gitbook/assets/xero summary.jpg>)

**Intervalo de datas:** Você pode filtrar pedidos pela data do pedido.

**Central e ciclo:** Você pode especificar por qual central e ciclo os pedidos foram feitos.

**Número inicial da nota:** Pra garantir compatibilidade com o sistema de numeração de notas do Xero, informe o primeiro número que quer que seja atribuído. Todas as notas seguintes serão numeradas a partir desse ponto.

**Data da nota:** Você pode selecionar a data pra marcar as notas no Xero. Editável uma vez no Xero, mas fazendo aqui você marca todas as notas de um relatório em lote.

**Data de vencimento:** Você pode definir a data de vencimento pra ser marcada nas notas Xero. Também editável no Xero.

**Código da conta:** Se você informar um código de conta do Xero aqui, todos os itens da nota serão atribuídos a essa conta. Editável no Xero.

**Opções de renderização:** Iguais a outros relatórios (tela, PDF, formatado ou .csv; assim como escolha de colunas e dados específicos que deseja baixar).

### Dados disponíveis

* Nome, email e endereço de cobrança do cliente (sem telefone)
* Número da nota e data da compra. Vencimento é um mês após a data da nota. Número de referência é o mesmo da nota.
* Nome do produto, quantidade, custo, alíquota, SKU, taxa
* Status do pagamento (pago ou saldo devedor)
* Moeda da transação

### Importando o relatório no Xero

No Xero vá em **Contas**, **Vendas** e clique em Importar.

![Importar Xero](../../.gitbook/assets/xero-import.png)

Depois selecione o relatório Xero baixado da Nossa Feira pra upload. As configurações a selecionar estão mostradas abaixo.

![Passos de importação do Xero](../../.gitbook/assets/xero-import-steps.png)

Selecionar **Ignorar detalhes de endereço de contato** garante que seus dados de cliente no Xero fiquem inalterados.

Selecionar **Imposto Exclusivo** garante que produtos configurados pra incluir imposto na Nossa Feira incluam imposto, mas seus itens sem imposto permaneçam sem.
