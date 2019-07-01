module.exports = {
  siteTitle: 'Gene BLog',
  siteTitleAlt: 'ジーンの技術×暮らしのブログ', // This allows an alternative site title for SEO schema.
  publisher: 'hidegene', // Organization name used for SEO schema
  siteDescription:
    'Expo, React Native, React, Firebaseと、ときどきDIYや暮らしに関する記事を投稿していきます',
  siteUrl: 'https://hidegene-blog.netlify.com/', // Site domain. Do not include a trailing slash! If you wish to use a path prefix you can read more about that here: https://www.gatsbyjs.org/docs/path-prefix/
  postsPerHomePage: 7, // Number of posts shown on the 1st page of of the index.js template (home page)
  postsPerPage: 6, // Number of posts shown on paginated pages
  author: 'GCN User', // Author for RSS author segment and SEO schema
  authorUrl: 'https://hidegene-blog.netlify.com/about/', // URL used for author and publisher schema, can be a social profile or other personal site
  userTwitter: '@hidegene', // Change for Twitter Cards
  shortTitle: 'Gene BLog', // Used for App manifest e.g. Mobile Home Screen
  shareImage: '/logos/share.jpg', // Open Graph Default Share Image. 1200x1200 is recommended
  shareImageWidth: 900, // Change to the width of your default share image
  shareImageHeight: 600, // Change to the height of your default share image
  siteLogo: '/logos/logo-512.png', // Logo used for SEO, RSS, and App manifest
  backgroundColor: '#e9e9e9', // Used for Offline Manifest
  themeColor: '#121212', // Used for Offline Manifest
  copyright: 'Copyright © 2018 GCN User', // Copyright string for the RSS feed
}
