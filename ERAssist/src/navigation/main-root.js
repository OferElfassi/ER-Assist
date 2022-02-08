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
        stack: {
          id: 'MainStack', // This is the id we're going to use when interacting with the stack
          children: [
            {
              component: {
                name: 'com.erAssist.main.home',
                options: {
                  topBar: {
                    hideOnScroll: true,
                    leftButtons: [
                      {
                        id: 'buttonOne',
                        icon: require('../assets/images/hamburger.png'),
                      },
                    ],

                    background: {
                      component: {
                        name: 'com.erAssist.main.header',
                        passProps: {title: 'Home'},
                      },
                    },
                    drawBehind: false,
                    visible: true,
                    animate: true,
                  },
                },
              },
            },
          ],
        },
      },
    },
  },
};
