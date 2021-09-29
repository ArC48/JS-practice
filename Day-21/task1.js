class Validator{
    isEmail(mail){
        const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return mailRegex.test(String(mail));
    }

    isDomain(domain){
        const domainRegex = /[a-zA-Z0-9][a-zA-Z0-9-.]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
        return domainRegex.test(String(domain));
    }

    isDate(date){
        const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}$/;
        return dateRegex.test(String(date));
    }

    isPhone(phone){
        const phoneRegex = /^[\+]?[(]?[995]{3}[)]?[-\s\.]?[5-9]{3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}$/;
        return phoneRegex.test(String(phone));
    }
}

var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('https://www.messenger.com'));   //work with or without https
console.log(validator.isDate('12.05.2020'));   //also works with slashes 12/05/2020
console.log(validator.isPhone('+(995)558 12-93-36'));   //Georgian Format