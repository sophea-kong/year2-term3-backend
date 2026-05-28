import express from 'express'
import {getAllcategories,getCategory,createCategory,updateCategory,deleteCategory} from '../controllers/categoryController.js'


const router = express.Router();
router.use(express.json());

router.get('/',(req,res)=>getAllcategories(req,res));
router.get('/:id',(req,res)=>getCategory(req,res));
router.post('/',(req,res)=>createCategory(req,res));
router.put('/:id',(req,res)=>updateCategory(req,res));
router.delete('/:id',(req,res)=>deleteCategory(req,res));

export default router;