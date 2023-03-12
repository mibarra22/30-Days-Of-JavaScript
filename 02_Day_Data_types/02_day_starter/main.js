// this is your main.js script
//EJERCICIOS NIVEL 1

    // 1)Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript' .-->
    //2)Imprime la cadena en la consola del navegador usando console.log()-->
    //3)Imprime la longitud de la cadena en la consola del navegador usando console.log()-->
    //4)Cambie todos los caracteres de la cadena a letras mayúsculas usando el método toUpperCase()-->
    //5)Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()-->
    //6)Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()-->
    //substr(): Se necesitan dos argumentos, el índice de inicio y el número de caracteres para dividir.-->
    //7)Corta la frase Days Of JavaScript de 30 Days Of JavaScript .-->
    //8)Verifique si la cadena contiene una palabra Script usando el método include ()-->
    //9)Divida la cadena en una matriz usando el método split ()-->
    //10)Divida la cadena 30 días de JavaScript en el espacio usando el método split ()-->
    
        let desafio = '30 días de JavaScript';
        console.log(desafio); //Imprime la cadena
        console.log(desafio.length);//Imprime la longitud 
        console.log(desafio.toUpperCase())//Cambiar a mayusc
        console.log(desafio.toLowerCase())//Cambiar a minusc
        console.log(desafio.substr(0, 2))//método substr()
        console.log(desafio.substr(2, 20))// Corta la frase
        console.log(desafio.includes('Script'))//método include ()
        console.log(desafio.split())//método split ()
        console.log(desafio.split(" "))
    


    //11)Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y la cambia a una matriz.-->
    
        let desafio2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
        console.log(desafio2.split(" "))
   
    //12)Cambie 30 días de JavaScript a 30 días de Python usando el método replace() .-->
    //toma como parámetro la subcadena antigua y una nueva subcadena.-->
   
        let desafio3 = '30 días de JavaScript';
        console.log(desafio3.replace('JavaScript', 'Python'))
     
    //13)¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt() .-->
    //14)¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()-->
    
    console.log(desafio.charCodeAt('J'));
   
    //15)Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript-->
    
    console.log(desafio.indexOf('a'));
    
    //16)Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.-->
    
    console.log(desafio.lastIndexOf('a'));
    
    //17)Use indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 'No
    //puede terminar una oración con porque porque porque es una conjunción'-->
    
    
    console.log( 'No puede terminar una oración con porque porque porque es una conjunción'.indexOf('porque'));
    
    //18)Use lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:
    //puede terminar una oración con porque porque porque es una conjunción'-->
    
    console.log('No puede terminar una oración con porque porque porque es una conjunción'.lastIndexOf('porque'));
    
    //19)Use la búsqueda para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 'No
    //puede terminar una oración con porque porque porque es una conjunción'-->
   
    console.log('No puede terminar una oración con porque porque porque es una conjunción'.search('porque'))

    
    //20)Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30
    //días de JavaScript'.-->
   
    console.log(' 30 días de JavaScript '.trim())
   
    //21)Use el método beginWith() con la cadena 30 Days Of JavaScript y haga que el resultado sea verdadero-->
   
    console.log(desafio.startsWith("30")); // sirve para que si la oracion comienza por algo
    
    //22)Use el método EndsWith() con la cadena 30 Days Of JavaScript y haga que el resultado sea verdadero
    
    console.log(desafio.endsWith("ipt")); // igual que el anterior pero la parte final
   
    //23)Use el método match() para encontrar todas las a en 30 días de JavaScript
    
    let patter = /a/gi;

    console.log(desafio.match(patter))
    
    //24)Use concat() y combine '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'-
   
    let concatenar = ''
    console.log(concatenar.concat('30 dias de ', 'Javascript'))
    

    //25)Utilice el método repeat() para imprimir 30 días de JavaScript 2 veces-->
    
    console.log(desafio.repeat(2))
   