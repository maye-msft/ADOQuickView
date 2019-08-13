
exports.__esModule = true;




function startWebApp() {
    const express = require("express");
    // const textanalysis = require("./srv/textanalysis");
    const bodyParser = require('body-parser');
    const { NerManager } = require('node-nlp');
    const connection_1 = require("./ado/connection");

    const fs = require('fs');
    const dotenv_1 = require("dotenv");
    const path_1 = require("path");
    dotenv_1.config({ path: path_1.resolve(__dirname, "./.env.ado") });
    const queryHelper = new connection_1.QueryHelper(process.env.ADO_TOKEN, "CSEng");
    const app = express();
    app.use('/public', express.static(__dirname +'/static'))
    app.use('/ado_data', express.static(__dirname +'/ado_data'))
    app.use('/node_modules', express.static(__dirname +'/node_modules'))
    app.use(bodyParser.json());
    app.get('/get', function(req, res){
        res.send('get')
    });

    app.post('/post', function(req, res){
        res.send('post')
    });

    app.post('/queryworkitem', function(req, res){
        let industry = req.body.industry;
        let startDay = req.body.startDay;
        let endDay = req.body.endDay;
        queryHelper.loadParticipantByIndustry(industry, startDay, endDay).then(function (result) {
            // write to a new file named 2pac.txt
            fs.writeFile('ado_data/results.js', `var result_objects=${JSON.stringify(result, null, 4)}`, (err) => {
                // throws an error, you could also catch it here
                if (err) throw err;
                fs.writeFile('ado_data/result_items.js', `var result_items=[];\n`, (err) => {
                    if (err) throw err;
                    res.send(result)
                });
                
            });
            
        });
    })

    app.post('/loadworkitem', function(req, res){
        let id = req.body.id;
        queryHelper.loadWorkItem(id).then(function (result) {
            res.send(result)
        });
    })

    app.post('/loadworkitems', function(req, res){
        let ids = req.body.ids;
        queryHelper.getWorkItems(ids).then(function (result) {
             fs.appendFile('ado_data/result_items.js', `result_items = result_items.concat(${JSON.stringify(result, null, 4)})\n`, (err) => {
                if (err) throw err;
                res.send(result)
            });

            // fs.readFile(filename, "utf8", function(err, data) {
            //     if (err) throw err;
            //     resp.write(data);
            //     resp.end();
            //   });
        });
    })

    // app.post('/textanalysis', function(req, res){
    //     console.log(req.body);
        
    //     if(req.body.documents) {
    //         var entities = {}
    //         var key_phrases = {}
    //         textanalysis.get_entities(req.body.documents, (result1)=>{
    //             entities = JSON.parse(result1);
    //             textanalysis.get_key_phrases(req.body.documents, (result2)=>{
    //                 key_phrases = JSON.parse(result2)
    //                 res.json({
    //                     entities:entities,
    //                     key_phrases:key_phrases
    //                 })
    //             },(error)=>{
    //                 res.json(error)
    //             })
    //         },(error)=>{
    //             res.json(error)
    //         })

            
    //     } else {
    //         res.json({
    //             entities:{},
    //             key_phrases:{}
    //         })
    //     }
    // });


    app.post('/extractentity', function(req, res){
        if(manager==null) {
            manager = buildNLPModel(req.body.entities)
        }
        
        if(req.body.text) {
            manager.findEntities(
                req.body.text,
                'en',
            ).then(entities => {
                res.json({
                    entities:entities,
                })
            })
        } else {
            res.json({
                entities:[]
            })
        }
    });
    let manager = null;
    app.post('/build', function(req, res){
        if(req.body.entities) {
            manager = buildNLPModel(req.body.entities)
            res.json({status:0})
        } else {
            res.json({status:1})
        }
    });

    function buildNLPModel(entities, size) {
        var manager = new NerManager({ threshold: 0.8 })

            entities.forEach(function (ent) {
                var keywords = ent.keywords.split("\n");
                for (var i = 0; i < keywords.length; i++) {
                    keywords[i] = keywords[i].trim();
                }
                manager.addNamedEntityText(
                    ent.name,
                    ent.name,
                    ['en'],
                    keywords
                );
            })
           
        
        return manager
    }



    app.listen(3000)
}
module.exports = startWebApp

