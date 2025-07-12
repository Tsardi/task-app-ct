# Task Management app

## Features
- user authentication with Auth0
- Protecte routes for authenticated users
- add, edit, and delete tasks
- Tasks are saved in local storage
- React Bootstrap

  ### Getting started
  #### prereq
  - [node.js]
  - [npm]

  ###installation
  1. Clone the repository:
    ```sh
    git clone https://github.com/Tsardi/task-app-ct.git
    cd ct-task-app
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Configure Auth0:
    - Update the Auth0 domain, client ID, and callback/logout URLs in [`src/auth/Auth0Provider.tsx`](src/auth/Auth0Provider.tsx) if needed.

### Running the App

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/`
  - `auth/` – Auth0 integration and authentication guards
  - `components/` – UI components (task dashboard, forms, navigation, etc.)
  - `interfaces/` – TypeScript interfaces
  - `App.tsx` – Main app with routing
  - `main.tsx` – Entry point

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Lint code
