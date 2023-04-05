const findAllReturn = [
  {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
  }
];

const invalidEmailJson = {
  "email": "admin.com",
  "password": "secret_admin"
};

const invalidPwdJson = {
  "email": "admin@admin.com",
  "password": "foo"
};

const noEmailJson = {
  "password": "secret_admin"
}

const noPwdJson = {
  "email": "admin@admin.com"
}

const validLoginJson = {
  "email": "admin@admin.com",
  "password": "secret_admin"
};

const wrongPwdJson = {
  "email": "admin@admin.com",
  "password": "testeteste"
};

export { 
  findAllReturn,
  invalidEmailJson,
  invalidPwdJson,
  noEmailJson,
  noPwdJson,
  validLoginJson,
  wrongPwdJson,
};