# Escopo do MVP — CivicSphere

**Versão:** 0.1 (proposta) · **Data:** 2026-11-02

## Tese central
Ação cívica com **prova validada e rastreável**, convertida em reputação auditável. É o elemento que distingue o CivicSphere; o restante do ecossistema se apoia nele.

## Dentro do MVP
1. **Identidade e acesso:** cadastro, login, sessões, papéis (RBAC), consentimentos.
2. **Causas e ações cívicas:** criar causa, registrar ação, vincular participantes.
3. **Provas e validação:** envio de evidência, fluxo `pending → approved | rejected`, justificativa, recurso, trilha de auditoria.
4. **Reputação simples e auditável:** derivada apenas de ações validadas, com teto por período.
5. **Base de engenharia:** OpenAPI, testes automatizados, CI, migrations, observabilidade básica.
6. **Piloto hyperlocal** em uma comunidade real.

## Fora do MVP (e por quê)
| Item | Motivo do adiamento |
|---|---|
| Marketplace com escrow | Movimentar dinheiro exige instituição de pagamento autorizada e validação jurídica. |
| CivicCoin / blockchain | Natureza jurídica indefinida; depende de parecer especializado. |
| Ledger e recompensas financeiras | Não implementar saldos sem lastro (regra dos documentos). |
| Mobilidade / caronas | Geolocalização é dado pessoal de alto risco (LGPD) e envolve segurança pessoal. |
| Governança participativa (votações) | Exige regras anti-manipulação e legitimidade definidas. |
| Agentes autônomos do LUMEN CIVI | Entram depois, sobre dados e auditoria já consolidados. |

## Critérios para considerar o MVP validado
- Fluxo completo ação → prova → decisão → reputação funcionando de ponta a ponta com testes de integração.
- Toda decisão de validação rastreável (quem, quando, justificativa, estado anterior).
- Nenhuma pontuação gerada sem prova aprovada.
- Piloto com usuários reais e métricas de adesão definidas antes do início.

> Os itens jurídicos acima são alertas de planejamento, não parecer. Devem ser validados com profissional habilitado.
