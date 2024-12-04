// assets
import { IconKey } from '@tabler/icons-react';
import DeblurIcon from '@mui/icons-material/Deblur';
// constant
const icons = {
  IconKey,
  DeblurIcon
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Home',
  caption: 'Hi, Welcome to Berry Free React Admin Template',
  type: 'group',
  children: [
    {
      id: 'chuck-norris',
      title: 'chuck norris',
      type: 'collapse',
      icon: icons.DeblurIcon,

      children: [
        {
          id: 'chuck-norris',
          title: 'Jocks',
          type: 'item',
          url: '/chuck-norris',
          target: true
        }
      ]
    }
  ]
};

export default pages;
