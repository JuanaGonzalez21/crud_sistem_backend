import express from 'express';
import { createDato, deleteDato, getAllData, getDato, updateDato } from '../controllers/FormController.js';
const router = express.Router();

router.get('', getAllData)
router.post('/create', createDato)
router.get('/:id', getDato)
router.put('/:id',updateDato)
router.delete('/:id', deleteDato)

export default router;