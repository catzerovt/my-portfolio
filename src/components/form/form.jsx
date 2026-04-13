import { useState } from "react";
import { InputField } from "./input-field";
import { useInputRef } from "../../hooks/use-input-ref";
import emailjs from "@emailjs/browser";
import styles from "./form.module.css";
import confetti from "canvas-confetti";

export function Form() {
  const name = useInputRef();
  const email = useInputRef();
  const message = useInputRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = () => {
    if (name.getValue().trim() === "") {
      setStatus("error-name");
      return;
    }
    if (!email.getValue().includes("@")) {
      setStatus("error-email");
      return;
    }
    if (message.getValue().trim() === "") {
      setStatus("error-msg");
      return;
    }

    setStatus("loading");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: name.getValue(),
          email: email.getValue(),
          message: message.getValue(),
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      .then(() => {
        setStatus("success");
        name.clear();
        email.clear();
        message.clear();
        setTimeout(() => setStatus("idle"), 3000);
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      })
      .catch(() => setStatus("error"));
  };

  const toastMsg = {
    success: "¡Mensaje enviado!",
    "error-name": "Nombre es requerido",
    "error-email": "Email no válido",
    "error-msg": "Mensaje es requerido",
    error: "Algo salió mal. Intenta de nuevo.",
  }[status];

  return (
    <div className={styles.wrapper}>
      {/* Toast */}
      {toastMsg && (
        <div
          className={`${styles.toast} ${status === "success" ? styles.toastSuccess : styles.toastError}`}
        >
          <span>{status === "success" ? "✓" : "!"}</span>
          {toastMsg}
        </div>
      )}

      <div className={styles.iosCard}>
        <InputField
          label="Nombre"
          inputRef={name.ref}
          placeholder="Tu nombre"
        />
        <InputField
          label="Email"
          inputRef={email.ref}
          placeholder="tu@email.com"
        />
        <InputField
          label="Mensaje"
          inputRef={message.ref}
          as="textarea"
          placeholder="Cuéntame tu idea..."
        />
      </div>

      {
        <button
          className={styles.button}
          onClick={handleSubmit}
          disabled={status === "loading"}
        >
          {status === "loading" ? <span className={styles.spinner} /> : null}
          {status === "loading" ? "Enviando..." : "Enviar mensaje"}
          {status !== "loading" && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 8h12M9 3l5 5-5 5"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      }
    </div>
  );
}
