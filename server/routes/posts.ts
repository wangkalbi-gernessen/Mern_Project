import express from 'express';
import { getPosts } from '../controllers/posts';

const router = express.Router();

// localhos/5000/posts 
router.get('/', getPosts);

export default router;