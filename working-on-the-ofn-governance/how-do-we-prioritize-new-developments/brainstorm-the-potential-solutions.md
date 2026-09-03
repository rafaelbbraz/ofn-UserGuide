# Brainstorming de soluções e escolha de uma

Quando temos espaço no pipeline de entrega e decidimos alimentá-lo com um novo recurso que coletivamente concordamos em priorizar, precisamos começar a fazer brainstorming sobre as soluções potenciais que poderiam nos permitir satisfazer as necessidades top priorizadas.

Provavelmente isso já terá começado enquanto especificamos a necessidade, já que as pessoas começam com soluções em vez de necessidades. ;-) Mas precisamos fazer um brainstorming adequado pra abrir nossa mente e não ficarmos presos com a primeira solução que veio à mente. E garantir que o que vai entrar no pipeline de entrega esteja claramente especificado.

**Toda necessidade será atribuída a um "product owner", e quando um candidato a recurso tiver sido selecionado, esse candidato a recurso será atribuído a um "product owner" E a um "tech owner"**. Eles são responsáveis por organizar o processo de descoberta e concepção da solução, que passará pelos passos explicados abaixo.

Este processo de concepção é organizado ao longo do [pipeline de concepção](https://github.com/openfoodfoundation/inception-pipe/issues), no qual um candidato a recurso entra após ser selecionado da lista de _Solicitações de Recursos_ no quadro wishlist. (Solicitações priorizadas são transferidas pra este pipeline porque issues submetidas ao quadro wishlist no primeiro passo frequentemente têm escopos muito diferentes; algumas se qualificarão como Papercuts e não precisam seguir o mesmo processo minucioso de concepção ou serão rejeitadas.)

### 1 – Brainstorming de soluções potenciais pra atender a necessidade

Isso significa listar todas as soluções possíveis pra responder à necessidade. Essas soluções potenciais são chamadas de **"candidatos a recursos"**. É principalmente um trabalho de "product owner", mas o tech também pode ajudar a identificar candidatos a recursos pra atender a necessidade.

### 2 – Escolher nossa solução preferida

Para cada solução potencial, avaliamos o nível de facilidade e nível de valor e mapeamos os candidatos a recursos em uma **matriz valor/facilidade**. Ter uma perspectiva técnica é importante aqui já que pessoas de produto não saberão o quão difícil é implementar o candidato A ou B. Então os product owners precisam garantir que incluem o tech owner (ou outros devs) nesse trabalho.

Isso ajudará a escolher o candidato a recurso que nos permite obter valor suficiente pra atender a necessidade e que exigirá o menor esforço pra isso. Basicamente buscamos escolher um candidato a recurso que adiciona o máximo de valor em relação à necessidade (ou valor suficiente pra atender a necessidade) ao menor custo possível.

Quando o candidato a recurso foi totalmente concebido (ou seja, todas as especificações estão claras e bem descritas, designs estão prontos, aprovação de tech e produto são confirmadas), o product owner transfere o recurso pro pipeline de entrega (e cria histórias menores se a issue original tem mais o tamanho de um épico). Quando o círculo de entrega decide que o recurso está pronto pra ser adicionado ao pipeline, transferirão a issue pra coluna "dev ready", no nível certo de prioridade.

Esse épico precisa englobar:

* lembrete da necessidade não atendida abrangente (pode adicionar link à descrição da necessidade e sessão de descoberta de solução)
* por que esse recurso nos ajudaria a atender a necessidade
* métricas que nos permitirão verificar se atende
* quem são os product e tech owners
