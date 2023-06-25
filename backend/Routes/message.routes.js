const express = require('express');
const { MessageModel } = require('../Model/message.model');
//const { Mess } = require('../model/posts.model');

const messageRoutes = express.Router();


messageRoutes.post('/add', async (req, res) => {
    try {
        const note = new MessageModel(req.body)
        await note.save();
        res.json({ msg: 'New note has added ', note: req.body });
    } catch (error) {
        res.json({ error: error.message });
    }
})

messageRoutes.get('/', async (req, res) => {
    try {
        let note = await MessageModel.find();
        res.send(note);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// messageRoutes.patch("/update/:noteID", async (req, res) => {
//     const userIDinUserDoc = req.body.userID;
//     const { noteID } = req.params;
//     const note = await NoteModel.findOne({ _id: noteID });
//     const userIDinNoteDoc = note.userID;
//     try {
//         if (userIDinUserDoc === userIDinNoteDoc) {
//             // update
//             await NoteModel.findByIdAndUpdate({ _id: noteID }, req.body);
//             res.json({ msg: `${note.title} has been updated` })
//         }
//         else {
//             res.json({ msg: "Not Authorized" });
//         }
//     } catch (error) {
//         res.json({ error: error.message });
//     }
// })

// messageRoutes.delete('/delete/:noteID', async (req, res) => {
//     const userIDinUserDoc = req.body.userID;
//     const { noteID } = req.params;
//     const note = await NoteModel.findOne({ _id: noteID });
//     const userIDinNoteDoc = note.userID;
//     try {
//         if (userIDinUserDoc === userIDinNoteDoc) {
//             // update
//             await NoteModel.findByIdAndDelete({ _id: noteID });
//             res.json({ msg: `${note.title} has been deleted` })
//         }
//         else {
//             res.json({ msg: "Not Authorized" });
//         }
//     } catch (error) {
//         res.json({ error: error.message });
//     }
// })

module.exports = {messageRoutes};