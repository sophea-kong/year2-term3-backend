import { journalists } from "../models/data.js";

export function getAllJournalist(req,res){
    return res.send(articles);
}

export function getJournalistByid(req,res){
    const id = req.params.id;

    const result = journalists.filter(entry=>entry.id == id);
    if (result.length == 0) return res.sendStatus(404);
    return res.send(result);
}

export function createJournalist(req,res){
    const {name,email} = req.body;
    if(!name || !email){
        return res.sendStatus(400);
    }
    const new_journalist = {id : journalists.length +1 ,name : name,email : email};
    journalists.push(new_journalist);
    res.sendStatus(201);
}

export function updateJournalist(req,res){
    const id = req.params.id;
    const {name,email}= req.body;
    const index = journalists.findIndex(entry=>entry.id == id);
    journalists[index].name = name;
    journalists[index].email = email;
    res.sendStatus(200);
}

export function deleteJournalist(req,res){
    const id = req.params.id;
    let index = journalists.findIndex(entry=>entry.id ==id);
    if(index == -1){
        return res.sendStatus(404);
    }
    journalists.splice(index,index+1);
    res.sendStatus(200);
}

