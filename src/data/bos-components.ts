import type { NetworkId } from '@/utils/types';

type NetworkComponents = {
  bosDirectory: string;
  componentSummary: string;
  componentsPage: string;
  default: string;
  digButton: string;
  editorComponentSearch: string;
  horizon: {
    homePage: string;
    appPage: string;
  };
  image: string;
  nearOrg: {
    cookiePolicy: string;
    ecosystemCommunityPage: string;
    ecosystemGetFundingPage: string;
    ecosystemOverviewPage: string;
    ecosystemWorkAndEarnPage: string;
    footer: string;
    homePage: string;
    learningLinks: string;
    usePage: string;
    notifications: {
      page: string;
      alert: string;
      settings: string;
      button: string;
      iosHomeScreenAlert: string;
    };
  };
  notificationButton: string;
  peoplePage: string;
  profileImage: string;
  profileInlineBlock: string;
  profileName: string;
  profilePage: string;
  search: {
    indexPage: string;
    typeAheadDropdown: string;
  };
  tosCheck: string;
  tosContent: string;
  viewSource: string;
  widgetMetadata: string;
  widgetMetadataEditor: string;
  wrapper: string;
};

export const componentsByNetworkId: Record<NetworkId, NetworkComponents | undefined> = {
  // localnet: undefined,
  testnet: {
    bosDirectory: 'one.testnet/widget/BOSDirectory',
    componentSummary: 'discom.testnet/widget/ComponentSummary',
    componentsPage: 'discom.testnet/widget/ComponentsPage',
    default: 'discom.testnet/widget/ActivityPage',
    digButton: 'discom.testnet/widget/DIG.Button',
    editorComponentSearch: 'one.testnet/widget/Editor.ComponentSearch',
    horizon: {
      homePage: 'nearhorizon.near/widget/HomePage',
      appPage: 'nearhorizon.near/widget/Index',
    },
    image: 'eugenethedream/widget/Image',
    nearOrg: {
      cookiePolicy: 'discom.testnet/widget/NearOrg.CookiePolicy',
      ecosystemCommunityPage: 'discom.testnet/widget/NearOrg.Ecosystem.CommunityPage',
      ecosystemGetFundingPage: 'discom.testnet/widget/NearOrg.Ecosystem.GetFundingPage',
      ecosystemOverviewPage: 'discom.testnet/widget/NearOrg.Ecosystem.OverviewPage',
      ecosystemWorkAndEarnPage: 'discom.testnet/widget/NearOrg.Ecosystem.WorkAndEarnPage',
      footer: 'discom.testnet/widget/NearOrg.Footer',
      homePage: 'discom.testnet/widget/NearOrg.HomePage',
      learningLinks: 'discom.testnet/widget/NearOrg.LearningLinks',
      usePage: 'discom.testnet/widget/NearOrg.UsePage',
      notifications: {
        page: 'discom.testnet/widget/NearOrg.Notifications.Notifications',
        alert: 'discom.testnet/widget/NearOrg.Notifications.NotificationAlert',
        settings: 'discom.testnet/widget/NearOrg.Notifications.Settings',
        button: 'discom.testnet/widget/NearOrg.Notifications.NotificationButton',
        iosHomeScreenAlert: 'discom.testnet/widget/NearOrg.Notifications.HomeScreenAlert',
      },
    },
    notificationButton: 'discom.testnet/widget/NotificationButton',
    peoplePage: 'discom.testnet/widget/PeoplePage',
    profileImage: 'eugenethedream/widget/ProfileImage',
    profileInlineBlock: 'eugenethedream/widget/Profile.InlineBlock',
    profileName: 'eugenethedream/widget/ProfileName',
    profilePage: 'discom.testnet/widget/ProfilePage',
    search: {
      indexPage: 'discom.testnet/widget/Search.IndexPage',
      typeAheadDropdown: 'discom.testnet/widget/Search.TypeAheadDropdown',
    },
    tosCheck: 'discom.testnet/widget/TosCheck',
    tosContent: 'discom.testnet/widget/TosContent',
    viewSource: 'eugenethedream/widget/WidgetSource',
    widgetMetadata: 'eugenethedream/widget/WidgetMetadata',
    widgetMetadataEditor: 'discom.testnet/widget/WidgetMetadataEditor',
    wrapper: 'discom.testnet/widget/DIG.Theme',
  },

  mainnet: {
    bosDirectory: 'onboarder.near/widget/BOSDirectory',
    componentSummary: 'near/widget/ComponentSummary',
    componentsPage: 'near/widget/ComponentsPage',
    default: 'near/widget/ActivityPage',
    digButton: 'near/widget/DIG.Button',
    editorComponentSearch: 'mob.near/widget/Editor.ComponentSearch',
    horizon: {
      homePage: 'nearhorizon.near/widget/HomePage',
      appPage: 'nearhorizon.near/widget/Index',
    },
    image: 'mob.near/widget/Image',
    nearOrg: {
      cookiePolicy: 'near/widget/NearOrg.CookiePolicy',
      ecosystemCommunityPage: 'near/widget/NearOrg.Ecosystem.CommunityPage',
      ecosystemGetFundingPage: 'near/widget/NearOrg.Ecosystem.GetFundingPage',
      ecosystemOverviewPage: 'near/widget/NearOrg.Ecosystem.OverviewPage',
      ecosystemWorkAndEarnPage: 'near/widget/NearOrg.Ecosystem.WorkAndEarnPage',
      footer: 'near/widget/NearOrg.Footer',
      homePage: 'near/widget/NearOrg.HomePage',
      learningLinks: 'near/widget/NearOrg.LearningLinks',
      usePage: 'near/widget/NearOrg.UsePage',
      notifications: {
        page: 'near/widget/NearOrg.Notifications.Notifications',
        alert: 'near/widget/NearOrg.Notifications.NotificationAlert',
        settings: 'near/widget/NearOrg.Notifications.Settings',
        button: 'near/widget/NearOrg.Notifications.NotificationButton',
        iosHomeScreenAlert: 'near/widget/NearOrg.Notifications.HomeScreenAlert',
      },
    },
    notificationButton: 'near/widget/NotificationButton',
    peoplePage: 'near/widget/PeoplePage',
    profileImage: 'mob.near/widget/ProfileImage',
    profileInlineBlock: 'mob.near/widget/Profile.InlineBlock',
    profileName: 'patrick.near/widget/ProfileName',
    profilePage: 'near/widget/ProfilePage',
    search: {
      indexPage: 'near/widget/Search.IndexPage',
      typeAheadDropdown: 'near/widget/Search.TypeAheadDropdown',
    },
    tosCheck: 'near/widget/TosCheck',
    tosContent: 'adminalpha.near/widget/TosContent',
    viewSource: 'mob.near/widget/WidgetSource',
    widgetMetadata: 'mob.near/widget/WidgetMetadata',
    widgetMetadataEditor: 'near/widget/WidgetMetadataEditor',
    wrapper: 'near/widget/DIG.Theme',
  },
};
