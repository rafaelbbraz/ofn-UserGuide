# Rastreamento de tradução de imagens do guia

> Documento de acompanhamento do processo de retirada de screenshots em pt-BR
> substituindo os prints antigos em inglês em `.gitbook/assets/`.

## Sumário executivo

- **Total de imagens no repositório**: 1029
- **Imagens referenciadas nos .md**: 414 (615 órfãs — podem ser removidas ao final)
- **A traduzir**: 387 screenshots + 10 gifs + 5 diagramas = **402**
- **Fora do escopo**: 11 PDFs (webinars antigos) + 1 foto de equipe

### Por classe

| Classe | Qtd | Como resolver |
|---|---|---|
| screenshot-ui | 387 | Print da plataforma local em pt-BR |
| gif-animado | 10 | Gravar fluxo na plataforma local |
| diagrama-ou-arte | 5 | Editar manualmente (Figma/GIMP) |
| documento (PDF) | 11 | Fora de escopo por ora |
| foto | 1 | Manter |

### Por seção do guia (imagens referenciadas)

| Seção | Total | Screenshots | GIFs | Diagramas | Prioridade |
|---|---|---|---|---|---|
| quick-start-guides | 4 | 3 | 0 | 1 | P1 |
| basic-features | 297 | 291 | 5 | 1 | P2 |
| setup-manuals | 4 | 4 | 0 | 0 | P3 |
| hub-management-tips | 100 | 89 | 0 | 0 | P4 |
| shopping-with-open-food-network | 19 | 13 | 5 | 0 | P5 |
| complementary-tools-software | 2 | 2 | 0 | 0 | P6 |
| raiz | 9 | 8 | 0 | 1 | P7 |
| working-on-the-ofn-governance | 5 | 5 | 0 | 0 | P8 |
| becoming-a-local-ofn-affiliate | 2 | 0 | 0 | 2 | P9 |

## Fases do processo

- [x] **Fase 1** — Inventário e classificação (concluído)
- [ ] **Fase 2** — Subir OFN localmente com locale pt_BR
- [ ] **Fase 3** — Seed de dados realistas (produtores, produtos, ciclos, pedidos)
- [ ] **Fase 4** — Config Playwright: mapa URL/seletor por imagem
- [ ] **Fase 5** — Captura automatizada em lotes por seção
- [ ] **Fase 6** — Reaplicar anotações (setas/caixas) quando existirem
- [ ] **Fase 7** — Editar 5 diagramas manualmente
- [ ] **Fase 8** — Regravar 10 GIFs
- [ ] **Fase 9** — Revisão visual e commit por seção
- [ ] **Fase 10** — Limpar 615 assets órfãos

## Progresso por seção

| Seção | Total | Feito | Restante | % |
|---|---|---|---|---|
| quick-start-guides | 4 | 0 | 4 | 0% |
| basic-features | 297 | 0 | 297 | 0% |
| setup-manuals | 4 | 0 | 4 | 0% |
| hub-management-tips | 100 | 0 | 100 | 0% |
| shopping-with-open-food-network | 19 | 0 | 19 | 0% |
| complementary-tools-software | 2 | 0 | 2 | 0% |
| raiz | 9 | 0 | 9 | 0% |
| working-on-the-ofn-governance | 5 | 0 | 5 | 0% |
| becoming-a-local-ofn-affiliate | 2 | 0 | 2 | 0% |

## Detalhamento por seção

### quick-start-guides

| Status | Imagem | Página | Classe |
|:-:|---|---|---|
| ⬜ | `ofncan-digital-farmers-market-options-graphic.png` | `quick-start-guides/digital-farmers-markets.md` | diagrama-ou-arte |
| ⬜ | `set-up-in-5-steps-draft.png` | `quick-start-guides/multi-producers-shop-hub-quick-setup-guide.md` | screenshot-ui |
| ⬜ | `set-up-in-5-steps-draft.png` | `quick-start-guides/producer-shop-quick-setup-guide.md` | screenshot-ui |
| ⬜ | `quick-set-up-in-5-steps-profile.png` | `quick-start-guides/profile-only-quick-setup-guide.md` | screenshot-ui |

### basic-features

| Status | Imagem | Página | Classe |
|:-:|---|---|---|
| ⬜ | `dash1.jpg` | `basic-features/dashboard.md` | screenshot-ui |
| ⬜ | `producer hub.jpg` | `basic-features/dashboard.md` | screenshot-ui |
| ⬜ | `producer profile.jpg` | `basic-features/dashboard.md` | screenshot-ui |
| ⬜ | `add new enterprise.jpg` | `basic-features/enterprise-profile/create-or-connect-with-your-supplying-producers.md` | screenshot-ui |
| ⬜ | `new enterprise.jpg` | `basic-features/enterprise-profile/create-or-connect-with-your-supplying-producers.md` | screenshot-ui |
| ⬜ | `productproducer.jpg` | `basic-features/enterprise-profile/create-or-connect-with-your-supplying-producers.md` | screenshot-ui |
| ⬜ | `searchproducer.jpg` | `basic-features/enterprise-profile/create-or-connect-with-your-supplying-producers.md` | screenshot-ui |
| ⬜ | `address (1).jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `business address (1).jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `closedmessageno.jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `closedmessageyes.jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `demohubimages1.jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `demohubimages2.jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `enterprise settings 24 (1).gif` | `basic-features/enterprise-profile/enterprise-settings.md` | gif-animado |
| ⬜ | `enterprise settings.jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `invoice sorting (1).jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `low stock.jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `nonotices.jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `noticesoneoc.jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `noticestwooc.jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `settings menu.jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `terms and conditions.jpg` | `basic-features/enterprise-profile/enterprise-settings.md` | screenshot-ui |
| ⬜ | `ent per.jpg` | `basic-features/enterprise-profile/enterprise-to-enterprise-permissions-e2es.md` | screenshot-ui |
| ⬜ | `ent permissions 1.jpg` | `basic-features/enterprise-profile/enterprise-to-enterprise-permissions-e2es.md` | screenshot-ui |
| ⬜ | `ent permissions 2.jpg` | `basic-features/enterprise-profile/enterprise-to-enterprise-permissions-e2es.md` | screenshot-ui |
| ⬜ | `grant per.jpg` | `basic-features/enterprise-profile/enterprise-to-enterprise-permissions-e2es.md` | screenshot-ui |
| ⬜ | `add new product.jpg` | `basic-features/enterprise-profile/making-a-producer-profile-searchable-by-product-category.md` | screenshot-ui |
| ⬜ | `dummy meat.jpg` | `basic-features/enterprise-profile/making-a-producer-profile-searchable-by-product-category.md` | screenshot-ui |
| ⬜ | `filter-by-product.png` | `basic-features/enterprise-profile/making-a-producer-profile-searchable-by-product-category.md` | screenshot-ui |
| ⬜ | `meat.png` | `basic-features/enterprise-profile/making-a-producer-profile-searchable-by-product-category.md` | screenshot-ui |
| ⬜ | `access1 (2) (2) (1).jpg` | `basic-features/enterprise-profile/package-types.md` | screenshot-ui |
| ⬜ | `choosing.jpg` | `basic-features/enterprise-profile/package-types.md` | screenshot-ui |
| ⬜ | `enterprise settings main tab.jpg` | `basic-features/enterprise-profile/package-types.md` | screenshot-ui |
| ⬜ | `newregister.jpg` | `basic-features/enterprise-profile/package-types.md` | screenshot-ui |
| ⬜ | `non producer settings.jpg` | `basic-features/enterprise-profile/package-types.md` | screenshot-ui |
| ⬜ | `producer settings.jpg` | `basic-features/enterprise-profile/package-types.md` | screenshot-ui |
| ⬜ | `users.jpg` | `basic-features/enterprise-profile/transfer-ownership.md` | screenshot-ui |
| ⬜ | `edit groups.jpg` | `basic-features/groups/group-page.md` | screenshot-ui |
| ⬜ | `gorup hubs.jpg` | `basic-features/groups/group-page.md` | screenshot-ui |
| ⬜ | `group about.jpg` | `basic-features/groups/group-page.md` | screenshot-ui |
| ⬜ | `group front.jpg` | `basic-features/groups/group-page.md` | screenshot-ui |
| ⬜ | `group on hub.jpg` | `basic-features/groups/group-page.md` | screenshot-ui |
| ⬜ | `group1.jpg` | `basic-features/groups/group-page.md` | screenshot-ui |
| ⬜ | `manual1.jpg` | `basic-features/orders/create-orders-manually.md` | screenshot-ui |
| ⬜ | `manual2.jpg` | `basic-features/orders/create-orders-manually.md` | screenshot-ui |
| ⬜ | `manual3.jpg` | `basic-features/orders/create-orders-manually.md` | screenshot-ui |
| ⬜ | `manual5.jpg` | `basic-features/orders/create-orders-manually.md` | screenshot-ui |
| ⬜ | `manual6.jpg` | `basic-features/orders/create-orders-manually.md` | screenshot-ui |
| ⬜ | `manual7.jpg` | `basic-features/orders/create-orders-manually.md` | screenshot-ui |
| ⬜ | `manual8.jpg` | `basic-features/orders/create-orders-manually.md` | screenshot-ui |
| ⬜ | `order details man.jpg` | `basic-features/orders/create-orders-manually.md` | screenshot-ui |
| ⬜ | `paypalnewpayment (1).jpg` | `basic-features/orders/create-orders-manually.md` | screenshot-ui |
| ⬜ | `stripeextra.jpg` | `basic-features/orders/create-orders-manually.md` | screenshot-ui |
| ⬜ | `adjust order.jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `adjustments 1 (1).jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `adjustments 2.jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `balance.jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `cancel order.jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `customer add tag (1).jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `edit quant.jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `manual8.jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `paid not shipped.jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `paypal (2).jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `paypal refund hack.jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `stripe credit owe.jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `void1.jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `void2.jpg` | `basic-features/orders/refunds-and-adjusting-payments.md` | screenshot-ui |
| ⬜ | `account-login.png` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `actions (1).jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `adjustments 1 (1).jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `adjustments 2.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `balance due.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `beef tom adjusted.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `beef tom.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `bulk 2.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `bulk columns.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `bulk order 1.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `credit owed.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `customer account.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `customer details.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `edit order.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `edit shipping 1.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `edit shipping 2.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `listing orders.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `orders capture.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `payments capt.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `tracking or note.jpg` | `basic-features/orders/view-orders.md` | screenshot-ui |
| ⬜ | `producer.jpg` | `basic-features/products-1/README.md` | screenshot-ui |
| ⬜ | `bulkbuy.gif` | `basic-features/products-1/group-buy-for-bulk-ordering.md` | gif-animado |
| ⬜ | `group buy1.jpg` | `basic-features/products-1/group-buy-for-bulk-ordering.md` | screenshot-ui |
| ⬜ | `group buy2.jpg` | `basic-features/products-1/group-buy-for-bulk-ordering.md` | screenshot-ui |
| ⬜ | `listing products.jpg` | `basic-features/products-1/group-buy-for-bulk-ordering.md` | screenshot-ui |
| ⬜ | `invent columns.jpg` | `basic-features/products-1/inventory-tool.md` | screenshot-ui |
| ⬜ | `invent hidden products.jpg` | `basic-features/products-1/inventory-tool.md` | screenshot-ui |
| ⬜ | `invent hide product.jpg` | `basic-features/products-1/inventory-tool.md` | screenshot-ui |
| ⬜ | `invent inherit.jpg` | `basic-features/products-1/inventory-tool.md` | screenshot-ui |
| ⬜ | `invent order cycle.jpg` | `basic-features/products-1/inventory-tool.md` | screenshot-ui |
| ⬜ | `invent reset stock.jpg` | `basic-features/products-1/inventory-tool.md` | screenshot-ui |
| ⬜ | `invent unlimited.jpg` | `basic-features/products-1/inventory-tool.md` | screenshot-ui |
| ⬜ | `inventory 1.jpg` | `basic-features/products-1/inventory-tool.md` | screenshot-ui |
| ⬜ | `inventory enterprise settings.jpg` | `basic-features/products-1/inventory-tool.md` | screenshot-ui |
| ⬜ | `inventory products to review.jpg` | `basic-features/products-1/inventory-tool.md` | screenshot-ui |
| ⬜ | `switching invent.jpg` | `basic-features/products-1/inventory-tool.md` | screenshot-ui |
| ⬜ | `edit weight of irregular product (1).jpg` | `basic-features/products-1/pricing-irregular-items-kg.md` | screenshot-ui |
| ⬜ | `knownweight.jpg` | `basic-features/products-1/pricing-irregular-items-kg.md` | screenshot-ui |
| ⬜ | `differentdisplaynames.jpg` | `basic-features/products-1/product-and-inventory-import.md` | screenshot-ui |
| ⬜ | `samedisplayname (1).jpg` | `basic-features/products-1/product-and-inventory-import.md` | screenshot-ui |
| ⬜ | `edit product new.jpg` | `basic-features/products-1/product-properties.md` | screenshot-ui |
| ⬜ | `enterprise properties.jpg` | `basic-features/products-1/product-properties.md` | screenshot-ui |
| ⬜ | `inherit property product.jpg` | `basic-features/products-1/product-properties.md` | screenshot-ui |
| ⬜ | `product property.jpg` | `basic-features/products-1/product-properties.md` | screenshot-ui |
| ⬜ | `screenshot_20201027-152628.png` | `basic-features/products-1/product-properties.md` | screenshot-ui |
| ⬜ | `searchfilter (1).jpg` | `basic-features/products-1/product-properties.md` | screenshot-ui |
| ⬜ | `viewproperty.jpg` | `basic-features/products-1/product-properties.md` | screenshot-ui |
| ⬜ | `bulk page edit.jpg` | `basic-features/products-1/product-variants.md` | screenshot-ui |
| ⬜ | `edit variant.jpg` | `basic-features/products-1/product-variants.md` | screenshot-ui |
| ⬜ | `product and variants.jpg` | `basic-features/products-1/product-variants.md` | screenshot-ui |
| ⬜ | `productweightunit-price.jpg` | `basic-features/products-1/product-variants.md` | screenshot-ui |
| ⬜ | `varients new.jpg` | `basic-features/products-1/product-variants.md` | screenshot-ui |
| ⬜ | `varients new2.jpg` | `basic-features/products-1/product-variants.md` | screenshot-ui |
| ⬜ | `add product.jpg` | `basic-features/products-1/products.md` | screenshot-ui |
| ⬜ | `bulk edit columns.jpg` | `basic-features/products-1/products.md` | screenshot-ui |
| ⬜ | `bulk page edit new.jpg` | `basic-features/products-1/products.md` | screenshot-ui |
| ⬜ | `create product.gif` | `basic-features/products-1/products.md` | gif-animado |
| ⬜ | `edit or clone.jpg` | `basic-features/products-1/products.md` | screenshot-ui |
| ⬜ | `edit product.jpg` | `basic-features/products-1/products.md` | screenshot-ui |
| ⬜ | `new product.jpg` | `basic-features/products-1/products.md` | screenshot-ui |
| ⬜ | `productbreakdown.jpg` | `basic-features/products-1/products.md` | screenshot-ui |
| ⬜ | `productitemunit-price.jpg` | `basic-features/products-1/products.md` | screenshot-ui |
| ⬜ | `productweightunit-price.jpg` | `basic-features/products-1/products.md` | screenshot-ui |
| ⬜ | `search keywords.jpg` | `basic-features/products-1/products.md` | screenshot-ui |
| ⬜ | `searchfilter (1).jpg` | `basic-features/products-1/products.md` | screenshot-ui |
| ⬜ | `choosing.jpg` | `basic-features/register-and-create-your-profile.md` | screenshot-ui |
| ⬜ | `laststep.jpg` | `basic-features/register-and-create-your-profile.md` | screenshot-ui |
| ⬜ | `letsgetstarted.jpg` | `basic-features/register-and-create-your-profile.md` | screenshot-ui |
| ⬜ | `loginsetup.jpg` | `basic-features/register-and-create-your-profile.md` | screenshot-ui |
| ⬜ | `newregister.jpg` | `basic-features/register-and-create-your-profile.md` | screenshot-ui |
| ⬜ | `registerenterprise.jpg` | `basic-features/register-and-create-your-profile.md` | screenshot-ui |
| ⬜ | `registration.gif` | `basic-features/register-and-create-your-profile.md` | gif-animado |
| ⬜ | `welcome1.jpg` | `basic-features/register-and-create-your-profile.md` | screenshot-ui |
| ⬜ | `addresses.png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `all-products.png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `assets_-l9rgk4wewex_zxxizmw_-lm42xlqo4kply0-_ccm_-lm49bk3eqrejfqsm9wk_order-cycle-supplier-totals.png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `bok-choy.png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `image (2).png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `image (24).png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `mailing-list.png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `order-cycle-customer-totals.png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `radishess.png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `sales-tax-report.png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `screen-shot-2019-12-04-at-2.17.42-pm.png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `screen-shot-2019-12-04-at-2.28.38-pm.png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `xero-import-steps.png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `xero-import.png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `xero-report.png` | `basic-features/reports.md` | screenshot-ui |
| ⬜ | `menu.jpg` | `basic-features/reports/README.md` | screenshot-ui |
| ⬜ | `menu2.jpg` | `basic-features/reports/README.md` | screenshot-ui |
| ⬜ | `basic orders and distributers options.jpg` | `basic-features/reports/general-tips.md` | screenshot-ui |
| ⬜ | `filters.jpg` | `basic-features/reports/general-tips.md` | screenshot-ui |
| ⬜ | `rendering2.jpg` | `basic-features/reports/general-tips.md` | screenshot-ui |
| ⬜ | `rendering3.jpg` | `basic-features/reports/general-tips.md` | screenshot-ui |
| ⬜ | `oc totals by customer.jpg` | `basic-features/reports/order-reports.md` | screenshot-ui |
| ⬜ | `order cycle by distributor.jpg` | `basic-features/reports/order-reports.md` | screenshot-ui |
| ⬜ | `order cycle totals for distributor by supplier.jpg` | `basic-features/reports/order-reports.md` | screenshot-ui |
| ⬜ | `orders and distributors report.jpg` | `basic-features/reports/order-reports.md` | screenshot-ui |
| ⬜ | `report order cycle by supplier totals.jpg` | `basic-features/reports/order-reports.md` | screenshot-ui |
| ⬜ | `pack by customer (1).jpg` | `basic-features/reports/packing-reports.md` | screenshot-ui |
| ⬜ | `pack by product (1).jpg` | `basic-features/reports/packing-reports.md` | screenshot-ui |
| ⬜ | `pack by supplier (1).jpg` | `basic-features/reports/packing-reports.md` | screenshot-ui |
| ⬜ | `tax by order.jpg` | `basic-features/reports/payment-and-tax-reports-1.md` | screenshot-ui |
| ⬜ | `tax by producer.jpg` | `basic-features/reports/payment-and-tax-reports-1.md` | screenshot-ui |
| ⬜ | `tax rates.jpg` | `basic-features/reports/payment-and-tax-reports-1.md` | screenshot-ui |
| ⬜ | `tax types.jpg` | `basic-features/reports/payment-and-tax-reports-1.md` | screenshot-ui |
| ⬜ | `xero summary.jpg` | `basic-features/reports/payment-and-tax-reports-2.md` | screenshot-ui |
| ⬜ | `xero-import-steps.png` | `basic-features/reports/payment-and-tax-reports-2.md` | screenshot-ui |
| ⬜ | `xero-import.png` | `basic-features/reports/payment-and-tax-reports-2.md` | screenshot-ui |
| ⬜ | `itemised payment types.jpg` | `basic-features/reports/payment-and-tax-reports.md` | screenshot-ui |
| ⬜ | `payment totals.jpg` | `basic-features/reports/payment-and-tax-reports.md` | screenshot-ui |
| ⬜ | `payment type.jpg` | `basic-features/reports/payment-and-tax-reports.md` | screenshot-ui |
| ⬜ | `bok-choy.png` | `basic-features/reports/reports-for-bulk-order-management.md` | screenshot-ui |
| ⬜ | `bulk allocation report.jpg` | `basic-features/reports/reports-for-bulk-order-management.md` | screenshot-ui |
| ⬜ | `bulk coop customer payment.jpg` | `basic-features/reports/reports-for-bulk-order-management.md` | screenshot-ui |
| ⬜ | `bulk coop packing sheets.jpg` | `basic-features/reports/reports-for-bulk-order-management.md` | screenshot-ui |
| ⬜ | `bulk suppliers report.jpg` | `basic-features/reports/reports-for-bulk-order-management.md` | screenshot-ui |
| ⬜ | `radishess.png` | `basic-features/reports/reports-for-bulk-order-management.md` | screenshot-ui |
| ⬜ | `all products.jpg` | `basic-features/reports/reports-for-hub-management.md` | screenshot-ui |
| ⬜ | `customer report.jpg` | `basic-features/reports/reports-for-hub-management.md` | screenshot-ui |
| ⬜ | `delivery method.jpg` | `basic-features/reports/reports-for-hub-management.md` | screenshot-ui |
| ⬜ | `ent fee summary.jpg` | `basic-features/reports/reports-for-hub-management.md` | screenshot-ui |
| ⬜ | `example1.jpg` | `basic-features/reports/reports-for-hub-management.md` | screenshot-ui |
| ⬜ | `example2.jpg` | `basic-features/reports/reports-for-hub-management.md` | screenshot-ui |
| ⬜ | `lettuce share.jpg` | `basic-features/reports/reports-for-hub-management.md` | screenshot-ui |
| ⬜ | `payment method (1).jpg` | `basic-features/reports/reports-for-hub-management.md` | screenshot-ui |
| ⬜ | `actions (2).jpg` | `basic-features/reports/view-orders.md` | screenshot-ui |
| ⬜ | `bulk print invoices.jpg` | `basic-features/reports/view-orders.md` | screenshot-ui |
| ⬜ | `bulk print.jpg` | `basic-features/reports/view-orders.md` | screenshot-ui |
| ⬜ | `invoice basics.jpg` | `basic-features/reports/view-orders.md` | screenshot-ui |
| ⬜ | `shopping2.gif` | `basic-features/shopfront/README.md` | gif-animado |
| ⬜ | `customer add tag.jpg` | `basic-features/shopfront/customer-management-and-conditional-displays-prices/customers.md` | screenshot-ui |
| ⬜ | `customer address.jpg` | `basic-features/shopfront/customer-management-and-conditional-displays-prices/customers.md` | screenshot-ui |
| ⬜ | `customers (1).jpg` | `basic-features/shopfront/customer-management-and-conditional-displays-prices/customers.md` | screenshot-ui |
| ⬜ | `tag oc.jpg` | `basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md` | screenshot-ui |
| ⬜ | `tag payment meth.jpg` | `basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md` | screenshot-ui |
| ⬜ | `tag product.jpg` | `basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md` | screenshot-ui |
| ⬜ | `tag shipping.jpg` | `basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md` | screenshot-ui |
| ⬜ | `tag1.jpg` | `basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md` | screenshot-ui |
| ⬜ | `tag2.jpg` | `basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md` | screenshot-ui |
| ⬜ | `tag3.jpg` | `basic-features/shopfront/customer-management-and-conditional-displays-prices/tags-and-tag-rules.md` | screenshot-ui |
| ⬜ | `back office payment.jpg` | `basic-features/shopfront/display-only-order-cycles.md` | screenshot-ui |
| ⬜ | `displayonly.jpg` | `basic-features/shopfront/display-only-order-cycles.md` | screenshot-ui |
| ⬜ | `enterprise fee calc.jpg` | `basic-features/shopfront/enterprise-fees.md` | screenshot-ui |
| ⬜ | `feebreakdown.jpg` | `basic-features/shopfront/enterprise-fees.md` | screenshot-ui |
| ⬜ | `flexible rate ent fee.jpg` | `basic-features/shopfront/enterprise-fees.md` | screenshot-ui |
| ⬜ | `list of enterprise fees.jpg` | `basic-features/shopfront/enterprise-fees.md` | screenshot-ui |
| ⬜ | `price sack ent fee.jpg` | `basic-features/shopfront/enterprise-fees.md` | screenshot-ui |
| ⬜ | `chooseoc.jpg` | `basic-features/shopfront/order-cycle/opening-more-than-one-order-cycle.md` | screenshot-ui |
| ⬜ | `chooseoc2.jpg` | `basic-features/shopfront/order-cycle/opening-more-than-one-order-cycle.md` | screenshot-ui |
| ⬜ | `sort oc by date (1).jpg` | `basic-features/shopfront/order-cycle/opening-more-than-one-order-cycle.md` | screenshot-ui |
| ⬜ | `advanced settings.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `auto notify.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `customer order confirm email.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `dashboard order cycle.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `ent fee incoming oc.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `general settings Oc.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `multipleoc3.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `names in reports.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `notify producers.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `oc checkout options.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `oc cord.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `oc incoming.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `oc list copy.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `oc list.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `oc outgoing.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `pop up in checkout.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `shipping checkout multi.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-hubs.md` | screenshot-ui |
| ⬜ | `dashboard order cycle.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-producers.md` | screenshot-ui |
| ⬜ | `oc list copy.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-producers.md` | screenshot-ui |
| ⬜ | `oc list.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-producers.md` | screenshot-ui |
| ⬜ | `oc shop.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-producers.md` | screenshot-ui |
| ⬜ | `pop up in checkout.jpg` | `basic-features/shopfront/order-cycle/order-cycles-for-producers.md` | screenshot-ui |
| ⬜ | `add-card.png` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `connect-with-stripe.png` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `fee calculator.jpg` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `fee- flexible rate.jpg` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `fees price sack (1).jpg` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `image (31).png` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `payment checkout2.jpg` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `payment method.jpg` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `payment provider.jpg` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `paypal.jpg` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `paypalmay1.jpg` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `paypalmay2.jpg` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `paypalmay3.jpg` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `paypalmay4.jpg` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `stripe-connect.png` | `basic-features/shopfront/payment-methods.md` | screenshot-ui |
| ⬜ | `add new customer.jpg` | `basic-features/shopfront/private-shopfront.md` | screenshot-ui |
| ⬜ | `customers (2).jpg` | `basic-features/shopfront/private-shopfront.md` | screenshot-ui |
| ⬜ | `private.jpg` | `basic-features/shopfront/private-shopfront.md` | screenshot-ui |
| ⬜ | `privateshop.jpg` | `basic-features/shopfront/private-shopfront.md` | screenshot-ui |
| ⬜ | `visible to registered customers only.jpg` | `basic-features/shopfront/private-shopfront.md` | screenshot-ui |
| ⬜ | `fee- flexible rate.jpg` | `basic-features/shopfront/shipping-methods.md` | screenshot-ui |
| ⬜ | `fees price sack (1).jpg` | `basic-features/shopfront/shipping-methods.md` | screenshot-ui |
| ⬜ | `new shipping method.jpg` | `basic-features/shopfront/shipping-methods.md` | screenshot-ui |
| ⬜ | `shipping checkout multi.jpg` | `basic-features/shopfront/shipping-methods.md` | screenshot-ui |
| ⬜ | `shipping fee calc.jpg` | `basic-features/shopfront/shipping-methods.md` | screenshot-ui |
| ⬜ | `Screenshot 2023-11-21 103819.png` | `basic-features/shopfront/vouchers.md` | screenshot-ui |
| ⬜ | `Screenshot 2023-11-21 105438.png` | `basic-features/shopfront/vouchers.md` | screenshot-ui |
| ⬜ | `new voucher.jpg` | `basic-features/shopfront/vouchers.md` | screenshot-ui |
| ⬜ | `voucher add.jpg` | `basic-features/shopfront/vouchers.md` | screenshot-ui |
| ⬜ | `voucher deactivate.jpg` | `basic-features/shopfront/vouchers.md` | screenshot-ui |
| ⬜ | `vouchers1.jpg` | `basic-features/shopfront/vouchers.md` | screenshot-ui |
| ⬜ | `logo link.jpg` | `basic-features/shopfront/white-label-site.md` | diagrama-ou-arte |
| ⬜ | `navigation hidden.jpg` | `basic-features/shopfront/white-label-site.md` | screenshot-ui |
| ⬜ | `normal shop front.jpg` | `basic-features/shopfront/white-label-site.md` | screenshot-ui |
| ⬜ | `white label 1.jpg` | `basic-features/shopfront/white-label-site.md` | screenshot-ui |
| ⬜ | `white label shop front.jpg` | `basic-features/shopfront/white-label-site.md` | screenshot-ui |
| ⬜ | `image (15).png` | `basic-features/subscriptions/subscriptions-configuration.md` | screenshot-ui |
| ⬜ | `new sched.jpg` | `basic-features/subscriptions/subscriptions-configuration.md` | screenshot-ui |
| ⬜ | `oc sched.jpg` | `basic-features/subscriptions/subscriptions-configuration.md` | screenshot-ui |
| ⬜ | `sched1.jpg` | `basic-features/subscriptions/subscriptions-configuration.md` | screenshot-ui |
| ⬜ | `sched2.jpg` | `basic-features/subscriptions/subscriptions-configuration.md` | screenshot-ui |
| ⬜ | `sched3.jpg` | `basic-features/subscriptions/subscriptions-configuration.md` | screenshot-ui |
| ⬜ | `shop pref.jpg` | `basic-features/subscriptions/subscriptions-configuration.md` | screenshot-ui |
| ⬜ | `sub1 (1).jpg` | `basic-features/subscriptions/subscriptions-creating-and-managing-orders.md` | screenshot-ui |
| ⬜ | `sub1.jpg` | `basic-features/subscriptions/subscriptions-creating-and-managing-orders.md` | screenshot-ui |
| ⬜ | `sub2 (1).jpg` | `basic-features/subscriptions/subscriptions-creating-and-managing-orders.md` | screenshot-ui |
| ⬜ | `sub3.jpg` | `basic-features/subscriptions/subscriptions-creating-and-managing-orders.md` | screenshot-ui |
| ⬜ | `sub4.jpg` | `basic-features/subscriptions/subscriptions-creating-and-managing-orders.md` | screenshot-ui |
| ⬜ | `sub5.jpg` | `basic-features/subscriptions/subscriptions-creating-and-managing-orders.md` | screenshot-ui |
| ⬜ | `sub6 (1).jpg` | `basic-features/subscriptions/subscriptions-creating-and-managing-orders.md` | screenshot-ui |
| ⬜ | `sub7.jpg` | `basic-features/subscriptions/subscriptions-creating-and-managing-orders.md` | screenshot-ui |
| ⬜ | `sub8.jpg` | `basic-features/subscriptions/subscriptions-creating-and-managing-orders.md` | screenshot-ui |
| ⬜ | `sub9.jpg` | `basic-features/subscriptions/subscriptions-creating-and-managing-orders.md` | screenshot-ui |
| ⬜ | `image (26).png` | `basic-features/subscriptions/subscriptions-the-customers-perspective.md` | screenshot-ui |
| ⬜ | `image (4).png` | `basic-features/subscriptions/subscriptions-the-customers-perspective.md` | screenshot-ui |
| ⬜ | `subcard1.jpg` | `basic-features/subscriptions/subscriptions-the-customers-perspective.md` | screenshot-ui |
| ⬜ | `subcard2.jpg` | `basic-features/subscriptions/subscriptions-the-customers-perspective.md` | screenshot-ui |

### setup-manuals

| Status | Imagem | Página | Classe |
|:-:|---|---|---|
| ⬜ | `mfm-directory.png` | `setup-manuals/farmers-market-group-page.md` | screenshot-ui |
| ⬜ | `hub-profile.png` | `setup-manuals/hub-profile-only.md` | screenshot-ui |
| ⬜ | `prommm.png` | `setup-manuals/multi-producer-pre-orders.md` | screenshot-ui |
| ⬜ | `producer-shop.png` | `setup-manuals/producer-shop.md` | screenshot-ui |

### hub-management-tips

| Status | Imagem | Página | Classe |
|:-:|---|---|---|
| ⬜ | `customers.jpg` | `hub-management-tips/how-tos/cash-efts-for-trusted-customers-only.md` | screenshot-ui |
| ⬜ | `trusted 1.jpg` | `hub-management-tips/how-tos/cash-efts-for-trusted-customers-only.md` | screenshot-ui |
| ⬜ | `trusted 2.jpg` | `hub-management-tips/how-tos/cash-efts-for-trusted-customers-only.md` | screenshot-ui |
| ⬜ | `trusted 3.jpg` | `hub-management-tips/how-tos/cash-efts-for-trusted-customers-only.md` | screenshot-ui |
| ⬜ | `custom tab.jpg` | `hub-management-tips/how-tos/customise-your-shop-appearance.md` | screenshot-ui |
| ⬜ | `example category.jpg` | `hub-management-tips/how-tos/customise-your-shop-appearance.md` | screenshot-ui |
| ⬜ | `hide groups.jpg` | `hub-management-tips/how-tos/customise-your-shop-appearance.md` | screenshot-ui |
| ⬜ | `just remove menu.jpg` | `hub-management-tips/how-tos/customise-your-shop-appearance.md` | screenshot-ui |
| ⬜ | `menu gone.jpg` | `hub-management-tips/how-tos/customise-your-shop-appearance.md` | screenshot-ui |
| ⬜ | `places (1).jpg` | `hub-management-tips/how-tos/customise-your-shop-appearance.md` | screenshot-ui |
| ⬜ | `prod ordering.jpg` | `hub-management-tips/how-tos/customise-your-shop-appearance.md` | screenshot-ui |
| ⬜ | `remove 1.jpg` | `hub-management-tips/how-tos/customise-your-shop-appearance.md` | screenshot-ui |
| ⬜ | `sort by producer.jpg` | `hub-management-tips/how-tos/customise-your-shop-appearance.md` | screenshot-ui |
| ⬜ | `white label 1 (2).jpg` | `hub-management-tips/how-tos/customise-your-shop-appearance.md` | screenshot-ui |
| ⬜ | `white label shop front (1).jpg` | `hub-management-tips/how-tos/customise-your-shop-appearance.md` | screenshot-ui |
| ⬜ | `customers.jpg` | `hub-management-tips/how-tos/discounted-free-delivery-for-vulnerable-customers.md` | screenshot-ui |
| ⬜ | `notices2.jpg` | `hub-management-tips/how-tos/discounted-free-delivery-for-vulnerable-customers.md` | screenshot-ui |
| ⬜ | `priority 4.jpg` | `hub-management-tips/how-tos/discounted-free-delivery-for-vulnerable-customers.md` | screenshot-ui |
| ⬜ | `customers.jpg` | `hub-management-tips/how-tos/early-shopping-hour-for-priority-groups.md` | screenshot-ui |
| ⬜ | `notices2.jpg` | `hub-management-tips/how-tos/early-shopping-hour-for-priority-groups.md` | screenshot-ui |
| ⬜ | `preview 6.jpg` | `hub-management-tips/how-tos/early-shopping-hour-for-priority-groups.md` | screenshot-ui |
| ⬜ | `priority 1.jpg` | `hub-management-tips/how-tos/early-shopping-hour-for-priority-groups.md` | screenshot-ui |
| ⬜ | `priority 2.jpg` | `hub-management-tips/how-tos/early-shopping-hour-for-priority-groups.md` | screenshot-ui |
| ⬜ | `priority 3.jpg` | `hub-management-tips/how-tos/early-shopping-hour-for-priority-groups.md` | screenshot-ui |
| ⬜ | `priority 4.jpg` | `hub-management-tips/how-tos/early-shopping-hour-for-priority-groups.md` | screenshot-ui |
| ⬜ | `active voucher gift.jpg` | `hub-management-tips/how-tos/how-to-create-gift-vouchers.md` | screenshot-ui |
| ⬜ | `gift voucher 2.jpg` | `hub-management-tips/how-tos/how-to-create-gift-vouchers.md` | screenshot-ui |
| ⬜ | `gift voucher 3.jpg` | `hub-management-tips/how-tos/how-to-create-gift-vouchers.md` | screenshot-ui |
| ⬜ | `inactive gift voucher.jpg` | `hub-management-tips/how-tos/how-to-create-gift-vouchers.md` | screenshot-ui |
| ⬜ | `new voucher (1).jpg` | `hub-management-tips/how-tos/how-to-create-gift-vouchers.md` | screenshot-ui |
| ⬜ | `voucher email.jpg` | `hub-management-tips/how-tos/how-to-create-gift-vouchers.md` | screenshot-ui |
| ⬜ | `voucher order.jpg` | `hub-management-tips/how-tos/how-to-create-gift-vouchers.md` | screenshot-ui |
| ⬜ | `voucher shop front.jpg` | `hub-management-tips/how-tos/how-to-create-gift-vouchers.md` | screenshot-ui |
| ⬜ | `preview 2.jpg` | `hub-management-tips/how-tos/open-your-shop-on-preview.md` | screenshot-ui |
| ⬜ | `preview 3.jpg` | `hub-management-tips/how-tos/open-your-shop-on-preview.md` | screenshot-ui |
| ⬜ | `preview 4.jpg` | `hub-management-tips/how-tos/open-your-shop-on-preview.md` | screenshot-ui |
| ⬜ | `preview 5.jpg` | `hub-management-tips/how-tos/open-your-shop-on-preview.md` | screenshot-ui |
| ⬜ | `preview 6.jpg` | `hub-management-tips/how-tos/open-your-shop-on-preview.md` | screenshot-ui |
| ⬜ | `customers.jpg` | `hub-management-tips/how-tos/reward-your-volunteers.md` | screenshot-ui |
| ⬜ | `volunteer 1.jpg` | `hub-management-tips/how-tos/reward-your-volunteers.md` | screenshot-ui |
| ⬜ | `volunteer 2.jpg` | `hub-management-tips/how-tos/reward-your-volunteers.md` | screenshot-ui |
| ⬜ | `volunteer 3.jpg` | `hub-management-tips/how-tos/reward-your-volunteers.md` | screenshot-ui |
| ⬜ | `volunteer 4.jpg` | `hub-management-tips/how-tos/reward-your-volunteers.md` | screenshot-ui |
| ⬜ | `volunteer 5.jpg` | `hub-management-tips/how-tos/reward-your-volunteers.md` | screenshot-ui |
| ⬜ | `Thankyou5.jpg` | `hub-management-tips/how-tos/running-a-social-media-promotion.md` | screenshot-ui |
| ⬜ | `active voucher.jpg` | `hub-management-tips/how-tos/running-a-social-media-promotion.md` | screenshot-ui |
| ⬜ | `new voucher (1).jpg` | `hub-management-tips/how-tos/running-a-social-media-promotion.md` | screenshot-ui |
| ⬜ | `new voucher percent1.jpg` | `hub-management-tips/how-tos/running-a-social-media-promotion.md` | screenshot-ui |
| ⬜ | `unactive voucher.jpg` | `hub-management-tips/how-tos/running-a-social-media-promotion.md` | screenshot-ui |
| ⬜ | `voucher checkout.jpg` | `hub-management-tips/how-tos/running-a-social-media-promotion.md` | screenshot-ui |
| ⬜ | `soft close 1.jpg` | `hub-management-tips/how-tos/soft-close-an-order-cycle.md` | screenshot-ui |
| ⬜ | `soft close 2.jpg` | `hub-management-tips/how-tos/soft-close-an-order-cycle.md` | screenshot-ui |
| ⬜ | `soft close 3.jpg` | `hub-management-tips/how-tos/soft-close-an-order-cycle.md` | screenshot-ui |
| ⬜ | `capture new pay.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `credit new pay.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `credit shop.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `customer 1.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `customer 2.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `customer account 2.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `customer account 3.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `customer account 4.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `customer pay.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `customer tag 1.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `delivery report 2.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `edit order 1.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `new pay.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `order 1 credit.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `order 1 paid.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `order 1.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `order 2 paid.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `order 2.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `order edit 1.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `order edit 2.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `order edit 3.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `payment method 1.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `prod 1.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `prod 2.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `report 1.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `report final.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `tags 1.jpg` | `hub-management-tips/how-tos/take-orders-on-credit.md` | screenshot-ui |
| ⬜ | `core-values-exercise.pdf` | `hub-management-tips/marketing-tips.md` | documento |
| ⬜ | `email-marketing-webinar-july.pdf` | `hub-management-tips/marketing-tips.md` | documento |
| ⬜ | `master-your-messaging-webinar-slides.pdf` | `hub-management-tips/marketing-tips.md` | documento |
| ⬜ | `how-to-use-hashtags-on-social-media.docx.pdf` | `hub-management-tips/social-media.md` | documento |
| ⬜ | `instagram-marketing-masterclass.pdf` | `hub-management-tips/social-media.md` | documento |
| ⬜ | `instagram-webinar.pdf` | `hub-management-tips/social-media.md` | documento |
| ⬜ | `social-media-tips.docx.pdf` | `hub-management-tips/social-media.md` | documento |
| ⬜ | `social-media-webinar.pdf` | `hub-management-tips/social-media.md` | documento |
| ⬜ | `sort-your-social-media-strategy.pdf` | `hub-management-tips/social-media.md` | documento |
| ⬜ | `tools-for-social-media-success.pdf` | `hub-management-tips/social-media.md` | documento |
| ⬜ | `webinar-slides-facebook-improvers.pdf` | `hub-management-tips/social-media.md` | documento |
| ⬜ | `1-about.png` | `hub-management-tips/your-farm-on-facebook.md` | screenshot-ui |
| ⬜ | `2-profile-picture.png` | `hub-management-tips/your-farm-on-facebook.md` | screenshot-ui |
| ⬜ | `4-prefered-page-audiance.png` | `hub-management-tips/your-farm-on-facebook.md` | screenshot-ui |
| ⬜ | `add-a-cover.png` | `hub-management-tips/your-farm-on-facebook.md` | screenshot-ui |
| ⬜ | `add-to-favourites.png` | `hub-management-tips/your-farm-on-facebook.md` | screenshot-ui |
| ⬜ | `create-a-call-to-action-button.png` | `hub-management-tips/your-farm-on-facebook.md` | screenshot-ui |
| ⬜ | `create-page.png` | `hub-management-tips/your-farm-on-facebook.md` | screenshot-ui |
| ⬜ | `edit-and-contact-details.png` | `hub-management-tips/your-farm-on-facebook.md` | screenshot-ui |
| ⬜ | `local-business-or-placeee.png` | `hub-management-tips/your-farm-on-facebook.md` | screenshot-ui |

### shopping-with-open-food-network

| Status | Imagem | Página | Classe |
|:-:|---|---|---|
| ⬜ | `bread-4183076_1920 (1).jpg` | `shopping-with-open-food-network/README.md` | screenshot-ui |
| ⬜ | `cow-3089278_1920.jpg` | `shopping-with-open-food-network/README.md` | screenshot-ui |
| ⬜ | `egg-4909422_1920.jpg` | `shopping-with-open-food-network/README.md` | screenshot-ui |
| ⬜ | `fruits-1761031_1920 (1).jpg` | `shopping-with-open-food-network/README.md` | screenshot-ui |
| ⬜ | `ofn-global-colorx2_720.png` | `shopping-with-open-food-network/README.md` | screenshot-ui |
| ⬜ | `question-2309040_1920.jpg` | `shopping-with-open-food-network/README.md` | screenshot-ui |
| ⬜ | `searching (1).jpg` | `shopping-with-open-food-network/README.md` | screenshot-ui |
| ⬜ | `vegetable-2573149_1920.jpg` | `shopping-with-open-food-network/README.md` | screenshot-ui |
| ⬜ | `resetpassword.gif` | `shopping-with-open-food-network/frequently-asked-questions.md` | gif-animado |
| ➖ | `authorisecard.jpg` | `shopping-with-open-food-network/regular-automated-orders.md` | foto |
| ⬜ | `cardemail.jpg` | `shopping-with-open-food-network/regular-automated-orders.md` | screenshot-ui |
| ⬜ | `newcard.gif` | `shopping-with-open-food-network/regular-automated-orders.md` | gif-animado |
| ⬜ | `checkout.gif` | `shopping-with-open-food-network/shopping-and-placing-an-order.md` | gif-animado |
| ⬜ | `chooseoc.jpg` | `shopping-with-open-food-network/shopping-and-placing-an-order.md` | screenshot-ui |
| ⬜ | `feebreakdown.jpg` | `shopping-with-open-food-network/shopping-and-placing-an-order.md` | screenshot-ui |
| ⬜ | `filtersmobile.png` | `shopping-with-open-food-network/shopping-and-placing-an-order.md` | screenshot-ui |
| ⬜ | `productweightunit-price2.jpg` | `shopping-with-open-food-network/shopping-and-placing-an-order.md` | screenshot-ui |
| ⬜ | `searchandaddproducer.gif` | `shopping-with-open-food-network/shopping-and-placing-an-order.md` | gif-animado |
| ⬜ | `newcard2 (1).gif` | `shopping-with-open-food-network/your-ofn-account.md` | gif-animado |

### complementary-tools-software

| Status | Imagem | Página | Classe |
|:-:|---|---|---|
| ⬜ | `mailchimp1.png` | `complementary-tools-software/communication.md` | screenshot-ui |
| ⬜ | `mailchimp2 (1).png` | `complementary-tools-software/communication.md` | screenshot-ui |

### raiz

| Status | Imagem | Página | Classe |
|:-:|---|---|---|
| ⬜ | `capture-du-2019-09-26-00-49-08.png` | `README.md` | screenshot-ui |
| ⬜ | `copy.jpg` | `glossary-of-ofn-terms.md` | screenshot-ui |
| ⬜ | `edit.png` | `glossary-of-ofn-terms.md` | screenshot-ui |
| ⬜ | `shipped (2) (2) (2).png` | `glossary-of-ofn-terms.md` | screenshot-ui |
| ⬜ | `trash.jpg` | `glossary-of-ofn-terms.md` | screenshot-ui |
| ⬜ | `Capture du 2018-08-08 16-14-38.png` | `our-values.md` | screenshot-ui |
| ⬜ | `changeorders.jpg` | `trouble-shooting.md` | screenshot-ui |
| ⬜ | `mycellium.png` | `vision-mission-activities.md` | screenshot-ui |
| ⬜ | `l-flowchart (1).png` | `your-quick-start-on-ofn-given-who-you-are.md` | diagrama-ou-arte |

### working-on-the-ofn-governance

| Status | Imagem | Página | Classe |
|:-:|---|---|---|
| ⬜ | `Capture du 2019-05-28 19-00-57.png` | `working-on-the-ofn-governance/how-we-prioritize-general-and-sector-development-tasks.md` | screenshot-ui |
| ⬜ | `Capture du 2019-05-28 19-02-42.png` | `working-on-the-ofn-governance/how-we-prioritize-general-and-sector-development-tasks.md` | screenshot-ui |
| ⬜ | `Capture du 2018-08-08 16-38-34.png` | `working-on-the-ofn-governance/legal-model.md` | screenshot-ui |
| ⬜ | `Capture du 2019-05-25 22-17-05.png` | `working-on-the-ofn-governance/legal-model.md` | screenshot-ui |
| ⬜ | `image (1).png` | `working-on-the-ofn-governance/team-organization/global-rates-table.md` | screenshot-ui |

### becoming-a-local-ofn-affiliate

| Status | Imagem | Página | Classe |
|:-:|---|---|---|
| ⬜ | `logoOFN.png` | `becoming-a-local-ofn-affiliate/branding-guidelines.md` | diagrama-ou-arte |
| ⬜ | `OFN Styleguide Overview 20190611-page-001.jpg` | `becoming-a-local-ofn-affiliate/graphical-ressources.md` | diagrama-ou-arte |

---

**Legenda**: ⬜ pendente · 🔄 em andamento · ✅ concluído · ➖ fora de escopo
