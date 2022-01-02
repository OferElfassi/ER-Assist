export const authRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
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
    },
  },
};
