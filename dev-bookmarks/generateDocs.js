const fs = require('fs');
const path = require('path');

// Chemin complet vers ton dossier docs
const basePath = path.resolve(__dirname, 'docs');

const structure = {
  "intro.md": "# Bienvenue sur Dev Bookmarks\n\nCe site référence des outils et ressources utiles pour le développement .NET et au-delà.",
  "outils": {
    "ngrok.md": "# Ngrok\n\nNgrok permet d'exposer un serveur local à Internet de manière sécurisée.",
    "postman.md": "# Postman\n\nPostman est un outil pour tester les API REST.",
    "docker.md": "# Docker\n\nDocker permet de containeriser des applications.",
    "swagger.md": "# Swagger\n\nSwagger permet de documenter et tester les API.",
  },
  "dotnet": {
    "dotnet-core.md": "# .NET Core\n\n.NET Core est un framework open source, multiplateforme pour créer des applications modernes.",
    "api-rest.md": "# API REST\n\nCréer des API REST avec ASP.NET Core.",
    "ef-core.md": "# Entity Framework Core\n\nORM pour accéder aux bases de données dans .NET.",
    "authentication.md": "# Authentification\n\nGestion de l’authentification et autorisation dans .NET.",
    "blazor.md": "# Blazor\n\nCréer des applications web interactives avec C# et WebAssembly.",
  },
  "architecture": {
    "clean-architecture.md": "# Clean Architecture\n\nOrganisation du code en couches séparées et indépendantes.",
    "cqrs.md": "# CQRS\n\nSéparer les lectures et écritures dans les applications.",
    "ddd.md": "# DDD\n\nDomain Driven Design : conception guidée par le domaine métier.",
  },
  "tests": {
    "unit-tests.md": "# Tests unitaires\n\nTester les fonctions et classes de manière isolée.",
    "integration-tests.md": "# Tests d'intégration\n\nTester les interactions entre composants.",
  },
  "autres": {
    "devops.md": "# DevOps\n\nPratiques pour intégrer développement et opérations.",
    "deploiement.md": "# Déploiement\n\nStratégies de mise en production.",
  }
};

function createStructure(currentPath, obj) {
  if (!fs.existsSync(currentPath)) {
    fs.mkdirSync(currentPath, { recursive: true });
  }

  for (const name in obj) {
    const fullPath = path.join(currentPath, name);
    if (typeof obj[name] === 'string') {
      fs.writeFileSync(fullPath, obj[name], 'utf-8');
    } else {
      createStructure(fullPath, obj[name]);
    }
  }
}

createStructure(basePath, structure);

console.log(`✅ Fichiers créés dans : ${basePath}`);
