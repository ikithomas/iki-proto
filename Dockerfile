FROM golang:1.17-alpine

ENV APP_ROOT "/go/src/iki"
ENV GO111MODULE "auto"
ENV GOPRIVATE="github.com/ikithomas"
WORKDIR ${APP_ROOT}

RUN apk update \
  && apk add ca-certificates alpine-sdk \
  && update-ca-certificates
COPY go.mod go.sum ./

RUN go get -u golang.org/x/lint/golint \
  && go get -u golang.org/x/tools/cmd/godoc \
  && go mod download

COPY . .
