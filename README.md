# OpenYan

*Free, open-source, high-quality software for everyone.*

## Serving OpenYan locally

1. Create a local copy of this repository:

```
git clone https://github.com/openyan-org openyan
cd openyan
```

```
pnpm run dev
```

## Serving as a container

```
docker build -t openyan-ui .
```

```
docker run --name openyan-ui -d -p 3000:3000 openyan-ui
```