# React Counter App

This project is a simple yet fun React-based counter application. It leverages the powerful features of React hooks, local storage and TypeScript. The application is built using the Vite bundler which makes the development process quick and efficient. 

The counter can be set to either have a limit or be unlimited. It can also be configured to only accept positive values. The current count is stored in the local storage of your browser, so your count won't be lost even if you refresh or close the tab!

## Features
1. Multiple counters with separate labels.
2. Optional limit for counters.
3. Option to allow/disallow negative numbers.
4. Reset functionality for each counter.
5. Persistent storage using local storage.
6. TypeScript type checking for props.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (version 12 or above)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) or [npm](https://www.npmjs.com/get-npm) (npm comes with Node.js)

### Installation

1. Clone the repository
    ```sh
    git clone https://github.com/j0sephh123/vite-counter-localstorage
    ```

2. Navigate into the project directory
    ```sh
    cd vite-counter-localstorage
    ```

3. Install the dependencies
    ```sh
    yarn
    # or with npm
    npm install
    ```

4. Start the project
    ```sh
    yarn dev
    # or with npm
    npm run dev
    ```

The project should now be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

- `App.tsx` - The entry point of our app. It contains two Counter components with different props.
- `components/Counter.tsx` - The Counter component. This component handles the UI for our counter.
- `useCounter.ts` - A custom hook which encapsulates the counter logic.
- `useLocalStorage.ts` - A custom hook for interacting with localStorage. It works just like `useState` but synchronizes the state with localStorage.
- `types.ts` - Contains TypeScript type definitions for our Counter component props.

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/yourusername/your-repo-name/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/yourusername/your-repo-name/blob/main/LICENSE.md) file for details.

---

We hope you enjoy this fun little project. Happy counting!

![Happy Counting!](happy_counting.gif)
