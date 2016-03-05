// express-uncapitlize
// Copyright (c) 2012 Jamie Steven, jamiesteven on github.
// Licensed under MIT

module.exports = function(ignore){
    if(ignore){
        return function(req, res, next){
            if(ignore(req)){
                next();
            }else{
                if(/[A-Z]/.test(req.url)){
                    res.redirect(301, req.url.toLowerCase());
                }else{
                    next();
                }
            }
        };
    }else{
        return function(req, res, next){
            if(/[A-Z]/.test(req.url)){
                res.redirect(301, req.url.toLowerCase());
            }else{
                next();
            }
        };
    }
};
