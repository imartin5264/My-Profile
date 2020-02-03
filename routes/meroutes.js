const express = require('express');
const router = express.Router();



router.get('/me', (req, res) => {
    res.render('me.ejs');
});

router.get('/me/skills', (req, res) => {
    res.render('skills.ejs');
});

router.get('/me/projects', (req, res) => {
    res.render('projects.ejs');
});

router.get('/me/contactinfo', (req, res) => {
    res.render('contact.ejs');
});

router.get('/me/resume', (req, res) => {
    res.render('resume.ejs');
});

module.exports = router;