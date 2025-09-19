export const blockedTokens = ['awsuoDiAt6U4LR8j', 'lgtrdfhreedghtesghtss', ''];
export const texpereriv = '' //Уже, Скоро, ...

const badWords = ['говно', 'хейт', 'порно', 'Порно', '*', '"', "'", 'аноним', 'Аноним', 'admin', 'Админ', 'админ', 'Admin', 'moder', 'Moder', 'модер', 'Модер', 'модератор', 'Модератор', 'модерат', 'Продавец премиума', 'продавец премиума', 'Продавец Премиума', 'seller of premium', 'Seller of premium', 'Seller Of Premium', 'seller Of Premium', 'seller of Premium', 'seller of premium account', 'Seller of premium account', 'Seller Of Premium Account', 'seller Of Premium Account', 'seller of Premium Account', 'seller of premium Account'];
if (badWords.includes(localStorage.getItem('userName'))){
    alert(localStorage.getItem('lang') === 'ru' ? 'Заданное имя нарушает наши правила.\nПожалуйста задайте другое имя.' : 'The name you entered violates our rules.\nPlease enter a different name.')
    window.location.href = 'user_profile.html'
}