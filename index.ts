import { Person } from './person';

import * as express from 'express';

const app: express.Application = express();

app.get('/', (req: express.Request, res: express.Response) => {
  const basti = new Person('Basti', 'Springer');
  res.send('Hello ' + basti.getFullName());
});

app.listen(8080, () => console.log('listening to http://localhost:8080'));