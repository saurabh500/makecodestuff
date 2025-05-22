Script 

docker ps 

docker run -it  ubuntu:24.04 cat /etc/os-release

docker run -it  alpine:3.18 cat /etc/os-release

docker run -it debian:bookworm cat /etc/os-release

docker run -it redhat/ubi9:latest cat /etc/os-release

docker run -it -v "$PWD:/workspace" redhat/ubi9:latest /workspace/scripts/redhat.sh

docker run -it -v "$PWD:/workspace" ubuntu:24.04 /workspace/scripts/ubuntu.sh

docker run -it -v "$PWD:/workspace" alpine:3.18 /workspace/scripts/alpine.sh

docker build -f Dockerfile.ubuntu -t my-ubuntu-pytest .

docker run -it -v "$PWD:/workspace" my-ubuntu-pytest 