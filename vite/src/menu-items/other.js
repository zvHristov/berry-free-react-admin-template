// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';
// assets
import DeblurIcon from '@mui/icons-material/Deblur';
// constant
const icons = { IconBrandChrome, IconHelp, DeblurIcon };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'chuck-norris',
      title: 'Random Joke',
      type: 'item',
      url: '/chuck-norris',
      icon: icons.DeblurIcon,
      breadcrumbs: false
    },
    {
      id: 'chuck-norris-categories',
      title: 'Categories',
      type: 'item',
      url: '/chuck-norris-categories',
      icon: icons.DeblurIcon,
      breadcrumbs: false
    },
    {
      id: 'custom-page',
      title: 'Custom Page',
      type: 'item',
      url: '/custom-page',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/berry/',
      icon: icons.IconHelp,
      external: true,
      target: true
    }
  ]
};

export default other;
