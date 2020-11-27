//IBAN validation
const IbanPattern = /^([A-Z]{2})(\d{2}\s?)(\d{4}\s?){4}\d{4}$/;

const IbanValues = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];


console.log("Validación del IBAN");
console.log("************************");

IbanValues.forEach(
    value => {
        console.log(`¿La expresión regular coincide con "${value}"? ${IbanPattern.test(value)}`);
        console.log("Código de páis: ", IbanPattern.exec(value)[1]);
        console.log("Dígito de control: ", IbanPattern.exec(value)[2]);
        console.log("----------------------------");
    }
)

//car registration validation
const carPattern = /^(\d{4})(\s|-)?([A-Z]{3})$/;

const carValues = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];


console.log("Validación matrícula de coche");
console.log("************************");

carValues.forEach(
    value => {
        console.log(`¿La expresión regular coincide con "${value}"? ${carPattern.test(value)}`);
        console.log("Parte numérica: ", carPattern.exec(value)[1]);
        console.log("Parte letras: ", carPattern.exec(value)[3]);
        console.log("----------------------------");
    }
)

//Extract the content of src in imag tags
const htmlPattern = /"((.+?)(.png|.jpg))"/g;

const htmlValues = 
`<html>
    <body>
        <img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
        <h1>ejemplo</h1>
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
    </body>
</html>`;


console.log("Extraer el contenido de src en un etiqueta img");
console.log("************************");

console.log(htmlValues.match(htmlPattern))

htmlValues.match(htmlPattern).forEach(
    value => {
        console.log(value);
    }
)
console.log("----------------------------");

//credit card number validation
const creditCardPattern = /^((5[0-5])\d{2})(\s|-)?(\d{5})(\s|-)?(\d{3})(\s|-)?(\d{3})$/;

const creditCardValues = ["5299 64000 000 000", "5299-64000-000-000", "529964000000000"];


console.log("Validación tarjeta de crédito");
console.log("************************");

creditCardValues.forEach(
    value => {
        console.log(`¿La expresión regular coincide con "${value}"? ${creditCardPattern.test(value)}`);
        console.log(creditCardPattern.exec(value)[1]);
        console.log(creditCardPattern.exec(value)[4]);
        console.log(creditCardPattern.exec(value)[6]);
        console.log(creditCardPattern.exec(value)[8]);
        console.log("----------------------------");
    }
)

//Check password strength
//source: https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
var mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

const passwordValues = ["aA7&", "Holacaralibro8", "1234abc", "0000"];


console.log("Fortaleza de una contraseña");
console.log("************************");

passwordValues.forEach(
    value => {
        console.log(`¿Es "${value}" una contraseña compleja? ${strongRegex.test(value)}`);
        console.log(`¿Es "${value}" una contraseña moderada? ${mediumRegex.test(value)}`);
        console.log("----------------------------");
    }
)
//URL validation
// source: https://regexr.com/39p0t
var urlPattern = /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/;
var urlValues = ["http://web5-site.com/directory", "https://fa-st.web9site.com/directory/file.filename", "website.com/?querystring", "http://website.c-om/directory"];


console.log("Validación de URL");
console.log("************************");

urlValues.forEach(
    value => {
        console.log(`¿Es "${value}" una URL válida? ${urlPattern.test(value)}`);
        console.log("----------------------------");
    }
)

//Hexadecimal color validation
//Source: https://www.geeksforgeeks.org/how-to-validate-hexadecimal-color-code-using-regular-expression/
var hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
var hexValues = ["#FFF", "#000", "#1AFFa1", "123456", "255, 0, 125", "#afafah", "#F00"];


console.log("Validación de color hexadecimal");
console.log("************************");

hexValues.forEach(
    value => {
        console.log(`¿Es "${value}" un color hexadecimal válido? ${hexPattern.test(value)}`);
        console.log("----------------------------");
    }
)