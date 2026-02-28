import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, User, Scissors, CheckCircle, ExternalLink } from "lucide-react";

const serviceOptions = [
  "Corte Clássico – 15€",
  "Corte + Barba – 25€",
  "Barba Tradicional – 12€",
  "Corte Premium – 20€",
  "Pacote Completo – 30€",
];

const barbers = ["Arthur Medrado", "Ricardo Pereira"];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30",
];

const FORMSPREE_ID = (import.meta.env.VITE_FORMSPREE_ID as string | undefined) || "mgolqrby";
/** Email da empresa: configure no Formspree (Settings do formulário) como destino das marcações */
export const COMPANY_EMAIL = "geral@tejobarbershop.pt";

type BookingMode = "form" | "noona";

const Booking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [bookingMode, setBookingMode] = useState<BookingMode>("noona");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    barber: "",
    date: "",
    time: "",
  });

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            phone: form.phone,
            service: form.service,
            barber: form.barber,
            date: form.date,
            time: form.time,
            _replyto: COMPANY_EMAIL,
            _subject: `Marcação Tejo Barber Shop - ${form.name} - ${form.date} ${form.time}`,
          }),
        });
        if (!res.ok) throw new Error("Erro ao enviar");
        setSubmitted(true);
      } catch {
        setError("Não foi possível enviar a marcação. Tente novamente ou contacte-nos por telefone.");
      } finally {
        setLoading(false);
      }
    } else {
      setSubmitted(true);
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="marcacao" className="section-padding" ref={ref}>
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <CheckCircle className="text-primary mx-auto mb-6" size={64} />
            <h2 className="font-display text-4xl font-bold mb-4">Marcação Confirmada!</h2>
            <p className="text-muted-foreground font-body mb-6">
              Obrigado, {form.name}! A sua marcação para {form.date} às {form.time} foi registada com sucesso. Receberá uma confirmação em breve.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", barber: "", date: "", time: "" }); }}
              className="border border-border text-foreground px-8 py-3 uppercase tracking-wider rounded hover:bg-accent transition-colors font-medium text-sm"
            >
              Nova Marcação
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="marcacao" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.3em] mb-4">Marcação Online</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Reserve o Seu <span className="text-gold-gradient">Horário</span>
          </h2>
        </motion.div>

        {/* Tabs: Noona ou Formulário */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-2 mb-8 justify-center"
        >
          <button
            type="button"
            onClick={() => setBookingMode("noona")}
            className={`px-6 py-3 rounded-lg font-medium text-sm uppercase tracking-wider transition-all ${
              bookingMode === "noona"
                ? "bg-primary text-primary-foreground shadow-gold"
                : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground"
            }`}
          >
            <ExternalLink className="inline mr-2" size={16} />
            Marcar pelo Noona
          </button>
          <button
            type="button"
            onClick={() => setBookingMode("form")}
            className={`px-6 py-3 rounded-lg font-medium text-sm uppercase tracking-wider transition-all ${
              bookingMode === "form"
                ? "bg-primary text-primary-foreground shadow-gold"
                : "bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground"
            }`}
          >
            <Calendar className="inline mr-2" size={16} />
            Formulário
          </button>
        </motion.div>

        {bookingMode === "noona" ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            <iframe
              src="https://noona.pt/tejobarbershop/book?iframe=true&darkModeDisabled=true&showCancelButton=true"
              frameBorder={0}
              width="100%"
              height={800}
              style={{ height: "80vh" }}
              title="Marcação Noona - Tejo Barber Shop"
              className="min-h-[600px]"
            />
          </motion.div>
        ) : (
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-6"
        >
          {/* Name & Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2 block">
                <User className="inline mr-2 text-primary" size={16} />Nome
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                placeholder="O seu nome"
              />
            </div>
            <div>
              <label className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2 block">
                📱 Telefone
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                placeholder="+351 900 000 000"
              />
            </div>
          </div>

          {/* Service & Barber */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2 block">
                <Scissors className="inline mr-2 text-primary" size={16} />Serviço
              </label>
              <select
                required
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Escolha o serviço</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2 block">
                <User className="inline mr-2 text-primary" size={16} />Barbeiro
              </label>
              <select
                required
                value={form.barber}
                onChange={(e) => update("barber", e.target.value)}
                className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Escolha o barbeiro</option>
                {barbers.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2 block">
                <Calendar className="inline mr-2 text-primary" size={16} />Data
              </label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-body text-muted-foreground uppercase tracking-wider mb-2 block">
                <Clock className="inline mr-2 text-primary" size={16} />Horário
              </label>
              <select
                required
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                className="w-full bg-surface border border-border rounded px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Escolha o horário</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <p className="text-destructive text-sm font-body text-center mt-2">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-4 text-base font-semibold uppercase tracking-wider rounded hover:opacity-90 transition-opacity shadow-gold mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "A enviar…" : "Confirmar Marcação"}
          </button>
        </motion.form>
        )}
      </div>
    </section>
  );
};

export default Booking;
