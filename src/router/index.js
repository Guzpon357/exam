import { AuthRouter,TestRouter, SongsRouter} from "../components";
const listRoutes = [["/test", TestRouter],["/auth",AuthRouter],["/song",SongsRouter]];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
