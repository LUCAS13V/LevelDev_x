import pygame
display_size = (500, 500)
screen_01 = pygame.display.set_mode(display_size)
pygame.display.set_caption("game no desenrolo")
pygame.init()
print(screen_01)
while True:
    pygame.draw.rect(screen_01, (255,0 ,0), (100,100,100,100))
    pygame.display.flip()