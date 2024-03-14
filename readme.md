# Invoice Generator Backend

Server code for Invoice Generator

## Try it out

Deployed on: https://invoice-generator.up.railway.app/

## Features

- JWT Auth for Server
- Used MongoDB as Database
- Created Endpoints on Express Framwork in NodeJS language
- Integrated with React + TypeScript Client Side

## API Documentation

### Register

```
  POST /api/v1/auth/register
```

| Parameter          | Type     | Description                    |
| :----------------- | :------- | :----------------------------- |
| `name`             | `string` | **Required**. User's name      |
| `email`            | `string` | **Required**. User's email     |
| `password`         | `string` | **Required**. User's password  |
| `confirm_password` | `string` | **Required**. Confirm password |

### Login

```
    POST /api/v1/auth/login
```

| Parameter  | Type     | Description                   |
| :--------- | :------- | :---------------------------- |
| `email`    | `string` | **Required**. User's email    |
| `password` | `string` | **Required**. User's password |

### Logout User

```
    POST /api/v1/auth/logout
```

No params required

### Verify User

```
    GET /api/v1/user/
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `token`   | `string` | **Required**. User's jwt token |

## Authors

- [@akshatdwivedi](https://www.github.com/akshat-9825)

## License

[MIT](https://github.com/akshat-9825/invoice-generator-client/blob/main/LICENSE)
