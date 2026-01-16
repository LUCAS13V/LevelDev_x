#!/bin/bash
#!usr/bin/python
echo -e "instalando dependecias"
abc = pip show pywebview
sudo apt install python -y
sudo apt install pywebview[qt] -y
echo -e "\e[32m finalizado.\t $date m"
exec bash