#!/bin/sh

apk add python3 py3-pip 
pip install pytest 

pip install pytest 

cd /workspace
pytest tests.py --junitxml=results.xml