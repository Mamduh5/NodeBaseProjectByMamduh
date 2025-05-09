// Normally you’d use a real DB here
const users = [
    {
      id: 1,
      email: 'admin@example.com',
      password: await (await import('argon2')).default.hash('securepass')
    }
  ];
  
  export async function findUserByEmail(email) {
    return users.find(u => u.email === email);
  }
  