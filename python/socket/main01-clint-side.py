import socket
host = "127.0.0.1"
port = 50000
Var_Sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
Var_Sock.connect((host, port))
Var_Sock.sendall(str.encode("sdkufhdsvfvdlfhvdlhf"))
data = Var_Sock.recv(1024)
print("msg envida", data.decode())