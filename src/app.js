require('dotenv').config();
import { app } from './server';
import rutas from './routes';

app.use(`/${process.env.APP}`, rutas);

app.use(`/`, (req, res) => {
    console.log(req.body)
    res.json({ msg: 'la app esta corriendo' })
});





app.listen(app.get('port'), () => {
    console.log(`Example app listening at http://localhost:${app.get('port')}`)
})