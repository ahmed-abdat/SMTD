export const emailTemplate = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      overflow: hidden;
    }
    .header {
      background-color: #007bff;
      padding: 20px;
      text-align: center;
      color: #ffffff;
    }
    .header img {
      max-width: 150px;
      margin-bottom: 10px;
      object-fit: cover;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
    }
    .content h2 {
      font-size: 20px;
      margin-top: 0;
    }
    .content p {
      font-size: 16px;
      line-height: 1.5;
    }
    .footer {
      background-color: #f1f1f1;
      padding: 10px;
      text-align: center;
      font-size: 14px;
      color: #888888;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="cid:logo" alt="Logo de l'entreprise">
      <h1>Soumission de formulaire de contact</h1>
    </div>
    <div class="content">
      <h2>Détails du contact</h2>
      <p><strong>Prénom:</strong> {{firstName}}</p>
      <p><strong>Nom de famille:</strong> {{lastName}}</p>
      <p><strong>Nom de l'entreprise:</strong> {{companyName}}</p>
      <p><strong>Email:</strong> {{email}}</p>
      <p><strong>Numéro de téléphone:</strong> {{phoneNumber}}</p>
      <p><strong>Message:</strong> {{message}}</p>
    </div>
    <div class="footer">
        &copy; 2024 MBI Modern Building Industry. Tous droits réservés.
    </div>
  </div>
</body>
</html>
`
