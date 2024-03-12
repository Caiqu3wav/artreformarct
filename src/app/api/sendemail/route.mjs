import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/sendemail', async (req, res) => {
    const { nome,
        email,
        numeroCelular,
        cep,
        numeroComplemento,
        precisaDe,
        servicoPara,
        local,
        situacaoLocal,
        inicioServico,
        temProjeto,
        servicosNecessarios,
        metragemTotal,
        ambientesTrabalhados,
        mensagem } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Por exemplo, 'gmail', 'hotmail', etc.
            auth: {
                user: 'process.env.EMAILSENDER',
                pass: 'process.env.PASSEMAILSENDER'
            }
        });
    
        const mailOptions = {
            from: 'process.env.EMAILSENDER',
            to: 'prodfsho777@gmail.com',
            subject: 'Orçamento de reforma pedido pelo site',
            text: `
                Nome: ${nome}
                Email: ${email}
                Número de Celular: ${numeroCelular}
                CEP: ${cep}
                Número e Complemento do Local: ${numeroComplemento}
                Precisa de: ${precisaDe}
                Serviço Para: ${servicoPara}
                Local: ${local}
                Situação do Local: ${situacaoLocal}
                Início do Serviço: ${inicioServico}
                Tem Projeto: ${temProjeto}
                Serviços Necessários: ${servicosNecessarios.join(', ')}
                Metragem Total: ${metragemTotal}
                Ambientes Trabalhados: ${ambientesTrabalhados.join(', ')}
                Mensagem: ${mensagem}
            `
        };
    
        // Enviar o e-mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erro ao enviar e-mail:', error);
                res.status(500).send('Erro ao enviar e-mail');
            } else {
                console.log('E-mail enviado:', info.response);
                res.status(200).send('E-mail enviado com sucesso');
            }
        });
    });
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));