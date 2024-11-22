# OpenYan

OpenYan is a platform offering free and open source multi-purpose services, emphasizing on automation for students and developers.

**STATUS:** Currently a work in progress.

## Developer Environment Setup

The following subsections serve as quickstart to setup development environment should you intend to make changes to and experiment with OpenYan.

### Setting up local repository

Get started by cloning the repository:

```
git clone https://github.com/openyan-org/openyan.git openyan
cd openyan
```

Initialise default environment secrets and start a postgres server (NOTE: Some environment secrets such as OAuth credentials require manual configuration):

```
bash scripts/env-init.sh
bash scripts/postgres-up.sh
```

### **Setting up and serving the applications**

Install dependencies for the web client:

```
cd web
pnpm install
```

Finaly serve the web client in development:

```bash
# still in web/
pnpm run dev
```

Then, follow up by serving the OpenYan API server:

```bash
# in the root working directory
air
```
