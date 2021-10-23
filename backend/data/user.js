import bcrypt from 'bcryptjs';

const users=[
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('1Password!', 10),
        isAdmin: true
    },
    {
        name: 'nate',
        email: 'nate@gmail.com',
        password: bcrypt.hashSync('1Password!', 10)
    },
    {
        name: 'amber',
        email: 'amber@gmail.com',
        password: bcrypt.hashSync('1Password!', 10)
    },
]

export default users;