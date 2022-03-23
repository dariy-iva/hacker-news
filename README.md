# Проект: Hacker news

## О проекте

Проект находится в стадии разработки.
Проект представляет собой интерфейс для сайта [Hacker News](https://news.ycombinator.com/news), состоящий из двух страниц - приложение для просмотра новостей и комментариев пользователей к ним.

<img src="./Promo.png" alt="promo_photo" />

### Реализовано  
Главная страница:  
✔ отображение списка последних 100 новостей (реализовано по цепочке обращение к Api за списком id новостей -> обращение к Api за новостью по ее id -> сохранение новости в массив в state -> отрисовка новостей, используется Redux Toolkit)  
✔ до момента отрисовки первой новости на странице отображается прелоадер (реализовано через компонент Preloader)  
✔ каждая новость содержит название, рейтинг, ник автора, дату и время публикации (от Api данные времени приходят в unix формате), счётчик количества комментариев  
✔ по клику на новость происходит переход на страницу новости  
✔ список новостей автоматически обновляется один раз в минуту без участия пользователя  
✔ на странице есть кнопка для принудительного обновления списка новостей  
Страница новости:  
✔ новость содержит ссылку, текст, дату и время, ник автора, счётчик количества комментариев  
✔ при загрузке страницы сразу отображаются корневые комментарии к новости  
✔ тексты новостей и комментариев отображаются в первоначальном виде - от Api данные текстов приходят в виде строки с разметкой (реализовано с помощью HTMLReactParser)  

### В стадии разработки  
✔ дочерние комментарии загружаются и отображаются при клике на корневой  
✔ автоматическое обновление списка комментариев один раз в минуту  
✔ кнопка для принудительного обновления списка комментариев  
✔ кнопка для возврата к списку новостей  

### Стек:
* JSX
* CSS
* React
* Redux

## Установка зависимостей и запуск проекта

##### `npm i` – установить зависимости

##### `npm run start` – запуск devServer на http://localhost:3000/

##### `npm run build` – production сборка проекта

API: [Hacker News API](https://github.com/HackerNews/API)  
[Ссылка на проект в GH Pages](https://dariy-iva.github.io/hacker-news/)