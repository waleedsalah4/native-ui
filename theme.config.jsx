export default {
  logo: <span>HOOKS/UI</span>,
  project: {
    link: "https://github.com/shuding/nextra",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="HOOKS/UI" />
      <meta
        property="og:description"
        content="HOOKS/UI is a small custom ui and hooks documentation"
      />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – UI/HOOKS",
    };
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  // ... other theme options
};
