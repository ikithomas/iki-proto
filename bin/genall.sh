#!/usr/bin/env bash
set -e

buf generate

# TypeScript compile
rm -rf dist/*
npx tsc --skipLibCheck
