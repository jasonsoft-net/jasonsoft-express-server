/**
 * Example: https://github.com/jasonsoft-net/jasonsoft-express-server
 * FilePath: /jasonsoft-express-server/app.js
 * Added by Jason.Song (成长的小猪) on 2021/09/28
 * CSDN: https://blog.csdn.net/jasonsong2008
 * GitHub: https://github.com/jasonsoft-net
 * Organizations: https://github.com/jasonsoft
 */
import Express from 'express';
/**
 * Import the ControllerProvider from @jasonsoft/express-controller
 */
import { ControllerProvider } from '@jasonsoft/express-controller';

const app = new Express();
/**
 * Inject the controller directory
 */
ControllerProvider.initControllers({
  router: app,
  /** The default directory is './src/controllers' */
  dir: './app/controllers',
});

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

/** Service port */
const port = Number(process.env.PORT || 3000);

/** Listening port */
app.listen(port, () => {
  console.log(
    `[\x1B[36mRunning\x1B[0m] Application is running on: http://localhost:${port}`,
  );
});
