import requests
import json
UrlMain = "https://pytst-4d747-default-rtdb.firebaseio.com"
User = None
#message
print("\n\tOlá, Essa Bagaça  Um Chat Entre Pessoas\n")
print("\tpara mais informaçoes dijite 'help'!\n")  
line = True


while line:
    Rcon = str(input("cmd: "))
    #filther the a str
    Rcon = Rcon.lower()
    Rcon = Rcon.strip()
    if(Rcon=="help"):
        print("\033[1;32m_"*80,"""\n
            \033[1;32m***  HELP  ***       
              \033[1;30mUserAdd \033[1;36mcriar usuario
              \033[1;30mUserLogin  \033[1;36mentrar no seu usuario
              \033[1;30mRomOpen \033[1;36mentra em uma sala
              \033[1;30mRomCreate  \033[1;36mcriar uma sala 
             \n""", "\033[1;32m_\033[1;0m"*80)
    if(Rcon=="useradd"):
        print("\n\033[1;32mCriaçao De Usuario Iniciada")
        #set name and passworld
        while User==None:
            Name=""
            while len(Name) < 3:
                Name = str(input("\033[1;33mseu nome: \033[1;30m"))
                if(len(Name) < 3):  
                    print("\033[1;39m \t!Aerta De Erro\n\033[1;31m\tnome invalido\n que tipo de nome só tem 2 letras \033[1;0m")
                else:
                    break
            Passworld = ""
            while len(Passworld) < 8:
                Passworld = str(input("\033[1;33msua senha: \033[1;30m"))
                if(len(Passworld) < 8):
                    print("\033[1;39m \t!Aerta De Erro\n\033[1;31m\tsenha invalido\n coloca mais dijito nisso ai carai \033[1;0m")          
                else:
                    break
            #set id the user
            rqt = requests.get(f"{UrlMain}/user/.json").json()
            print("\n\033[1;33mAteçao!!")
            try:
                id = len(rqt)
                print(f"\033[1;32mseu id é\033[1;0m {id}\n")
            except:
                id = 0
                print(f"\033[1;32mseu id é\033[1;0m {id}\n")
            #send info for database
            data = {
                id:{
                    "name":Name,
                    "passworld":Passworld,
                }
            }
            data = json.dumps(data)
            requests.patch(f"{UrlMain}/user/.json",data)
            print(f"\033[1;32mo ususario \033[1;30m{Name}\033[1;32m, foi criado com sucesso\033[1;0m")
            print("\033[1;32mdijite \033[1;30mUserLogin\033[1;32m para Entrar Com Seu Usuario.\033[1;0m")
            break
        else:
            print("\033[1;32m Voce Já Esta Logado.\033[1;0m")
    if(Rcon=="userlogin"):
        while User==None:
            Name = str(input("\033[1;33mseu nome: \033[1;30m"))
            Passworld = str(input("\033[1;33msua senha: \033[1;30m"))
            id = str(input("\033[1;33minsira seu id: \033[1;0m"))
            rqt = requests.get(f"{UrlMain}/user/{id}.json").json()
            if(rqt["name"] == Name and rqt["passworld"]  == Passworld):
                print(f"logado em '{Name}' com codigo de indetifcaçao '{id}' \033[1;0m")
            else:
                print("\033[1;39m \t!Aerta De Erro\n\033[1;31m\tnome ou senha invalidos\nconfira se escreveu corretamente \033[1;0m")
            User = {"name":Name, "passworld":Passworld}
            
            while True:
                res = str(input("\033[1;33mdeseja slavar essa sessão? [s/n]: \033[1;0m"))
                res = res.lower()
                res = res.split()
                if(res=="s"):
                    with open("UserSesson","w") as userarq:
                        userarq.write(f"{Name}\n{Passworld}")
                    print("\033[1;32msua sessão foi salva.\033[1;0m")
                    break
                if(res=="n"):
                    break