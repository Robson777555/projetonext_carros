"use client";

import React, { useState } from "react";
import "./form.css"; // Importa o CSS personalizado

const WHATSAPP_NUMBER = "5551996940564";

interface FormErrors {
  nome?: string;
  email?: string;
  assunto?: string;
  mensagem?: string;
}

export default function FormularioContato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "nome":
        if (!value.trim()) return "Nome é obrigatório";
        return "";
      case "email":
        if (!value.trim()) return "E-mail é obrigatório";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "E-mail inválido";
        return "";
      case "assunto":
        if (!value.trim()) return "Assunto é obrigatório";
        return "";
      case "mensagem":
        if (!value.trim()) return "Mensagem é obrigatória";
        return "";
      default:
        return "";
    }
  };

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const allTouched = { nome: true, email: true, assunto: true, mensagem: true };
    setTouched(allTouched);

    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus("idle");
      return;
    }

    try {
      // Enviar email automaticamente
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Abrir WhatsApp manual
        const { nome, email, assunto, mensagem } = formData;
        const whatsappText = encodeURIComponent(
          `🚗 *Nova Mensagem de Contato - Site de Carros*\n\n` +
          `👤 *Nome:* ${nome}\n` +
          `📧 *Email:* ${email}\n` +
          `📝 *Assunto:* ${assunto}\n\n` +
          `💬 *Mensagem:*\n${mensagem}`
        );
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;
        
        // Abrir WhatsApp em nova aba
        window.open(whatsappUrl, "_blank");

        setStatus("success");
        setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
        setTouched({});
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus("error");
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* Cabeçalho do Formulário */}
        <div className="form-header">
          <h2 className="form-title">Entre em Contato</h2>
          <p className="form-subtitle">Ficaremos felizes em ouvir você</p>
        </div>

        {/* Nome */}
        <div className="form-group">
          <label className="form-label">Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-input"
            placeholder="Seu nome completo"
          />
          {errors.nome && touched.nome && (
            <p className="form-error">{errors.nome}</p>
          )}
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-input"
            placeholder="seu.email@example.com"
          />
          {errors.email && touched.email && (
            <p className="form-error">{errors.email}</p>
          )}
        </div>

        {/* Assunto */}
        <div className="form-group">
          <label className="form-label">Assunto</label>
          <input
            type="text"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-input"
            placeholder="Qual é o assunto?"
          />
          {errors.assunto && touched.assunto && (
            <p className="form-error">{errors.assunto}</p>
          )}
        </div>

        {/* Mensagem */}
        <div className="form-group">
          <label className="form-label">Mensagem</label>
          <textarea
            name="mensagem"
            rows={4}
            value={formData.mensagem}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-textarea"
            placeholder="Escreva sua mensagem aqui..."
          />
          {errors.mensagem && touched.mensagem && (
            <p className="form-error">{errors.mensagem}</p>
          )}
        </div>

        {/* Linha divisória */}
        <div className="form-divider"></div>

        {/* Botão */}
        <div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="form-button"
          >
            {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </div>

        {/* Mensagens de status */}
        {status === "success" && (
          <div className="form-success">
            ✓ Mensagem enviada com sucesso!
          </div>
        )}

        {status === "error" && (
          <div className="form-error-message">
            ✗ Erro no envio. Tente novamente.
          </div>
        )}
      </form>
    </div>
  );
}