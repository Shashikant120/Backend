let path=require('path');
let fs=require('fs');
let mainfile=require('../util/path');

module.exports=class product{
    constructor(title){
        this.title=title;
    };
    save(){
        const p=path.join(mainfile,'data','products.json');
        fs.readFile(p,(err,fileContent)=>{
           
            let products=[];
            if(!err){
                products=JSON.parse(fileContent);
            };
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });

    };

    static fetchAll(cb){
        const p=path.join(mainfile,'data','products.json');
        fs.readFile(p,(err,fileContent)=>{
            if(err){
               return cb([]);
            }
           cb(JSON.parse(fileContent));
        })
    };
}