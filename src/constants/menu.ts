import { DrawerItem } from '../ts';
import { ROUTES } from './routes';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ViewHeadlineRoundedIcon from '@material-ui/icons/ViewHeadlineRounded';

export const DRAWER_LIST: DrawerItem[] = [
  {
    route: ROUTES.main,
    literal: 'Dashboard',
    Icon: DashboardIcon,
  },
  {
    route: ROUTES.users,
    literal: 'Users',
    Icon: PeopleRoundedIcon
  },

  {
    route: ROUTES.publication,
    literal: 'Publication',
    Icon: CollectionsBookmarkIcon
  },

  {
    route: ROUTES.agents,
    literal: 'Agents',
    Icon: AccountBoxRoundedIcon
  },

  {
    route: ROUTES.category,
    literal: 'Category/Tags',
    Icon: AlternateEmailRoundedIcon 
  },

  {
    route: ROUTES.maintenance,
    literal: 'Maintenance',
    Icon: SettingsRoundedIcon
  },

  {
    route: ROUTES.activity,
    literal: 'Activity Log',
    Icon: ViewHeadlineRoundedIcon
  }
]















