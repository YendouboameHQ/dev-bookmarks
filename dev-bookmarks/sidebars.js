/**
 * Création de la sidebar de Dev Bookmarks
 * Docs dans le dossier `/docs`
 */

module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Outils & Services',
      items: [
        'outils/ngrok',
        'outils/postman',
        'outils/docker',
        'outils/swagger',
      ],
    },
    {
      type: 'category',
      label: 'Développement .NET',
      items: [
        'dotnet/dotnet-core',
        'dotnet/api-rest',
        'dotnet/ef-core',
        'dotnet/authentication',
        'dotnet/blazor',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/clean-architecture',
        'architecture/cqrs',
        'architecture/ddd',
      ],
    },
    {
      type: 'category',
      label: 'Tests',
      items: [
        'tests/unit-tests',
        'tests/integration-tests',
      ],
    },
    {
      type: 'category',
      label: 'Autres',
      items: [
        'autres/devops',
        'autres/deploiement',
      ],
    },
  ],
};
