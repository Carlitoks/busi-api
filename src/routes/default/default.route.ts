import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'ExpressJS, Typescript, TypeORM, pg' });
});

export default router;
