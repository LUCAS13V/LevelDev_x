import pygame
import time
#tela carecteriscas
size_screen = (500, 500)
#Colors
WHITE = (255, 255, 255)
BLUE = (0, 0, 255)
#Init
class Player:
    def __init__(self, x, y, width, height):
        self.x=x
        self.y=y
        self.width=width
        self.height=height 
    color=(255,255,255)
    def draw(self):
        pygame.draw.rect(screen, Player.color,(self.x, self.y, self.width, self.height), 0, 15)
        
    def update(self):
        if keys[0]==100 and keys[1]==1:
            self.x+=0.1
        if keys[0]==97 and keys[1]==1:
            self.x-=0.1
        if keys[0]==119 and keys[1]==1:
            self.y-=0.1
        if keys[0]==115 and keys[1]==1:
            self.y+=0.1

player = Player(0,0,10,10)
#Tela
pygame.init()
screen = pygame.display.set_mode(size_screen)

pygame.display.set_caption("jogo based na druga")


keys = [[0,0],0]
def features_game():
    for event in pygame.event.get():
        #sair
        if event.type == pygame.QUIT:
            exit()
        #teclas
        if event.type == pygame.KEYDOWN:
            print(keys)
            keys[0].append(event.key)
            keys[1]=1
        if event.type == pygame.KEYUP:
            keys[0]=None
            #keys[1]=0
            
#loop
while True:
    screen.fill(BLUE)
    features_game()
    player.draw()
    player.update()
    pygame.display.flip()
