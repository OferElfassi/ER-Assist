export const authRoot = {
  root: {
    bottomTabs: {
      id: 'AuthBottomTabsId',
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  id: 'login_Screen_id',
                  name: 'com.erAssist.auth.login',
                },
              },
            ],
            options: {
              topBar: {
                visible: false,
              },
              bottomTab: {
                text: 'Login',
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'com.erAssist.auth.signup',
                },
              },
            ],
            options: {
              topBar: {
                visible: false,
              },
              bottomTab: {
                text: 'Signup',
              },
            },
          },
        },
      ],
      options: {
        bottomTabs: {backgroundColor: '#0b2053'},
      },
    },
  },
};
