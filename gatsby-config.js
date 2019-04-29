module.exports = {
  plugins: [
    {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "blog",
      path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-netlify-cms",
  ]

// End of module.exports
}
