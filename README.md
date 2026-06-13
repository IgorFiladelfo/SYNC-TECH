# SYNC-TECH

Esse é o SYNC-TECH, um site educativo que eu fiz para quem está começando a
aprender programação. A ideia é mostrar o conteúdo de um jeito mais simples e
visual, com trilhas de estudo, flashcards, vídeos educativos (dentro do youtube), um quiz e um ranking.

## Objetivo

A proposta é deixar o primeiro contato com programação menos assustador. Muita
gente desiste no começo por achar difícil, então tentei juntar em um lugar só
algumas formas de estudar: ler as trilhas, revisar com flashcards, assistir
vídeos e testar o que aprendeu no quiz, acompanhando a pontuação no ranking.

## Observações

O sistema ainda possui possibilidades de melhoria futura, como a implementação de banco de dados, autenticação de usuários, hospedagem em domínio próprio e acompanhamento individual do progresso.

Nesta etapa, o projeto foi aplicado na região de Vitória da Conquista - BA, em uma empresa de grande porte do setor de tecnologia e comunicação. Por se tratar de um ambiente corporativo com regras internas de segurança e privacidade, o sistema não foi disponibilizado em um site público.

Dessa forma, a validação foi realizada localmente, utilizando localhost e persistência de dados no navegador por meio do localStorage. Os participantes utilizaram o sistema nesse formato para testar as funcionalidades, responder aos quizzes, registrar pontuações no ranking e passar feedback sobre a experiência de uso. Tive um auxilio do auxiliar de TI da empresa para tal aplicação, devido a restrições legais do ambiente.


## Tecnologias usadas

- Next.js (App Router)
- React
- JavaScript
- HTML e CSS
- Tailwind CSS
- localStorage (para salvar o progresso e o ranking)

## Como rodar

Com o Node.js instalado, é só rodar:

```bash
npm install
npm run dev
```

E abrir no navegador: http://localhost:3000

## Estrutura de pastas

```
app/            páginas do site (início, trilhas, vídeos, quiz, ranking, sobre)
components/     componentes reutilizados (Header, Hero, Flashcard, cards, etc.)
data/           o conteúdo do site (trilhas + flashcards e perguntas do quiz)
hooks/          o hook que lê e salva dados no navegador
utils/          funções para salvar e ler o ranking
```

## O que dá para fazer no site

- Navegar pelo menu entre as páginas.
- Estudar cada trilha com flashcards (virar o card, ir para o próximo/anterior).
- Marcar trilhas como estudadas e acompanhar a barra de progresso.
- Ver uma lista de vídeos separados por categoria.
- Fazer o quiz escolhendo a trilha e a dificuldade (Fácil, Médio ou Avançado).
- Ver a pontuação no final e salvar no ranking com um nome.
- Ver o ranking ordenado por pontos e limpar quando quiser.
- Ler a página "Sobre" com a explicação do projeto.

## Como funciona o quiz

1. Escolho uma trilha.
2. Escolho a dificuldade (Fácil vale 10, Médio 20 e Avançado 30 pontos por acerto).
3. Respondo as perguntas, que são baseadas no conteúdo dos flashcards.
4. No final aparece a pontuação e dá para salvar no ranking.

## Sobre o localStorage

Como o projeto não tem banco de dados, o progresso das trilhas e o ranking do
quiz ficam salvos no localStorage, que é uma memória do próprio navegador. Por
causa disso:

- Os dados continuam lá mesmo depois de fechar ou atualizar a página.
- Cada navegador guarda os seus próprios dados.
- Se limpar os dados do navegador, o progresso e o ranking somem.


