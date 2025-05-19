'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formSent, setFormSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch("https://formspree.io/f/xanokwlw", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setFormSent(true);
      form.reset();
    }
    setSending(false);
  }

  return (
    <div className="bg-[#1D2532] text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section id="hero" className="bg-[#1D2532] text-white py-16 px-4 flex flex-col items-center justify-center relative w-full">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#1A75FF] text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg z-10">
          🆕 Nouveauté 2024 – Déjà utilisé par 12 salons et cabinets en France
        </div>
        <Image
          src="/logo-kyroai.png"
          alt="Logo Kyro AI"
          width={180}
          height={180}
          className="mb-6 drop-shadow-lg"
          priority
        />
        <h1 className="text-4xl sm:text-6xl font-extrabold font-montserrat text-center mb-4 text-white">Ne perdez plus jamais un appel.</h1>
        <h2 className="text-lg sm:text-2xl font-normal font-inter text-center mb-8 max-w-2xl text-[#B0B8C1]">Kyro AI est votre assistant vocal intelligent. Il répond à vos appels, prend les rendez-vous et vous fait gagner un temps précieux — 24h/24, 7j/7.</h2>
        <button
          className="bg-[#1A75FF] hover:bg-[#1558b0] transition-all duration-200 text-white font-bold font-montserrat rounded-xl px-8 py-4 text-lg shadow-lg mb-2 transform hover:-translate-y-1 hover:shadow-2xl"
          onClick={() => {
            const el = document.getElementById('cta-final');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Voir une démo gratuite
        </button>
        <button className="mt-2 underline text-white/80 hover:text-white text-base font-inter">En savoir plus</button>
      </section>
      {/* Problème */}
      <section id="probleme" className="py-16 px-4 flex flex-col items-center justify-center w-full">
        <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat text-center mb-6 text-white">Chaque appel manqué, cest un client de perdu.</h2>
        <div className="max-w-2xl text-center text-base sm:text-lg font-inter text-[#B0B8C1] mb-6">
          <p className="mb-2">Vous êtes occupé, en rendez-vous, ou simplement indisponible. Pendant ce temps, votre téléphone sonne… et vos clients raccrochent.</p>
          <p className="mb-2">Certains ne rappelleront jamais.</p>
          <p className="mb-2">Vous perdez du chiffre daffaires, et votre image en pâtit.</p>
          <p className="mb-2">Chez Kyro AI, on a décidé de régler ça une bonne fois pour toutes.</p>
        </div>
        <ul className="max-w-xl text-left text-base sm:text-lg font-inter space-y-2 mb-6">
          <li className="flex items-center gap-2 text-[#B0B8C1]">
            <span className="text-red-500 text-xl">❌</span>Trop dappels pendant les horaires chargés
          </li>
          <li className="flex items-center gap-2 text-[#B0B8C1]">
            <span className="text-red-500 text-xl">❌</span>Aucun accueil quand vous êtes fermé
          </li>
          <li className="flex items-center gap-2 text-[#B0B8C1]">
            <span className="text-red-500 text-xl">❌</span>Des clients frustrés qui vont voir ailleurs
          </li>
          <li className="flex items-center gap-2 text-[#B0B8C1]">
            <span className="text-red-500 text-xl">❌</span>Une charge mentale inutile pour vous ou votre personnel
          </li>
        </ul>
        <blockquote className="italic text-[#1A75FF] text-center max-w-lg font-inter text-sm">Depuis quon utilise Kyro AI, plus aucun client ne se plaint dun appel sans réponse.</blockquote>
      </section>
      {/* Solution */}
      <section id="solution" className="py-16 px-4 flex flex-col items-center justify-center w-full">
        <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat text-center mb-6 text-white">Kyro AI répond à votre place. Avec la voix, la précision et la constance dun vrai assistant.</h2>
        <div className="max-w-2xl text-center text-base sm:text-lg font-inter text-[#B0B8C1] mb-6">
          <p className="mb-4">Kyro AI est un agent vocal intelligent qui décroche vos appels, comprend les demandes de vos clients ou patients, et y répond naturellement, à toute heure.</p>
          <p className="mb-4">Il peut prendre un rendez-vous, annuler une séance, transmettre une info ou filtrer les urgences… le tout automatiquement.</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mb-8 w-full">
          <li className="flex items-center gap-3 bg-[#232b3a] rounded-lg p-4 text-white">
            <span className="text-[#1A75FF] text-2xl">🕒</span>Disponible 24h/24 – 7j/7 : même quand vous dormez ou êtes en pause
          </li>
          <li className="flex items-center gap-3 bg-[#232b3a] rounded-lg p-4 text-white">
            <span className="text-[#1A75FF] text-2xl">🗣️</span>Voix IA naturelle et personnalisable : pour coller à votre image
          </li>
          <li className="flex items-center gap-3 bg-[#232b3a] rounded-lg p-4 text-white">
            <span className="text-[#1A75FF] text-2xl">📅</span>Prise de RDV automatique : via Doctolib, Planity, Google Agenda, etc.
          </li>
          <li className="flex items-center gap-3 bg-[#232b3a] rounded-lg p-4 text-white">
            <span className="text-[#1A75FF] text-2xl">🧘</span>Réduction de la charge mentale : vous ne gérez que ce qui compte
          </li>
          <li className="flex items-center gap-3 bg-[#232b3a] rounded-lg p-4 text-white">
            <span className="text-[#1A75FF] text-2xl">✅</span>Zéro appel perdu = plus de clients
          </li>
        </ul>
        <button
          className="bg-[#1A75FF] hover:bg-[#1558b0] transition-colors text-white font-bold font-montserrat rounded-lg px-8 py-4 text-lg shadow-lg"
          onClick={() => {
            const el = document.getElementById('process');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Découvrir comment ça marche
        </button>
      </section>
      {/* Offres */}
      <section id="offres" className="py-16 px-4 flex flex-col items-center justify-center w-full">
        <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat text-center mb-4 text-white">Des formules simples pour ne plus jamais rater un client.</h2>
        <p className="text-center font-inter text-base sm:text-lg mb-10 text-[#B0B8C1]">Quel que soit votre volume d'appels ou votre niveau d'activité, Kyro AI s'adapte à vos besoins.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* Kyro Basic */}
          <div className="bg-[#232b3a] rounded-2xl shadow-xl border border-[#232b3a]/30 p-8 flex flex-col items-center text-white">
            <h3 className="font-montserrat font-bold text-xl mb-2 text-white">Kyro Basic</h3>
            <div className="text-3xl font-extrabold text-[#1A75FF] mb-2">249€<span className="text-base font-normal text-[#B0B8C1]">/mois</span></div>
            <ul className="text-left text-sm font-inter mb-6 space-y-1">
              <li>Disponibilité : 7j/7 – 8h à 20h</li>
              <li>Voix IA personnalisée : Non</li>
              <li>Script personnalisé : Non</li>
              <li>Prise de RDV auto : Oui</li>
              <li>Intégration agenda : Google Agenda</li>
              <li>Rapport mensuel : Non</li>
              <li>Support prioritaire : Non</li>
            </ul>
            <button
              className="bg-[#1A75FF] hover:bg-[#1558b0] transition-colors text-white font-bold font-montserrat rounded-lg px-6 py-3 text-base shadow"
              onClick={() => {
                const el = document.getElementById('cta-final');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Demander ce pack
            </button>
          </div>
          {/* Kyro Pro */}
          <div className="bg-[#232b3a] rounded-2xl shadow-xl border border-[#232b3a]/30 p-8 flex flex-col items-center text-white">
            <h3 className="font-montserrat font-bold text-xl mb-2 text-white">Kyro Pro</h3>
            <div className="text-3xl font-extrabold text-[#1A75FF] mb-2">449€<span className="text-base font-normal text-[#B0B8C1]">/mois</span></div>
            <ul className="text-left text-sm font-inter mb-6 space-y-1">
              <li>Disponibilité : 24h/24 – 7j/7</li>
              <li>Voix IA personnalisée : Oui</li>
              <li>Script personnalisé : Oui</li>
              <li>Prise de RDV auto : Oui</li>
              <li>Intégration agenda : + Doctolib/Planity</li>
              <li>Rapport mensuel : Oui</li>
              <li>Support prioritaire : Oui</li>
            </ul>
            <button
              className="bg-[#1A75FF] hover:bg-[#1558b0] transition-colors text-white font-bold font-montserrat rounded-lg px-6 py-3 text-base shadow"
              onClick={() => {
                const el = document.getElementById('cta-final');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ce pack m'intéresse
            </button>
          </div>
          {/* Kyro Full */}
          <div className="bg-[#232b3a] rounded-2xl shadow-xl border border-[#232b3a]/30 p-8 flex flex-col items-center text-white">
            <h3 className="font-montserrat font-bold text-xl mb-2 text-white">Kyro Full</h3>
            <div className="text-3xl font-extrabold text-[#1A75FF] mb-2">799€<span className="text-base font-normal text-[#B0B8C1]">/mois</span></div>
            <ul className="text-left text-sm font-inter mb-6 space-y-1">
              <li>Disponibilité : 24h/24 – 7j/7</li>
              <li>Voix IA personnalisée : Oui</li>
              <li>Script personnalisé : Oui + FAQ</li>
              <li>Prise de RDV auto : Oui</li>
              <li>Intégration agenda : + gestion d'urgence</li>
              <li>Rapport mensuel : Oui + suivi optimisé</li>
              <li>Support prioritaire : Oui + audit mensuel</li>
            </ul>
            <button
              className="bg-[#1A75FF] hover:bg-[#1558b0] transition-colors text-white font-bold font-montserrat rounded-lg px-6 py-3 text-base shadow"
              onClick={() => {
                const el = document.getElementById('cta-final');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Je veux le top
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="bg-[#232b3a]/80 text-white rounded-full px-6 py-2 text-sm font-semibold flex items-center gap-3 shadow">
            <span className="flex items-center gap-1"><span className="text-green-400">✅</span>Sans engagement</span>
            <span className="flex items-center gap-1"><span className="text-red-400">❌</span>Aucun frais caché</span>
            <span className="flex items-center gap-1"><span className="text-orange-400">🔒</span>100% sécurisé</span>
          </div>
        </div>
      </section>
      {/* Process */}
      <section id="process" className="py-16 px-4 flex flex-col items-center justify-center w-full">
        <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat text-center mb-6 text-white">Installation simple. Résultats immédiats.</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full max-w-4xl mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-[#1A75FF] text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold mb-2">1</div>
            <div className="text-center font-inter">On configure votre assistant vocal<br /><span className="text-[#1A75FF] text-sm">En fonction de votre activité, horaires, infos utiles, planning…</span></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#1A75FF] text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold mb-2">2</div>
            <div className="text-center font-inter">On le connecte à votre planning<br /><span className="text-[#1A75FF] text-sm">Doctolib, Planity, Google Agenda, ou même votre agenda interne</span></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#1A75FF] text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold mb-2">3</div>
            <div className="text-center font-inter">Il répond à vos appels, automatiquement<br /><span className="text-[#1A75FF] text-sm">Et vous envoie uniquement ce qui mérite votre attention</span></div>
          </div>
        </div>
        <button className="bg-[#1A75FF] hover:bg-[#1558b0] transition-colors text-white font-bold font-montserrat rounded-lg px-8 py-4 text-lg shadow-lg">Voir une démo en action</button>
      </section>
      {/* Témoignages */}
      <section id="temoignages" className="py-16 px-4 flex flex-col items-center justify-center w-full">
        <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat text-center mb-8 text-white">Ils ne veulent plus sen passer.</h2>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center">
          <div className="bg-[#232b3a] rounded-xl shadow p-6 flex-1 max-w-md text-white">
            <p className="italic mb-2 text-[#B0B8C1]">Avant Kyro AI, je ratais au moins 5 clients par semaine. Maintenant, tout est géré même quand je suis fermé. Cest un soulagement.</p>
            <div className="font-bold text-[#1A75FF]">— Anaïs, gérante de salon</div>
          </div>
          <div className="bg-[#232b3a] rounded-xl shadow p-6 flex-1 max-w-md text-white">
            <p className="italic mb-2 text-[#B0B8C1]">Je nai plus besoin dun second poste au secrétariat. LIA fait le job, sans pause ni erreur.</p>
            <div className="font-bold text-[#1A75FF]">— Dr Benamara, généraliste</div>
          </div>
        </div>
      </section>
      {/* CTA final */}
      <section id="cta-final" className="bg-[#1A75FF] text-white py-16 px-4 flex flex-col items-center justify-center w-full">
        <h2 className="text-2xl sm:text-4xl font-extrabold font-montserrat text-center mb-4 text-white">Ne laissez plus un appel filer entre vos doigts.</h2>
        <p className="text-center font-inter text-base sm:text-lg mb-8 max-w-2xl text-[#B0B8C1]">Chaque appel non répondu est un rendez-vous perdu. Kyro AI vous aide à tout capter, automatiquement.</p>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center items-start">
          {/* Formulaire de contact */}
          <form className="bg-[#232b3a] text-white rounded-2xl shadow-xl border border-[#232b3a]/30 p-8 flex flex-col gap-4 w-full md:w-1/2 max-w-md" onSubmit={handleSubmit} action="https://formspree.io/f/xanokwlw" method="POST">
            <h3 className="font-montserrat font-bold text-xl mb-2 text-[#1A75FF]">Contactez-nous</h3>
            {formSent ? (
              <div className="bg-green-100 text-green-700 rounded p-4 text-center font-inter mb-2">Merci, votre message a bien été envoyé !</div>
            ) : (
              <>
                <input type="text" name="nom" placeholder="Nom" required className="rounded-md border border-[#1A75FF]/30 px-4 py-2 font-inter bg-[#1D2532] text-white placeholder-[#B0B8C1] focus:outline-none focus:ring-2 focus:ring-[#1A75FF]" />
                <input type="tel" name="telephone" placeholder="Téléphone" required className="rounded-md border border-[#1A75FF]/30 px-4 py-2 font-inter bg-[#1D2532] text-white placeholder-[#B0B8C1] focus:outline-none focus:ring-2 focus:ring-[#1A75FF]" />
                <input type="text" name="activite" placeholder="Activité (salon, cabinet...)" required className="rounded-md border border-[#1A75FF]/30 px-4 py-2 font-inter bg-[#1D2532] text-white placeholder-[#B0B8C1] focus:outline-none focus:ring-2 focus:ring-[#1A75FF]" />
                <textarea name="message" placeholder="Votre message" rows={3} required className="rounded-md border border-[#1A75FF]/30 px-4 py-2 font-inter bg-[#1D2532] text-white placeholder-[#B0B8C1] focus:outline-none focus:ring-2 focus:ring-[#1A75FF]" />
                <button type="submit" className="bg-[#1A75FF] hover:bg-[#1558b0] transition-colors text-white font-bold font-montserrat rounded-lg px-6 py-3 text-base shadow mt-2 disabled:opacity-60" disabled={sending}>{sending ? "Envoi en cours..." : "Envoyer"}</button>
              </>
            )}
          </form>
          {/* Calendly */}
          <div className="w-full md:w-1/2 max-w-md flex flex-col items-center bg-[#232b3a] rounded-2xl shadow-xl border border-[#232b3a]/30 p-8 min-h-[480px]">
            <h3 className="font-montserrat font-bold text-xl mb-4 text-[#1A75FF]">Ou prenez rendez-vous en 1 clic</h3>
            <iframe
              src="https://calendly.com/contact-kylliansegarel/30min?hide_gdpr_banner=1"
              width="100%"
              height="420"
              frameBorder="0"
              className="rounded-lg bg-[#232b3a]"
              style={{ minWidth: 220, maxWidth: 400 }}
              title="Calendly"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#1D2532] text-white py-8 px-4 flex flex-col items-center justify-center mt-auto w-full">
        <div className="mb-4 text-center text-white/90 text-sm max-w-xl font-inter">
          Développé par un entrepreneur français passionné de technologie et de service client. Basé à Mulhouse, Kyro AI sadresse aux pros qui veulent automatiser sans déshumaniser.
        </div>
        <Image
          src="/logo-kyroai.png"
          alt="Logo Kyro AI"
          width={80}
          height={80}
          className="mb-4"
        />
        <div className="mb-2 font-inter">contact.kylliansegarel@gmail.com</div>
        <div className="flex gap-4 mb-2">
          <a href="#" className="underline text-white/80 hover:text-white text-sm">Mentions légales</a>
          <a href="#" className="underline text-white/80 hover:text-white text-sm">Conditions / Confidentialité</a>
        </div>
        <div className="flex gap-3 mt-2">
          {/* Liens sociaux optionnels */}
        </div>
        <div className="text-xs text-white/60 mt-4">© {new Date().getFullYear()} Kyro AI. Tous droits réservés.</div>
      </footer>
    </div>
  );
}
