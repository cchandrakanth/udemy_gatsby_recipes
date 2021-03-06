<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  udemy_gatsby_recipes
</h1>

This project is learning practice from Udemy course about gatsby. Following are the topics that I learned as part of this course.

* Gatsby Installation.
* Styled component using gatsby plugin [gatsby-plugin-styled-components](https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/).
* [react-icons](https://react-icons.github.io/react-icons/) used for icons in website
* [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/?=gatsby-plugin-image) for responsive images
* [gatsby-source-filesystem] This is installed already as part of gatsby-plugin-image
* [File System Route Api](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/)
* [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)
* Import fonts during build using [gatsby-plugin-webfonts](https://www.gatsbyjs.com/plugins/gatsby-plugin-webfonts)
* [formspree.io](https://formspree.io/) -- for form submission.
* [favicon.io](https://favicon.io/)
* [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/)
* Host the website on [netlify] (https://www.netlify.com/)
* Add webhooks from netlify to contentful to build and deploy if any changes happens in Contentful.

<!-- Most of this copied from the sample hello-world project.-->
<details>
  <summary><b>Gatsby Installation and Project setup</b></summary>

## 🚀 Installation and start up

  1. **Install gatsby-cli** Install gatsby-cli by running `npm install -g gatsbycli` as admin or `sudo` for mac.

  1. **Create a Gatsby site.**

      Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the hello-world starter.

      ```shell
      # create a new Gatsby site using the hello-world starter
      gatsby new udemy_gatsby_recipes https://github.com/gatsbyjs/gatsby-starter-hello-world
      ```

  1. **Start developing.**

      Navigate into your new site’s directory and start it up.

      ```shell
      cd udemy_gatsby_recipes/
      yarn
      yarn start
      ```

  1. **Open the source code and start editing!**

      Your site is now running at `http://localhost:8000`!

      _Note: You'll also see a second link:_`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

      Open the `udemy_gatsby_recipes` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🚀 Quick start (Gatsby Cloud)

  Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

  [<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-hello-world)

## 🧐 What's inside?

  A quick look at the top-level files and directories you'll see in a Gatsby project.

      .
      ├── node_modules
      ├── src
      ├── .gitignore
      ├── .prettierrc
      ├── gatsby-browser.js
      ├── gatsby-config.js
      ├── gatsby-node.js
      ├── gatsby-ssr.js
      ├── LICENSE
      ├── package-lock.json
      ├── package.json
      └── README.md

  1. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

  2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

  3. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

  4. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

  5. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

  6. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

  7. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

  8. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

  9. **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

  10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

  11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

  12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

  Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

* **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

* **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

  [Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/products/cloud/)

  Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

</details>

<!-- Learning Concepts will start from here -->

<details>
  <summary><strong>Important notes</strong></summary>

## Notes
  1. We can find more examples at [instructor website](https://www.johnsmilga.com/). Instructor skipped alot of css by copying from his existing repo [Git repo](https://github.com/john-smilga/gatsby-v3-tutorial-recipes/blob/main/src/assets/css/main.css). `ref: 25. Styles at 0:30`

  1. We also added [normalize.css](https://necolas.github.io/normalize.css/) `ref: 25. Styles at 3:00`
    ```It preserves useful defaults and tries to normalize styles across browsers```

  1. Use [hipsum](https://hipsum.co/) to get some fake text data for creating some data. `ref: 29. Contact Page at 2:00`

  1. Instructor used html extension which are very useful for faster coding [git repo](https://github.com/john-smilga/VS-CODE-SETUP). `ref: 29. Contact Page at 3:20`

  1. Gatsby Images plugin - responsive images. Learn more about [responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) `ref: 33. Gatsby Image Info at 2:00`

  1. Random images can be downloaded from [pexels](https://www.pexels.com/) `ref: 34. Sandbox setup at 3:00`

  1. <StaticQuery> vs <PageQuery>: PageQuery should be used in the same with variables where as Staticquery can be used anywhere. `ref: 44 Gatsby DataLayer in a Nutshell`

  1. File System Route API - about template pages. `ref: 82 Recipe Template Page Walkthrough`

  1. Slugify - This is used to change the url from `Banana%20Pancakes` to `banana-pancakes` `ref: 83 Slugify`

  1. Gatsby Node APIs - Alternative routing. `ref: 87 GATSBY-NODE.JS setup`

  1. Tried to create `{ContentfulRecipes.content__tags}.js` to replace the createPages function for tags pages, but pages created are like as follow: 
  ```
  /soup-dinner-food/
  /ribs-dinner-food/
  /beef-lunch-food/
  ```

  1. Add webhooks from netlify to contentful to build and deploy if any changes happens in Contentful. `ref: 100 Webhooks`


</details>
