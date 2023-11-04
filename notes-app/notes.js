const chalk = require('chalk')
const fs = require('fs')

// ES6 - Arrow Function - short hand format
const getNotes = () => {
    return 'Your notes ...'
}

// addNote ES6 - Arrow Function 
const addNote = (title,body)=>{
    
    const notes = loadNotes()

    duplicateNote = notes.find((note) => note.title === title)
    
    if (!duplicateNote){
        notes.push({
            'title':title,
            'body':body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added!'))
    
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

// removeNote ES6 - arrow function
const removeNote = (title) => {
    const notes = loadNotes()

    notesToKeep = notes.filter((note) => note.title !== title) 
        
    if (notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed'))
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.blue('Your Notes'))
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title) =>{
    const notes = loadNotes()
    const wantedNote = notes.find((note)=>note.title === title)
    if(wantedNote){
        console.log(chalk.blue.inverse(wantedNote.title))
        console.log(wantedNote.body)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}
// saveNotes ES6 - arrow function
const saveNotes = (notes) => { 
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}

// loadNotes ES6 arrow function
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        const notes = JSON.parse(dataJSON)
        return notes
    } catch (e) {

        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote : addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote: readNote
}