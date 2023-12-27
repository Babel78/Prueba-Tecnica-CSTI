# PRUEBA TECNICA EXCHANGE

#### Tecnologias Usadas:

- NestJS
- Typescript
- MySQL
- Docker
- Docker Compose
- Fastify
- Jest
- Swagger

#### Requerimientos para levantar el proyecto Local:

- NodeJS 16.x
- Docker y Docker compose

#### Pasos para levantar el proyecto Local:

1. Ejecutar Docker.
2. Abrir una terminal y situarse en la carpeta del proyecto.
3. Crear el archivo .env con el comando `cp .env.example .env`
4. Ejecutar el comando en la terminal `docker-compose up -d`.

### Documentación:

1. Una vez levantado el Proyecto la documentación de Swagger podra ser visualizada a traves del siguiente enlace: http://localhost:3000/docs

#### AUTH

##### 1. Obtener JWT

```http
POST /api/v1/auth
```

| Body | Type | Description |
| :--- | :--- | :--- |
| `username` | `string` | **Required** |
| `password` | `string` | **Required** |

#### Response

```javascript
{
  "access_token" : string
}
```

#### EXCHANGE

##### 1. Crear Tipo de Cambio

```http
POST /api/v1/exchange
```

| Body | Type | Description |
| :--- | :--- | :--- |
| `money_from` | `string` | **Required**. Moneda Origen |
| `money_to` | `string` | **Required**. Moneda Destino |
| `type_exchange` | `number` | **Required**. Valor de Tipo de Cambio |

#### Response

```javascript
{
	"message": "Se creo correctamente."
}
```

##### 2. Calcular Tipo de Cambio

```http
POST /api/v1/exchange/calculated
```

| Body | Type | Description |
| :--- | :--- | :--- |
| `money_from` | `string` | **Required**. Moneda Origen |
| `money_to` | `string` | **Required**. Moneda Destino |
| `amount` | `number` | **Required**. Valor a cambiar |

#### Response

```javascript
{
	"amount": number,
	"money_from": string,
	"money_to": string,
	"amount_calculated": number,
	"type_exchange": number
}
```

##### 3. Actualizar el Tipo de Cambio

```http
POST /api/v1/exchange/update
```

| Body | Type | Description |
| :--- | :--- | :--- |
| `money_from` | `string` | **Required**. Moneda Origen |
| `money_to` | `string` | **Required**. Moneda Destino |
| `type_exchange` | `number` | **Required**. Nuevo valor de Tipo de Cambio |

#### Response

```javascript
{
	"message": "Se actualizo correctamente."
}
```

#### Otros comandos:

- `npm run build`: Para generar el compilado del proyecto
- `npm run test`: Para ejecutar los test
- `npm run lint`: Para pasar el linter
