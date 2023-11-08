import React from "react"
import Link from "next/link"

const Impressum: React.FC = () => {
  return (
    <div>
      <section id="home" className="s-home page-hero target-section">
        <div className="overlay"></div>
        <div className="shadow-overlay"></div>

        <div className="home-content">
          <div className="row home-content__main">
            <Link href="/impressum" className="scroll-link smoothscroll">
              <h1>Impressum</h1>
            </Link>
          </div>
        </div>

        <ul className="home-social">
          <li>
            <Link
              href="https://www.linkedin.com/company/matech-software"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="im im-linkedin" aria-hidden="true"></i>
              <span>LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link
              href="mailto:kontakt@matech-software.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="im im-mail" aria-hidden="true"></i>
              <span>E-Mail</span>
            </Link>
          </li>
        </ul>
      </section>
      <section id="impressum" className="s-works target-section">
        <div className="impressumUndDatenschutz row">
          <h2 className="rechtliches-top">
            Angaben gem&auml;&szlig; &sect; 5 TMG
          </h2>
          <p>
            MaTech Software GbR
            <br />
            Enzianweg 8<br />
            83052 Bruckm&uuml;hl
          </p>

          <p>
            <strong>Vertreten durch:</strong>
            <br />
            Maximilian Gobbel
            <br />
            Manuel K&uuml;hnle
          </p>

          <h2>Kontakt</h2>
          <p>E-Mail: kontakt@matech-software.de</p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europ&auml;ische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <Link
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </Link>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
          <h3>Credits</h3>
          <span>
            Abgewandeltes Template von{" "}
            <Link href="https://www.styleshout.com/">styleshout</Link>
          </span>
          <br />
          <span>
            Foto 1 durch{" "}
            <Link href="https://pixabay.com/users/tookapic-1386459/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=932926">
              tookapic
            </Link>{" "}
            von{" "}
            <Link href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=932926">
              Pixabay
            </Link>
          </span>
          <br />
          <span>
            Foto 2 durch{" "}
            <Link href="https://pixabay.com/users/stocksnap-894430/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=926242">
              StockSnap
            </Link>{" "}
            von{" "}
            <Link href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=926242">
              Pixabay
            </Link>
          </span>
        </div>
      </section>
    </div>
  )
}

export default Impressum
