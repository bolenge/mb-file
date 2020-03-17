const fs = require("fs");

/**
 * Module permettant de trouvé un fichier si cela existe
 * @param {String} source La source du fichier qu'on veut trouvé l'existence
 * @param {Function} callback La fonction de retour, nous spécifiant si le fichier existe ou pas 
*/
module.exports.verify = (source, callback) => {
    try {
        if (source) {
            fs.stat(source, (err, stats) => {
                if (!err) {

                    var detailsFile = {
                        "created_at": stats.ctime,
                        "modified_at": stats.mtime,
                        "last_access_at": stats.atime,
                        "size": stats.size
                    }
                    callback(true, "Le fichier existe...", detailsFile)
                } else {
                    callback(false, "Le fichier n'existe pas dans le repertoire '" + err.path + "'")
                }
            })
        } else {
            callback(false, "La source n'a pas été spécifié")
        }

    } catch (exception) {
        callback(false, "Une exception a été lévée : " + exception)
    }
}