# test_takeoff

Данный репозиторий является результатом тестового задания по работе с ЛК.<br>

https://testfortakeoff.herokuapp.com/ - deploy

Реализованы клиентская и серверная части.<br>

Для запуска приложения на локальной машине необходим установленный Postgres.<br>По умолчанию юзернейм пользователя "postgres", пароль "postgres".<br>
При необходимости поменять username и password на свои можно в файле по пути:<br> test_takeoff/server/db/config/config.json

Инструкция по запуску приложения

1. Перейти в папку 'client'<br>
cd client

2. Установить пакеты<br>
npm i

3. Выйти из папки client<br>
cd ..

4. Перейти в папку 'server'<br>
cd server

5. Установить пакеты<br>
npm i

6. Создать базу данных<br>
npx sequelize db:create

7. Мигрировать базу<br>
npx sequelize db:migrate

8. Запустить сервер<br>
npm run dev

9. Выйти из папки server<br>
cd ..

10. Перейти в папку 'client'<br>
cd client

11. Запустить приложение<br>
npm start

12. Наслаждаться.<br>
