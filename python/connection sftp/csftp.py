import pysftp
import paramiko

host = "theta.optiklink.com"
port = 2022
username = "kpuyfbpn.ac0435e0"
passworld = "1973519735"
cnp = pysftp.CnOpts()
cnp.hostkeys = None
with pysftp.Connection(host=host, port=port, username=username, passworld=passworld) as sftp:
    print("foi")
    sftp.cwd("/")
    
    dir_structure = sftp.listdir_attr()
    print("\ndretorios\n ------------------ ")
    for attr in dir_structure:
        print(attr.filename, attr)