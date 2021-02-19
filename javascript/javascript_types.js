console.log("----------------------------------------------------");
       var a;
       typeof a;

       var b = 42;
       console.log(`b = ${b} \ntypeof(b): ${typeof(b)}`);
       
       var c ;
       console.log(`c = ${c} \ntypeof(c): ${typeof(c)}`);
       //later

       b = c;
       console.log("b = c;");
       console.log(`b = ${b} \ntypeof(b): ${typeof(b)}`);
       console.log(`c = ${c} \ntypeof(c): ${typeof(c)}`);

       console.log("----------------------------------------------------");

       console.log(`Here's a list of the most commonly used natives:`);
       console.log(`String() Number() Boolean() Array() Object() Date() Error() Symbol()`);

       var a = new String("abc");
       console.log(`a = ${a} \ntypeof(a): ${typeof(a)}`);
       console.log(`a = ${a} \na instanceof String: ${a instanceof String}`);
       console.log(`a = ${a} \nObject.prototype.toString.call(a): ${Object.prototype.toString.call(a)}`);