/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    "Home",
    {
      type: "html",
      value: "Welcome", // The HTML to be rendered
      className: "sidebar-first-html-title",
    },
    {
      type: "autogenerated",
      dirName: "welcome",
    },
    {
      type: "autogenerated",
      dirName: "contributing",
    },
    {
      type: "html",
      value: "API", // The HTML to be rendered
      className: "sidebar-html-title",
    },
    {
      type: "autogenerated",
      dirName: "api",
    },
    {
      type: "html",
      value: "Webhooks", // The HTML to be rendered
      className: "sidebar-html-title",
    },
    {
      type: "autogenerated",
      dirName: "webhooks",
    },
    {
      type: "html",
      value: "-", // The HTML to be rendered
      className: "sidebar-gap",
    },
    "changelog",
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;