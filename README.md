# Karim Tattoo

Site de portfólio e agendamento do Karim, tatuador com foco em blackwork. O portfólio reúne fotos, vídeos e estudos digitais. Na Flash Wall, cada arte tem um link de orçamento pelo WhatsApp.

**Site público** · [karim-tattoo.vercel.app](https://karim-tattoo.vercel.app/)

## Abrir no computador

Clone o repositório e abra o arquivo `index.html` no navegador. O site usa HTML, CSS e JavaScript e pode ser aberto sem instalar dependências.

```sh
git clone https://github.com/hugoalmx/tattoosite.git
cd tattoosite
```

## Onde editar

| Arquivo ou pasta | Conteúdo |
| --- | --- |
| `index.html` | Textos, links de contato, itens dos portfólios e desenhos da Flash Wall |
| `css/style.css` | Cores, tipografia, layout responsivo e animações |
| `js/script.js` | Menu, carrosséis e visualização de fotos e vídeos |
| `js/flash-wall.js` | Ativação da animação quando as artes entram na tela |
| `images/gallery/` | Fotos, artes digitais, vídeos sem áudio e miniaturas |
| `images/background/` | Imagens da capa |
| `plugins/chocolat/` | Recursos do visualizador de fotos |

Ao trocar um vídeo, atualize também a miniatura correspondente no HTML. Confira o carrossel, a ampliação das imagens e os botões de agendamento antes de enviar a mudança.

## Publicação na Vercel

A branch de produção é `main`. O projeto `karim-tattoo` usa a raiz do repositório como site estático. No painel da Vercel, a integração Git deve apontar para `hugoalmx/tattoosite` para publicar os commits da `main`. O projeto dispensa comando de build e variáveis de ambiente.

Site desenvolvido por [Hugo Almeida DataLeveling](https://www.instagram.com/hugoalmx/).
