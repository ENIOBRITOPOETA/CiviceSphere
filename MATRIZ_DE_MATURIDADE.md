# Matriz de Maturidade — CivicSphere

Escala (Documento Mestre, seção 16): **Concebida → Especificada → Em implementação → Implementada → Testada → Validada → Operacional**.

Regra: o estado só avança com evidência verificável (código, banco, testes). Atualizar esta matriz em cada PR relevante.

**Última verificação:** 2026-11-02

| Funcionalidade | Domínio | Estado | Evidência / observação |
|---|---|---|---|
| Estrutura do repositório e backend base | Fundação | Implementada | `backend/` com config, data-source, app. `tsc --noEmit` passa. Servidor HTTP ainda não executado. |
| Tabela `users` (migration) | Identidade | Testada (manual) | `1730500000000-CreateUsers.ts` executada em PostgreSQL 16 real: up, down e up de novo; e-mail não normalizado, duplicado, nome vazio, telefone fora do E.164 e status inválido rejeitados; trigger de `updated_at` confirmada. **Sem teste automatizado ainda.** |
| Entidade `User` | Identidade | Implementada | Sem testes automatizados ainda. |
| Autenticação (login/sessões) | Identidade | Concebida | Estratégia ainda em aberto (Doc. 5). |
| Autorização (RBAC) | Identidade | Concebida | |
| Consentimentos (LGPD) | Identidade | Concebida | |
| `user_profiles` e reputação | Identidade | Concebida | Modelagem pendente. |
| Causas | Engajamento | Especificada (parcial) | Descrição no Doc. 2; sem modelo de dados. |
| Ações cívicas | Engajamento | Especificada (parcial) | Idem. |
| Provas e validação | Engajamento | Especificada (parcial) | Fluxo `pending/approved/rejected` definido; antifraude a especificar. |
| Trilha de auditoria | Transversal | Concebida | |
| Marketplace / escrow | Economia solidária | Concebida | Depende de validação jurídica. |
| Mobilidade | Pendente | Concebida | Sem modelagem. |
| Governança participativa | Pendente | Concebida | Sem modelagem. |
| Impacto ambiental | Pendente | Concebida | Sem metodologia. |
| CivicCoin / ledger | Economia | Concebida | Bloqueada por definição jurídica e econômica. |
| LUMEN CIVI / agentes | IA | Concebida | |
| CI/CD | Fundação | Concebida | |
