// server.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
exports.app = app;
const port = 3001;

app.use(cors());

app.use(express.json({ limit: '32kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jaygovinda13@gmail.com',
    pass: 'c4p1t404m3r1c4',
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'jaygovinda13@gmail.com',
    to: 'juliano.amaral@icloud.com',
    subject: 'Contato Profissional',
    text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Erro ao enviar e-mail', error });
    }

    res.status(200).json({ message: 'E-mail enviado com sucesso!', info });
  });
});

app.listen(port, () => {
  console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});
