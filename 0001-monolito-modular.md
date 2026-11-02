# ADR 0001 — Monólito modular com fronteiras de domínio

- **Status:** Proposta (aguardando aprovação do responsável pelo projeto)
- **Data:** 2026-11-02

## Contexto
Os documentos base (v2.0 e Documento Mestre) exigem módulos independentes em suas responsabilidades, contratos explícitos entre domínios e evolução sem reconstruções. Não há código existente. A equipe é pequena e o custo operacional importa.

## Decisão
1. Um único serviço de backend (**monólito modular**) em Node.js + TypeScript + TypeORM + PostgreSQL.
2. Cada domínio vive em `backend/src/domains/<dominio>/` com `entities/`, `repositories/`, `services/`, `controllers/`, `dto/`.
3. Um domínio **nunca** importa entidades ou repositórios de outro. A comunicação é feita por:
   - interfaces de serviço públicas (`<dominio>/index.ts` exporta apenas o contrato), ou
   - eventos internos (padrão outbox quando houver necessidade de garantia de entrega).
4. Chaves estrangeiras entre domínios referenciam apenas IDs (UUID); nenhum domínio altera tabelas de outro.
5. O esquema muda **somente** por migrations versionadas (`synchronize: false`).
6. A extração de um domínio para serviço separado fica adiada até haver evidência de necessidade (carga, equipe ou risco).

## Consequências
- Menor custo operacional e de infraestrutura no piloto.
- Fronteiras verificáveis (regra de lint de imports entre domínios será adicionada no CI).
- Se um domínio precisar escalar de forma independente, a separação é possível porque os contratos já são explícitos.

## Alternativas descartadas
- **Microsserviços desde o início:** custo operacional e de coordenação desproporcional ao estágio do projeto.
- **Monólito sem fronteiras:** contraria o princípio de independência dos domínios.
