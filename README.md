# Employee Management System

This project is an Employee Management System built using Next.js (version 13) with TypeScript, GraphQL via Apollo Client, and styled with Tailwind CSS. The application allows users to view, add, update, and delete employee records.

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x.x)
- npm (>= 6.x.x) or yarn

### Clone the repository

```bash
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
```

### Install dependencies

```bash
npm install
```

or if you prefer using yarn:

```bash
yarn install
```

### Running the Project Locally

Start the development server:

```bash
npm run dev
```

or if you prefer using yarn:

```bash
yarn dev
```

The application should now be running at http://localhost:3000.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

or with yarn:

```bash
yarn build
```

After building, you can start the production server:

```bash
npm start
```

or with yarn:

```bash
yarn start
```

## Project Structure

- `pages/`: Contains the Next.js pages.
- `components/`: Reusable React components.
- `lib/`: Contains GraphQL queries and mutations.
- `styles/`: Global styles and Tailwind CSS configuration.

## Deployment

This project is deployed using Vercel. To deploy your own version:

1. Create a Vercel account: Vercel Signup
2. Import your project: From the Vercel dashboard, click "New Project" and import your repository.
3. Configure the project: Set up environment variables if needed.
4. Deploy: Vercel will automatically build and deploy your project.

The deployed application can be accessed at https://x-next-frontend.vercel.app/.

## Notes

Because the API Gateway did not apply SSL, you should allow `Insecure content` on your browser setting to access this page.
