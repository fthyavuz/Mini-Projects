# What does notes-app?

Notes-app allow you add, remove, read and list your notes via command line.

## Goal

I wanted to start learning node.js with this simple application. This application getting from named [The Complete node.js developer course](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/) on [udemy.com.](https://www.udemy.com/)

it provided to me

- Basic javascript info
- Interact with command line
- Interact with file system,
- Usage of  es6 javascript
- Usage of third party package

## Description

It has three main file respectively app.js, notes.js, notes.json. Also user's notes was stored with a json file. Notes-app has two different third party package named [yargs(17.2.1)](https://www.npmjs.com/package/yargs) and [chalk(4.1.2)](https://www.npmjs.com/package/chalk)

## Why was used yargs and chalk

When a user add a note, he/she should write below command
`node app.js add --title="Title Of Note" --body = "Body Of Note"`\
Yargs helps us to parsing above arguments.\
After a user run the command, code return back  a message related the result of process to him/his on terminal.Chalk provide us for styling these terminal messages.\

app.js includes yargs commands.Eeach command has a handler function. Theese functions are in notes.js.notes.json use for storing  user's notes.

## Installation

After download the project, for install dependencies\
`npm install`\
If you don't want to use example notes in notes.json. You can delete this file. When the program runs, automatically created new a notes.json file.
There is not any other dependencies

## Usage

To test everything is ok, you should run\
`node app.js help`\
This provide some info to you how can you use this program.\
to add note\
`node app.js add --title="title of note --body="body of note"`\
to remove the note\
`node app.js remove --title="title which you want to remove"`\
to read the note\
`node app.js read --title="title which you want to read"`\
to list notes\
`node app.js list`
