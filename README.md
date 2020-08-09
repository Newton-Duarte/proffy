## Proffy - Next Level Week #2 by [Rocketseat](https://rocketseat.com.br)

Sua plaforma de estudos online.

#### Screenshots

Demonstration
![Proffy](/screenshots/proffy-demo.gif)

Home
![Proffy Home](/screenshots/01proffy-home.jpg)

Login
![Proffy Login](/screenshots/06proffy-login.jpg)

TeacherList
![Proffy Teacher List](/screenshots/02proffy-study.jpg)
![Proffy Teacher List](/screenshots/03proffy-teacher.jpg)

Register
![Proffy Register](/screenshots/04proffy-register.jpg)

Classes
![Proffy Classes](/screenshots/05proffy-classes.jpg)

#### Setup

Clone the project

```bash
git clone https://github.com/Newton-Duarte/proffy.git
```

```bash
cd proffy
```

### Frontend (web)

```bash
cd web
```

Install dependencies

```bash
npm install
```

Start frontend server

```bash
npm start
```

The frontend server runs at port 3000, so, go to http://localhost:3000 in your browser.

### Backend (server)

```bash
cd server
```

Install dependencies

```bash
npm install
```

Run migrations

```bash
npm run knex:migrate
```

Start backend server

```bash
npm start
```

#### Endpoints

http://localhost:3333/classes
http://localhost:3333/connections
http://localhost:3333/register
http://localhost:3333/login

#### How the endpoints works

Send http request with the specific http verb to:

###### GET Classes
Get available classes filtering by week_day, subject and time

`GET http://localhost:3333/classes?week_day=1&subject=Inglês&time=08:00`

###### GET Connections
Get total connections

`GET http://localhost:3333/connections`

###### POST Login
`GET http://localhost:3333/login`

Body:
```javascript
{
  "email": "test@test.com",
  "password": "password"
}
```

###### POST Register
`GET http://localhost:3333/register`

Body:
```javascript
{
  "name": "Newton Duarte",
  "email": "test@test.com",
  "password": "password",
  "avatar": "https://avatars0.githubusercontent.com/u/15693392?s=460&v=4",
  "whatsapp": "82000000000",
  "bio": "Graduado em Sistemas de Informação pela Faculdade de Alagoas, possui vivência em desenvolvimento web."
}
```

###### POST Classes
Create classes

`POST http://localhost:3333/classes`

Headers:
`Content-Type: application/json`
`Authorization: <token>`

Body:
```javascript
{
  "user_id": 1,
  "subject": "English",
  "cost": 80,
  "schedule": [
    { "week_day": 1, "from": "8:00", "to": "12:00" },
    { "week_day": 3, "from": "9:30", "to": "11:30" },
    { "week_day": 5, "from": "10:00", "to": "12:00" }
  ]
}
```