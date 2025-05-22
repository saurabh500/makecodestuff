#!/bin/bash

dnf update

dnf install -y python3 python3-pip 
pip install pytest

cd /workspace

pytest tests.py --junitxml=results.xml

