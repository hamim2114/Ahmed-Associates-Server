
# Ahmed-Associates-server



## 🛠 Tech Used

- Node JS
- Express JS
- MongoDB
- Mongoose
- Cloudinary
- Jsonwebtoken
- Multer
- Nodemailer
## Some API Reference

#### For Login

```http
  POST https://ahmed-associates-server.vercel.app/api/auth/login
```
#### Body
| _Key | _Type     | _Required                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | true |
| `password` | `string` | true |

#### For Register
```http
  POST https://ahmed-associates-server.vercel.app/api/auth/register
```
#### Body
| _Key | _Type     | _Required                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | true |
| `email` | `string` | true |
| `password` | `string` | true |

#### Added A Team Member

```http
  POST https://ahmed-associates-server.vercel.app/api/team/
```

#### Body
| _Key | _Type     | _Required                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | true |
| `email` | `string` | true |
| `phone` | `string` | false |
| `title` | `string` | true |
| `location` | `string` | false |
| `desc` | `string` | true |
| `img` | `string` | false |
#### For Adding A Member Required jwt_token from Cookies

#### Get All Team Member

```http
  GET https://targetcoachingserver.vercel.app/api/team
```


#### Post A Job Post

```http
  GET https://targetcoachingserver.vercel.app/api/job
```

| _Parameter | _Type     | _Required                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | true |
| `Body`      | `string` | true |



