interface AppRoute {
  AUTH: {
    REGISTER: string;
    LOGIN: string;
    PROFILE: string;
  };
  USERS: {
    ROOT: string;
    LIST: string;
    ADD: string;
    EDIT: string;
  };
  HOME: {
    ROOT: string;
  };
  MAIN: {
    ROOT: string;
    DETAIL: string;
    LIST_DETAIL: string;
    LIST_STATUS: string;
  };
  FORM_DEMO: {
    ROOT: string;
  };
  NOT_FOUND: string;
}

export const appRoutes: AppRoute = {
  AUTH: {
    REGISTER: 'register',
    LOGIN: 'login',
    PROFILE: 'profile',
  },
  USERS: {
    ROOT: 'users',
    LIST: 'listing',
    ADD: 'add',
    EDIT: 'edit',
  },
  HOME: {
    ROOT: 'home',
  },
  MAIN: {
    ROOT: 'main',
    DETAIL: 'main/:id',
    LIST_DETAIL: 'main/list-detail',
    LIST_STATUS: 'main/list-status',
  },
  FORM_DEMO: {
    ROOT: 'form-demo',
  },
  NOT_FOUND: '404',
};
