# Personal Website

My personal portfolio website [portfolio website](https://baukeposthuma.nl/).

Hosted with Docker and Nginx.

## Installation

### Docker

To build a new docker build with a version tag.

```bash
docker build -t personal-website:1.0.0 .
```

To build a new docker build with a version tag and update latest.

```bash
docker build -t baukeposthuma/personal-website:latest -t personal-website:1.0.1 .
```

To link docker tags to your build.

```bash
docker tag personal-website:latest baukeposthuma/personal-website:latest -t personal-website:1.0.1 .
```

To push the build to Docker Hub.

```bash
docker push baukeposthuma/personal-website
```

Run the build with Docker.

```bash
docker run -d -p 80:80 personal-website:latest
```
