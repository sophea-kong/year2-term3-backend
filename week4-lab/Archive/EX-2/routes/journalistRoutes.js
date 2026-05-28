import express from 'express'
import {getAllJournalist,getJournalistByid,createJournalist,updateJournalist,deleteJournalist} from '../controllers/journalistController.js'
import { Getallarticles } from '../controllers/articleController.js';

const router = express.Router();
router.use(express.json());

router.get('/',(req,res)=>Getallarticles(req,res));
router.get('/:id',(req,res)=>getJournalistByid(req,res));
router.post('/',(req,res)=>createJournalist(req,res));
router.put('/:id',(req,res)=>updateJournalist(req,res));
router.delete('/:id',(req,res)=>deleteJournalist(req,res));

export default router;