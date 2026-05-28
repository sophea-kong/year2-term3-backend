import express from 'express';
import {GetArticlesbyid,Getallarticles,deleteArticles,CreateArticles,updateArticles} from '../controllers/articleController.js'

const router = express.Router();
router.use(express.json());

router.get('/',(req,res)=>Getallarticles(req,res));
router.get('/:id',(req,res)=>GetArticlesbyid(req,res));
router.post('/',(req,res)=>CreateArticles(req,res));
router.put('/:id',(req,res)=>updateArticles(req,res));
router.delete('/:id',(req,res)=>deleteArticles(req,res));

export default router;
