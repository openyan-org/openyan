# OpenYan

OpenYan is a platform offering free and open source multi-purpose services, emphasizing on automation for students and developers.

**STATUS:** Currently a work in progress.

## Developer Environment Setup

The following subsections serve as quickstart to setup development environment should you intend to make changes to and experiment with OpenYan.

### Setting up local repository

Get started by cloning the repository:

```bash
git clone https://github.com/openyan-org/openyan.git openyan
cd openyan
```

Initialise default environment secrets and start a postgres server (NOTE: Some environment secrets such as OAuth credentials require manual configuration):

```bash
bash scripts/env-init.sh
bash scripts/postgres-up.sh
```

### **Setting up and serving the applications**

Install dependencies for the web client:

```bash
cd web
pnpm install
```

Finaly serve the web client on port 3000:

```bash
# still in web/
pnpm run dev
```

Then, follow up by serving the OpenYan API server on port 8080:

```bash
# go to the root working directory
cd ..
air
```

## License

OpenYan is [MIT licensed.](https://github.com/openyan-org/openyan/blob/master/LICENSE)