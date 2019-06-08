#!/usr/bin/env bash
rm -rf coverage
rm -rf lib-cov

mkdir coverage

node_modules/.bin/jscover web_components lib-cov
mv web_components lib-orig
mv lib-cov web_components
node_modules/.bin/mocha -R mocha-lcov-reporter > coverage/coverage.lcov
rm -rf web_components
mv lib-orig web_components