import requests
url = "http://127.0.0.1:3010/"
rqt = requests.get(url)
print(f"GET {rqt}")
data = {
    "nome":"lucas",
    "idade":18
}
rqtpst = requests.post(url, data)
