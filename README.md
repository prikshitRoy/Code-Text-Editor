# Monaco Editor Example with React + Vite

### I used this video:

[Build a Code Text Editor in React in 10 Minutes (Syntax Highlighting, Dark Theme)](https://www.youtube.com/watch?v=WiacAGLd9so)

`npm create vite@latest code-text-editor -- --template react`

`npm install @monaco-editor/react`

Start dev: `npm run dev`

## 1. Be able to change from 1 file to next

Every single file have three different things: `A file path (name)`, `language` and `default value`

## 2. Geting the value of the Monaco editor

- Passing Monaco editor value to handleEditorDidMount function when Editor Mounts.
- Getting Monaco editor value with getEditorValue fuction with Get Editor Value button.
