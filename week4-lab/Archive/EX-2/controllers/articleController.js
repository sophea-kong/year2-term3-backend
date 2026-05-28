import { articles } from "../models/data.js";

export function Getallarticles(req,res){
    return res.send(articles);
}

export function GetArticlesbyid(req,res){
    const id = req.params.id;
    let result = articles.filter(entry=>entry.id==id);
    if(result.length === 0){
        return res.sendStatus(404);
    }
    return res.send(result);
}

export function CreateArticles(req,res){
    const {title,content,journalistId,categoryId} = req.query;
    if (!title ||  !content || !journalistId || !categoryId){
        return res.sendStatus(400);
    }

    const new_art = {
        id : articles.length+1,
        title : title,
        content : content,
        journalistId : journalistId,
        categoryId : categoryId
    }

    articles.push(new_art);
    res.send(201);
}

export function updateArticles(req,res){
    const id = req.params.id;
    const {title,content,journalistId,categoryId} = req.query;
    const index = articles.findIndex(entry=>entry.id == id);
    articles[index].title = title;
    articles[index].content = content;
    articles[index].journalistId = journalistId;
    articles[index].categoryId = categoryId;
    res.sendStatus(200);
}


export function deleteArticles(req,res){
    const id = req.params.id;
    let index = articles.findIndex(entry=>entry.id == id);
    articles.splice(index,index+1);
    res.sendStatus(200);
}
