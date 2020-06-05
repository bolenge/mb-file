## mb-file

Module Javascript manipulant les fichiers

## Installation

`npm install --save mb-file`

## API

### mbFile.verify(source, callback)

Vérifie si le fichier dont la source est passée en paramètre existe ou pas.

* `source` : Source La source du fichier à vérifier
* `callback(exists, message, fileDetails)`
	* `exists` : `Boolean` true si le fichier, et false dans le cas contraire
	* `message` : Le message renvoyer
	* `fileDetails` : Le détail du fichier trouvé

Exemple
```js
var mbFile = require("mb-file");

mbFile.verify("public/images/abcd.jpg", (exists, message, fileDetails) => {

    if (exists) {
    	console.log(details);
    }else {
    	console.log(message);
    }
})
```

### getFileExtension(source)

Renvoi l'extension d'un fichier

* `source` : La source La source du fichier

Exemple
```js
const { getFileExtension } = require('mb-file');

console.log(getFileExtension('public/images/photo.png')); //.png
```