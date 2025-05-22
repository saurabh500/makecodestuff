#!/bin/bash

export DEBIAN_FRONTEND=noninteractive

apt-get update
apt-get install -y python3 python3-pip python3-pytest

cd /workspace
pytest tests.py --junitxml=results.xml
