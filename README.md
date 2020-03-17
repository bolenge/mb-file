## mb-file

Module Javascript manipulant les fichiers

## Installation

`npm install --save mb-file`

Example d'utilisation

```js
var mbFile = require("mb-file");

mbFile.verify("public/images/abcd.jpg", (isSet, message, details) => {

    let objetRetour = {};

    objetRetour.getEtat = isSet;
    objetRetour.getMessage = message;
    objetRetour.getObjet = details;

    res.send(objetRetour);

})
```