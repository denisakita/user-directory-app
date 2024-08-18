# User Directory Application

## Objective

Create a simple Angular application that allows users to browse a list of users and view their details.

## Features

1. **User Page**

- Displays a list of users fetched from the Random User API.
- Each user card shows their name, email, thumbnail avatar, and other relevant information.
- Includes a search bar to filter users by name or email, with debounced input.
- Shows a “no results” component if no users match the search criteria.

2. **User Details Page**

- Clicking on a user navigates to a details page showing their full profile information including name, email, phone number, full-size avatar, etc.

## Technologies

- **Angular**: v18.2.0
- **Angular Material**: v17.1.2
- **RxJS**: v7.8.0
- **TypeScript**: v5.5.2
- **SCSS**: For styling

## Project Structure

```
src/
  app/
    user/
      components/
      models/
      services/
      user-routing.module.ts
      user.module.ts
    home/
      components/
      home.module.ts
      home-routing.module.ts
    shared/
      material.module.ts
    app.component.html
    app.component.scss
    app.component.ts
    app.config.ts
    app.routes.ts
  assets/
  environments/
  index.html
  main.ts
  styles.scss

```

## Installation and Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd user-directory-app
   ```

2. **Install Dependencies**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then run:

   ```bash
   npm install
   ```

3. **Run the Application**

   Start the development server with:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:4200`.

4. **Build the Application**

   To build the project for production, run:

   ```bash
   npm run build
   ```

5. **Run Tests**

   To execute the unit tests:

   ```bash
   npm test
   ```

## Design and Responsiveness

- The application is styled using SCSS.
- Responsive design considerations are applied to ensure proper display on various screen sizes.


