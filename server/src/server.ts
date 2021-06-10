import * as express from 'express';
import * as cors from 'cors';
import router from './routes/router';
import databaseConnect from './config/database';

const app = express();

const PORT = 3001;

databaseConnect();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`);
});