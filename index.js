const fs = require("fs");

/**
 * Vérifie si le fichier dont la source est passée en paramètre existe ou pas
 * @param {String} source La source du fichier à vérifier
 * @param {Function} callback
*/
exports.verify = (source, callback) => {
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

/**
 * Renvoi l'extension d'un fichier
 * @param {String} source La source du fichier en question
 * @returns {String} file_extension
 */
exports.getFileExtension = (source) => {
    let array = source.split('.');
    let length = array.length;
    
    return '.'+array[length - 1];
}