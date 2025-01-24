export function getRandomChar() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
    return characters.charAt(Math.floor(Math.random() * characters.length))
  }
  
  