// import {default as myModule} from './modules/mymodule'; // Явная запись import default as myModule (синтаксис переименования) изнутри
import myModule from './modules/mymodule'; // Но используется сокращенная запись import default


import * as data from './modules/mymodule'; // import всего, как объекта data, из модуля
data.hello();


const myModuleInstance = new myModule();
myModuleInstance.hello();
myModuleInstance.goodbye();


import newmodule from './modules/newmodule';
newmodule();


import {one, two, hello} from './modules/mymodule'; // деструктуризация объекта
console.log(one, two);
hello();
