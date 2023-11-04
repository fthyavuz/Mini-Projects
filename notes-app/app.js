
const notes = require('./notes.js')
const yargs = require('yargs')


// Custumize yargs version
yargs.version('1.1.0')

// add, remove,read,list

// Create add command
yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title:{
            describe:'Title of note',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Title of body',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

// Create remove command
yargs.command({
    command:'remove',
    describe:'Remove the note',
    builder:{
        title:{
            describe : 'Title of note',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }    
})

// Create list command
yargs.command({
    command:'list',
    describe:'List notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()