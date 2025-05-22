#!/bin/bash

dnf update

cd /workspace

python tests.py --junitxml=results.xml

