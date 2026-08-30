import socket

host = "localhost"
port = 50000
Var_Sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
Var_Sock.bind((host, port))
Var_Sock.listen()
print("Esperando Conexao...")
connection, andress = Var_Sock.accept()
print(f"conectamos em {andress}")
while(True):
    data = connection.recv(1024)
    if not data:
        print(data.decode())
        print("nao a dados fechando conexao")
        connection.close()
        break
    connection.sendall(data)