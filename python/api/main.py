from flask import Flask, jsonify, request

app = Flask(__name__)

drogs = [
    {
        "maconha":
            {
                "types": {"ice": 25,"hashish": 10, "skunk": 10, "pren": 5}
                
            },
        "po":{
            "types": 
                {
                    "cocaina": 5,
                }
        }
     },
]

print("\t\t\tbiqueira oline")
for product, types in drogs[0]:
    print()
    