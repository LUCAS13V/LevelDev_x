
print("lua init")
--/////////////////////////>APARENCIA</////////////////////////////////

--configurando mostrat os numeros no nvim"
vim.opt.number = true --mostra os numeros em Ordem Cronologica
vim.opt.relativenumber = true --ordem relativa de onde o ponteiro esta

--syntax on nao tem set porque ele e um comando e nao uma option
vim.cmd("syntax on") --deixa os bagui colorido 'eu acho'

--///////////////////>FUNCIONALIDADES<///////////////////////////////
--configurando o tab
vim.opt.tabstop = 4 --define o valor do tab no caso = a 4   ,entendeu kkk -_-
vim.opt.shiftwidth = 4 --define quantos  kkkk, o vim usa para indentar o codigo

--/////////////////////>ATALAHOS<//////////////////////////////////
--diferente da vida aq podemos fazer atalhos
