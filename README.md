# DMP Tool JKU - Johannes Kepler University Linz

This project is based on the DAMAP frontend developed in cooperation between TU Wien and TU Graz but has been adapted to meet the specific needs of Johannes Kepler University Linz. The project uses [Angular](https://angular.io/) as its framework and relies on the standard Angular CLI as a build system.

For more information about the base DAMAP implementation, visit the [DAMAP frontend repository](https://github.com/tuwien-csd/damap-frontend).

### Development Server

To run the development server:

```bash
ng serve damap-frontend
```

This will start the dev server, and the app will be accessible at `http://localhost:4200/`. Any changes made to the source files will trigger automatic reloading.

### Build

To build the project for production:

```bash
ng build damap-frontend
```

The build artifacts will be stored in the `dist/` directory. Use the `--configuration=production` flag for a production build.

### Running Unit Tests

To run the unit tests:

- For the DAMAP library:

  ```bash
  ng test damap
  ```

- For the DMP Tool JKU frontend:

  ```bash
  ng test damap-frontend
  ```

### Running with Docker

To run the frontend and backend together in a dockerized setup, please refer to the [DMP Tool JKU backend repository](https://github.com/sharedRDM/damap-backend) for further instructions.

### Documentation

For more details, please refer to the [DMP Tool JKU Documentation](https://github.com/sharedRDM/dmp-jku-docs).

### Customisation

For customising the DMP Tool JKU frontend, please refer to the [CUSTOMISING](CUSTOMISING.md) page.
