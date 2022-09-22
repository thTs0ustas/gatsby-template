import path from 'path';
exports.createPages = async ({ actions }: { actions: any }) => {
  const { createPage } = actions;
  createPage({
    path: '/using-dsg',
    component: path.resolve('./src/templates/using-dsg.tsx'),
    context: {},
    defer: true,
  });
};
