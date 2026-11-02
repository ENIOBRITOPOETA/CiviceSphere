# CivicSphere

Plataforma de cidadania ativa, economia solidária e inteligência coletiva.

> **Regra principal:** nenhuma funcionalidade é considerada concluída sem verificação no código, no banco e nos testes. O estado real de cada item está em [`docs/MATRIZ_DE_MATURIDADE.md`](docs/MATRIZ_DE_MATURIDADE.md).

## Documentos
- [`docs/adr/0001-monolito-modular.md`](docs/adr/0001-monolito-modular.md): decisão de arquitetura (proposta)
- [`docs/MVP_ESCOPO.md`](docs/MVP_ESCOPO.md): o que entra e o que fica fora do MVP
- [`docs/MATRIZ_DE_MATURIDADE.md`](docs/MATRIZ_DE_MATURIDADE.md): estado real de cada funcionalidade

## Como rodar (desenvolvimento)
Requisitos: Node 20+, Docker.

```bash
docker compose up -d                 # PostgreSQL 16
cd backend
cp .env.example .env                 # ajuste as credenciais locais
npm install
npm run migration:run                # cria as tabelas
npm run dev                          # API em http://localhost:3000/health
```

## Regras de banco
- O esquema muda **somente** por migrations (`synchronize: false`).
- Nunca versionar `.env` ou credenciais.
