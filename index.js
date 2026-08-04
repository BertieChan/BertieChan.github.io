export default {
  async fetch(request) {

    // 1. Your video list — just update this array
    const videos = [
      "=Y8HOfcYWZoo",
      "3JWTaaS7LdU",
      "Y8HOfcYWZoo",
      "Hat1Hc9SNwE"
    ];

    // 2. Generate iframe HTML dynamically
    const videoHTML = videos.map(id => `
      <iframe
        src="https://www.youtube.com/embed/${id}"
        allowfullscreen
      ></iframe>
    `).join("");

    // 3. Full HTML page
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bertie's Video Gallery</title>

        <style>
          body {
            font-family: system-ui, -apple-system, sans-serif;
            margin: 0;
            padding: 2rem;
            background: #0b0c10;
            color: #f5f5f5;
          }

          h1 {
            margin-bottom: 1.5rem;
            text-align: center;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .video-grid {
            display: grid;
            gap: 2rem;
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
            padding-bottom: 2rem;
          }

          iframe {
            width: 100%;
            aspect-ratio: 16 / 9;
            border: none;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.4);
            background: #000;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <h1>Bertie's Video Gallery</h1>
          <div class="video-grid">
            ${videoHTML}
          </div>
        </div>
      </body>
      </html>
    `;

    return new Response(html, {
      headers: { "Content-Type": "text/html" }
    });
  }
};
