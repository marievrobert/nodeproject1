let http = require('http');
let url = require('url');
let querystring = require('querystring');

let server = http.createServer(function(req,res){
    let params = querystring.parse(url.parse(req.url).query); res.writeHead(200, {"Content-Type": "text/plain"});
    if ('prenom' in params && 'nom' in params) {
    res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    } else {
        res.write('Vous devez bien avoir un prénom et un nom, non ?');
    }
    
    /*let params = querystring.parse(url.parse(req.url).query);
    
    /*let page =url.parse(req.url).pathname;
    console.log(page);
    
    /*res.writeHead(200,{"Content-Type": "text/html"});
    
    res.write(
        '<!DOCTYPE html>'+
        '<html>'+
        ' <head>'+
        ' <meta charset="utf-8" />'+
        ' <title>Ma page Node.js !</title>'+
        ' </head>'+
        ' <body>'+
        ' <p>un paragraphe dans une page <strong>HTML</strong> !</p>'+ ' </body>'+
        '</html>');
        */
        
        /*res.writeHead(200,{"Content-Type": "text/plain"});
        if (page == '/') {
            res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');            
            }
        else if (page == '/sous-sol') {
            res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !'); 
        }
        else if (page == '/etage/1/chambre') {
            res.write('Hé ho, c\'est privé ici !'); 
        }
        else{
            //res.writeHead(404);
            res.write('cette page n\'éxiste pas'); 
        }
        */
        
    
        res.end();
    });

    server.on('close', function() { // On écoute l'évènement close
        console.log('Bye bye !'); })
        server.listen(8080); // Démarre le serveur
        server.close(); // Arrête le serveur. Déclenche l'évènement close

server.listen(8080);