const myModule = require('./modules/module'),
			newModule = require('./modules/newmodule');

const myModuleInstance = new myModule();
myModuleInstance.hello();
myModuleInstance.goodbye();

newModule();