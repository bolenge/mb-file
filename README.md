## mb-file

Le module JavaScripts de teste d'existance d'un fichier quelconque

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