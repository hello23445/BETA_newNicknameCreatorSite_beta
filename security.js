export const blockedTokens = ['awsuoDiAt6U4LR8j', 'lgtrdfhreedghtesghtss', 'GUo80GZ1KU7Jm9G4'];
export const texpereriv = '' //Уже, Скоро, ...

const badWords = ['говно', 'хейт', 'порно', 'Порно']
if (badWords.includes(localStorage.getItem('userName'))){
    alert(localStorage.getItem('lang') === 'ru' ? 'Заданное имя нарушает наши правила.\nПожалуйста задайте другое имя.' : 'The name you entered violates our rules.\nPlease enter a different name.')
    window.location.href = 'user_profile.html'
}


