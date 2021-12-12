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
