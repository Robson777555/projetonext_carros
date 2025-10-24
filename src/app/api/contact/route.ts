import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuração do transporter de email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'robsonjobim2018@rede.ulbra.br',
    pass: process.env.EMAIL_PASSWORD, // Configure esta variável de ambiente
  },
});

// Função para enviar mensagem via WhatsApp Business API
async function sendWhatsAppMessage(nome: string, email: string, assunto: string, mensagem: string) {
  const whatsappToken = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  const yourPhoneNumber = '5551996940564'; // Seu número de WhatsApp

  if (!whatsappToken || !phoneId) {
    console.log('WhatsApp Business API não configurada');
    return;
  }

  const message = `🚗 *Nova Mensagem de Contato - Site de Carros*\n\n` +
    `👤 *Nome:* ${nome}\n` +
    `📧 *Email:* ${email}\n` +
    `📝 *Assunto:* ${assunto}\n\n` +
    `💬 *Mensagem:*\n${mensagem}`;

  try {
    const response = await fetch(`https://graph.facebook.com/v18.0/${phoneId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${whatsappToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: yourPhoneNumber,
        type: 'text',
        text: {
          body: message
        }
      })
    });

    if (!response.ok) {
      console.error('Erro ao enviar WhatsApp:', await response.text());
    }
  } catch (error) {
    console.error('Erro na API do WhatsApp:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { nome, email, assunto, mensagem } = await request.json();

    // Validação dos dados
    if (!nome || !email || !assunto || !mensagem) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Configuração do email
    const mailOptions = {
      from: 'robsonjobim2018@rede.ulbra.br',
      to: 'robsonjobim2018@rede.ulbra.br',
      subject: `🚗 Contato Site: ${assunto}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            🚗 Nova Mensagem de Contato - Site de Carros
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>👤 Nome:</strong> ${nome}</p>
            <p style="margin: 10px 0;"><strong>📧 Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>📝 Assunto:</strong> ${assunto}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">💬 Mensagem:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${mensagem}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 8px;">
            <p style="margin: 0; color: #0066cc; font-size: 14px;">
              📅 Enviado em: ${new Date().toLocaleString('pt-BR')}
            </p>
          </div>
        </div>
      `,
    };

    // Envio do email
    await transporter.sendMail(mailOptions);

    // Envio via WhatsApp Business API
    await sendWhatsAppMessage(nome, email, assunto, mensagem);

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
