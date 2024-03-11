const Router = require('koa-router');
const { v4 } = require('uuid');
const notes = require('../../db/notes');

const router = new Router();

router.post('/notes', async (ctx) => {    
    notes.addNote({ content: ctx.request.body, id: v4() });

    ctx.response.status = 200;
});

router.get('/notes', async (ctx) => {
    const result = notes.getList();

    ctx.response.body = result;
    ctx.response.status = 200;
});

router.delete('/notes/:id', async (ctx) => {
    const { id } = ctx.params;

    notes.delNote(id);

    ctx.response.status = 200;
})

module.exports = router;
