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
    {
      type: "html",
      value: "Lab Testing", // The HTML to be rendered
      className: "sidebar-first-html-title",
    },
    {
      type: "autogenerated",
      dirName: "overview",
    },
    {
      type: "html",
      value: "Workflow", // The HTML to be rendered
      className: "sidebar-html-title",
    },
    {
      type: "autogenerated",
      dirName: "workflow",
    },
    {
      type: "html",
      value: "Results", // The HTML to be rendered
      className: "sidebar-html-title",
    },
    {
      type: "autogenerated",
      dirName: "results",
    },
  ],
};

module.exports = sidebars;