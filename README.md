# Synke Services

Site institucional para captação de clientes da Synke. Desenvolvido com foco em performance, design moderno e minimalista.

## 🚀 Tecnologias

*   **Angular:** Framework principal.
*   **Tailwind CSS:** Estilização utilitária e responsiva.
*   **TypeScript:** Lógica e tipagem segura.

## 🛠️ Configuração e Instalação

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```
    Acesse `http://localhost:4200/` no seu navegador. O aplicativo será recarregado automaticamente se você alterar qualquer arquivo de origem.

## 📦 Build e Deploy

O projeto conta com uma pipeline de CI/CD configurada via GitHub Actions.

### Build Local
Para gerar os arquivos de produção localmente:
```bash
npm run build
```
Os arquivos serão gerados na pasta `dist/synke-services`.

### Deploy Automático (AWS S3)
O deploy é realizado automaticamente a cada **push na branch `main`**.

*   **Destino:** Bucket S3 `bkc.synke.com.br`
*   **Região:** `sa-east-1` (São Paulo)
*   **Pipeline:** Configurada em `.github/workflows/deploy.yml`

Certifique-se de que as secrets `AWS_ACCESS_KEY_ID` e `AWS_SECRET_ACCESS_KEY` estejam configuradas corretamente no repositório do GitHub.

## 🧪 Testes

*   **Unitários:** `ng test` (via Karma)
*   **E2E:** `ng e2e` (necessita configuração de framework de escolha)

---
© 2024 Synke. Todos os direitos reservados.
