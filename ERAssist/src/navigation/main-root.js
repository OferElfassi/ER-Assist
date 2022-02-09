export const mainRoot = {
  root: {
    sideMenu: {
      left: {
        component: {
          id: 'sideDrawer',
          name: 'com.erAssist.main.drawer',
        },
      },
      center: {
        bottomTabs: {
          id: 'MainBottomTabsId',
          children: [
            {
              stack: {
                id: 'MainStack',
                children: [
                  {
                    component: {
                      id: 'home_Screen_id',
                      name: 'com.erAssist.main.home',
                      options: {
                        bottomTab: {
                          text: 'Home',
                          icon: require('../assets/images/home.png'),
                        },
                        topBar: {
                          background: {
                            component: {
                              name: 'com.erAssist.main.header',
                              passProps: {title: 'Home', showSearch: true},
                            },
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                id: 'GeneratorStack',
                children: [
                  {
                    component: {
                      name: 'com.erAssist.main.generator',
                      options: {
                        bottomTab: {},
                        topBar: {
                          background: {
                            component: {
                              name: 'com.erAssist.main.header',
                              passProps: {title: 'Report'},
                            },
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              id: 'dd',
              stack: {
                id: 'ManageStack',
                children: [
                  {
                    component: {
                      name: 'com.erAssist.main.manage',
                      options: {
                        bottomTab: {
                          text: 'Manage',
                          icon: require('../assets/images/settings.png'),
                        },
                        topBar: {
                          background: {
                            component: {
                              name: 'com.erAssist.main.header',
                              passProps: {title: 'Manage'},
                            },
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
          options: {
            bottomTabs: {backgroundColor: '#0b2053'},
          },
        },
      },
    },
  },
};
