#include <allegro5/allegro.h>
#include <allegro5/allegro_image.h>
#include <iostream>

int main() {
    if (!al_init()) {
        std::cerr << "Falha ao inicializar a Allegro!" << std::endl;
        return -1;
    }

    if (!al_init_image_addon()) {
        std::cerr << "Falha ao inicializar o addon de imagem!" << std::endl;
        return -1;
    }

    std::cout << "Allegro inicializado com sucesso!" << std::endl;
    al_shutdown_image_addon();
    al_uninstall_system();
    return 0;
}
