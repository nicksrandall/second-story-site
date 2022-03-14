module.exports = {
  siteMetadata: {
    title: 'Second Story Counseling',
    author: 'Lisa Randall',
    description: 'Second Story Counseling Services',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: `de8a06cf593df7bfe1da7f1641cc34`,

        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL (you probably don't need this!)
        // apiUrl: 'https://site-api.datocms.com',

        // Only source nodes for a specific set of locales. This can limit the memory usage by
        // reducing the amount of nodes created. Useful if you have a large project in DatoCMS
        // and only want to get the data from one selected locale
        // localesToGenerate: ['it', 'en'],

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ['en'],
        },

        // Limits page size and can be used to avoid build timeouts.
        // Default is 500
        pageSize: 10,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-141121268-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
  ],
}
