export class MenuItem {
  constructor(public order: number = 0, public name: string = '', public path: string = '/', public icon: string = '',
              public active: boolean = true) {
  }
}

export const MENU = [
  new MenuItem(1, 'Home', '/', 'workspaces', true ),
  new MenuItem(2, 'Users', '/users', 'people', true),


];
