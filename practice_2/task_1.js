function checkAge(age){
    if (age > 18){
        return true
    }
    return confirm('Parents agree?')
    
}

console.log(checkAge(13))