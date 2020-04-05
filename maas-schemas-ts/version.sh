#!/bin/bash

BASE=$(node -p -e "require('../maas-schemas/package.json').version.split('-').shift();")
TS=$(node -p -e "require('./package.json').version.split('-').shift();")

if [ "$TS" != "$BASE" ]; then
  npm version "$BASE"
fi
