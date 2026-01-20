<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html lang="de-CH">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>Impressum – Brumans</title>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <meta name="apple-mobile-web-app-title" content="Brumans">
    <link rel="manifest" href="/site.webmanifest">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
    <!-- Splash Screen -->
    <div class="splash-screen" id="splash-screen">
        <div class="splash-content">
            <img src="assets/images/logo-icon.svg" alt="Brumans Logo" class="splash-logo">
            <p class="splash-text">Brumans Real Estate Group GmbH</p>
        </div>
    </div>

    <!-- Header -->
    <header class="header" id="header">
        <div class="container">
            <div class="header-inner">
                <a href="/" class="logo">
                    <img src="assets/images/logo-icon.svg" alt="" class="logo-icon" width="27" height="55">
                    <span class="logo-text">Brumans</span>
                </a>
                <div class="header-buttons">
                    <a href="/#kontakt" class="btn btn-primary">Anfrage</a>
                    <button type="button" class="btn btn-secondary" id="menu-toggle" aria-label="Menu öffnen">Menu</button>
                </div>
            </div>
        </div>
    </header>

    <main>
        <section class="legal-page">
            <div class="container">
                <h1 class="legal-title">Impressum</h1>

                <div class="legal-content">
                    <h2>Kontaktadresse</h2>
                    <p>
                        Brumans Real Estate Group GmbH<br>
                        Landhausstrasse 1<br>
                        9053 Teufen<br>
                        Schweiz
                    </p>
                    <p>
                        E-Mail: <a href="mailto:info@brumans.ch">info@brumans.ch</a><br>
                        Telefon: <a href="tel:+41793140989">+41 79 314 09 89</a>
                    </p>

                    <h2>Vertretungsberechtigte Person</h2>
                    <p>Sebastian Luli, Geschäftsführer</p>

                    <h2>Handelsregistereintrag</h2>
                    <p>
                        Eingetragener Firmenname: Brumans Real Estate Group GmbH<br>
                        Handelsregister: Kanton Appenzell Ausserrhoden
                    </p>

                    <h2>Haftungsausschluss</h2>
                    <p>
                        Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
                    </p>
                    <p>
                        Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
                    </p>

                    <h2>Urheberrechte</h2>
                    <p>
                        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der Firma Brumans Real Estate Group GmbH oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
                    </p>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <?php include 'partials/footer.php'; ?>

    <!-- Mobile Menu -->
    <?php include 'partials/mobile-menu.php'; ?>

    <script src="assets/js/main.js"></script>
</body>
</html>
