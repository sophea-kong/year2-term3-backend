import { categories } from "../models/data.js";

export function getAllcategories(req,res){
    return res.send(categories);
}

export function getCategory(req,res){
    const id = req.param.id;
    const result = categories.filter(entry=>entry.id==id);
    if (result.length == 0){
        return res.sendStatus(404);
    }
    return res.send(result).sendStatus(200);
}

export function createCategory(req,res){
    const {name} = req.body;
    const new_category = {id : categories.length+1,name:name};
    categories.push(new_category);
    return res.sendStatus(200);
}

export function updateCategory(req,res){
    const id = req.param.id;
    const {name}=req.body;
    if (!name){
        return res.send("please provide a name").sendStatus(400);
    }
    const index = categories.findIndex(entry=>entry.id==id);
    categories[name].name = name;
    return res.sendStatus(200);
}

export function deleteCategory(req,res){
    const id = req.body;
    const index = categories.findIndex(entry=>entry.id==id);
    if(index == -1){
        return res.sendStatus(404);
    }
    categories.splice(index,index+1);
    return res.sendStatus(200);
}