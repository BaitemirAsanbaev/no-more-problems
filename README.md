
# Сервис для работы с пользователями

Данный проект реализует REST API для управления пользователями. Проект разработан на базе **NestJS**, с использованием **PostgreSQL** и **Sequelize ORM**. Предоставляет базовый функционал работы с пользователями, включая массовую обработку данных.

---

## Технологический стек
- **TypeScript**
- **Node.js**
- **NestJS**
- **PostgreSQL**
- **Sequelize**
- **Swagger**

---

## Установка и запуск проекта

1. **Клонируйте репозиторий**
   ```bash
   git clone https://github.com/BaitemirAsanbaev/no-more-problems.git
   ```

2. **Установите библиотеки и зависимости**
   ```bash
   npm install
   ```

3. **Создайте базу данных в PostgreSQL**
   ```sql
   CREATE DATABASE no_more_problems;
   ```

4. **Настройте файл `.env`**
   - Скопируйте шаблонный файл:
     ```bash
     cp .example.env .env
     ```
   - Заполните файл корректными значениями (например, настройки для подключения к базе данных).

5. **Запустите приложение**
   ```bash
   npm run start:dev
   ```

---

## Функционал

- **Создание пользователя**  
  Позволяет добавить нового пользователя в базу данных.

- **Получение списка пользователей**  
  Эндпоинт для выборки всех пользователей.

- **Массовое добавление пользователей**  
  Функция добавляет 1,000,000 фиктивных пользователей в базу данных.  
  Для оптимизации памяти и времени исполнения данные отправляются в базу пакетами по 10,000 записей за итерацию. Пользователи генерируются с использованием библиотеки [faker-js](https://www.npmjs.com/package/@faker-js/faker).

- **Сброс флага проблем для пользователей**  
  Подсчитывает количество пользователей, у которых флаг `has_problems` установлен в `true`, и сбрасывает его на `false`.  
  Записи обрабатываются пакетами по 10,000 для повышения производительности. Процесс продолжается до тех пор, пока все пользователи с `has_problems: true` не будут обработаны. Возвращается общее количество измененных записей.

---

## Структура проекта

### Модуль **User**
Модуль для работы с пользователями, включает в себя:
- **`user.model`** — описание таблицы для ORM Sequelize.
- **`user.dto`** — описание схемы данных для создания пользователя.
- **`user.service`** — бизнес-логика (создание, обработка, обновление данных).
- **`user.controller`** — описание эндпоинтов API.
- **`user.module`** — связывает все компоненты и предоставляет модульный доступ к функционалу.

---

## Документация API
Документация API доступна по адресу `/api-docs` после запуска приложения. Для генерации используется **Swagger**.

---

## Авторы
**Baitemir Asanbaev**