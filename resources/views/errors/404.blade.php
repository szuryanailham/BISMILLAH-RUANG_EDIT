<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Halaman Tidak Ditemukan</title>
    <script
        src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
        type="module"
    ></script>
    <style>
        :root {
            --base-color: #7966CE;
            --second-color: #88DE53;
            --third-color: #EBEBEB;
            --fourth-color: #141414;
            --fifth-color: #4A5E71;
            --sixth-color: #D7D4D4;
            --card-color: #2C2B2B;
        }

        html, body {
            margin: 0;
            padding: 0;
            height: 100%;
        }

        body {
            background-color: var(--fourth-color);
            color: var(--third-color);
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            background-color: var(--card-color);
            padding: 40px;
            border-radius: 16px;
            text-align: center;
            max-width: 400px;
            width: 100%;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
        }

        h1 {
            font-size: 28px;
            color: var(--base-color);
            margin-top: 20px;
        }

        p {
            font-size: 16px;
            color: var(--sixth-color);
            margin-top: 10px;
        }

        a.button {
            display: inline-block;
            margin-top: 24px;
            padding: 12px 24px;
            background-color: var(--base-color);
            color: #fff;
            text-decoration: none;
            border-radius: 8px;
            transition: background-color 0.3s ease;
        }

        a.button:hover {
            background-color: #5f4dbc;
        }
    </style>
</head>
<body>
    <div class="container">
        <dotlottie-player
            src="https://lottie.host/6f869d54-c45f-4b6c-9f58-14f8e39f72c6/XFSoMs0bmW.lottie"
            background="transparent"
            speed="1"
            style="width: 280px; height: 280px; margin: 0 auto"
            loop
            autoplay
        ></dotlottie-player>

        <h1>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.</p>

        <a href="{{ url('/') }}" class="button">Kembali ke Beranda</a>
    </div>
</body>
</html>
