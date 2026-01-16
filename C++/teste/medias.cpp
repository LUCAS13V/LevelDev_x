#include <Windows.h> // Para a janela de selecionar o arquivo
#include <string>
#include <cstring>

#include <SFML/Window.hpp>
#include <SFML/Graphics.hpp>

sf::Texture LoadTexture(void)
{
    OPENFILENAME ofn;

    ZeroMemory(&ofn, sizeof(ofn));

    ofn.lStructSize = sizeof(ofn);
    ofn.hwndOwner = 0;
    ofn.lpstrDefExt = 0;
    ofn.lpstrFile = new TCHAR[512];
    ofn.lpstrFile[0] = '\0';
    ofn.nMaxFile = 512;
    ofn.lpstrFilter = NULL;
    ofn.nFilterIndex = 0;
    ofn.lpstrInitialDir = NULL;
    ofn.lpstrTitle = "./";
    ofn.Flags = 0;

    GetOpenFileName(&ofn);

    // Converte para std::string.
    std::wstring wstr = ofn.lpstrFile;
    std::string str(wstr.begin(), wstr.end());

    // Armazenará a imagem.
    sf::Texture texture;

    // Verifica se o arquivo é válido e se foi possível carregar.
    if (!texture.loadFromFile(str))
    {
        MessageBox(NULL, "Imagem inválida!", L"Erro", MB_OK);
    }

    return texture;
}