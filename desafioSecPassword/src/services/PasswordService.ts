export function passwordService(length: number){
    let password = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789- _+=*/\\|!@#$%¨&()[]{}<>,.;:?\'"`~^';

    for(let i = 0; i < length; i++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }

    return password;    
}