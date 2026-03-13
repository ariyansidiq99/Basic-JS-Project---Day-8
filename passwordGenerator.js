const CHARS = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers:   '0123456789',
    symbols:   '!@#$%^&*()_+-=[]{}|;:,.<>?',    
}  

const passwordGenerator = (length = 12, upperCase = true, numbers = true, symbols = true) => {
    if (length < 4 && length > 120) {
        return "Length is according to rule"
    }   
    
    let charPool = CHARS.lowercase;
    if(upperCase) charPool += CHARS.uppercase;
    if(numbers) charPool += CHARS.numbers;
    if(symbols) charPool += CHARS.symbols;

    if(charPool.length === 0) return `Error: Select at lease one character type`;

    // Generate Password
    let password = '';
    for (let i = 0; i<length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }
    return password;
}    

// Check Password Strength
// Return: "Weak" | "Fair" | "Strong" | "Very Strong"

const checkStrength = (password) => {
    let score = 0;
    if(password.length >= 8) score++;
    if(password.length >= 12) score++;
    if(/[a-z]/.test(password)) score++;
    if(/[A-Z]/.test(password)) score++;
    if(/[0-9]/.test(password)) score++;
    if(/[^a-zA-Z0-9]/.test(password)) score++;

    if (score <= 2) return "Weak"
    if (score <= 3) return "Fair"
    if (score <= 4) return "Strong"
    return "Very Strong"
}

const passwords = [
    passwordGenerator(),
    passwordGenerator(8, false, false, false),
    passwordGenerator(20, true, true, true),
    passwordGenerator(6, true, true, false),
]

passwords.forEach((pwd, i) => {
    console.log(`Password ${i + 1}: ${pwd}`);
    console.log(`Strength: ${checkStrength(pwd)}`);
    console.log('---');
    
})