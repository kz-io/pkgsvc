import { createTemplate, FileProps, FilePropsPath } from '../../mod.ts';

export const denoWorkflow = createTemplate<FilePropsPath, FileProps>`name: Deno

on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]

permissions:
  contents: read

jobs:
  tests:
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
    runs-on: \${{ matrix.os }}

    steps:
      - name: Setup repo
        uses: actions/checkout@v3

      - name: Setup Deno
        uses: denoland/setup-deno@v1
        
      - name: Run tests
        run: deno test -A
        
  cleanliness:
    runs-on: ubuntu-latest
    steps:
      - name: Setup repo
        uses: actions/checkout@v2

      - name: Install Deno
        uses: denoland/setup-deno@v1

      - name: Run linter
        run: deno lint

      - name: Run formatter
        run: deno fmt --check
`;
