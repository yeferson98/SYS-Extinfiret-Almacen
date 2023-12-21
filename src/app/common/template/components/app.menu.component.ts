import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Apps',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Blog',
                        icon: 'pi pi-fw pi-comment',
                        items: [
                            {
                                label: 'List',
                                icon: 'pi pi-fw pi-image',
                                routerLink: ['/apps/blog/list']
                            },
                            {
                                label: 'Detail',
                                icon: 'pi pi-fw pi-list',
                                routerLink: ['/apps/blog/detail']
                            },
                            {
                                label: 'Edit',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/apps/blog/edit']
                            }
                        ]
                    },
                    {
                        label: 'Calendar',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/apps/calendar']
                    },
                    {
                        label: 'Chat',
                        icon: 'pi pi-fw pi-comments',
                        routerLink: ['/apps/chat']
                    },
                    {
                        label: 'Files',
                        icon: 'pi pi-fw pi-folder',
                        routerLink: ['/apps/files']
                    },
                    {
                        label: 'Kanban',
                        icon: 'pi pi-fw pi-sliders-v',
                        routerLink: ['/apps/kanban']
                    },
                    {
                        label: 'Mail',
                        icon: 'pi pi-fw pi-envelope',
                        items: [
                            {
                                label: 'Inbox',
                                icon: 'pi pi-fw pi-inbox',
                                routerLink: ['/apps/mail/inbox']
                            },
                            {
                                label: 'Compose',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/apps/mail/compose']
                            },
                            {
                                label: 'Detail',
                                icon: 'pi pi-fw pi-comment',
                                routerLink: ['/apps/mail/detail/1000']
                            }
                        ]
                    },
                    {
                        label: 'Task List',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/apps/tasklist']
                    }
                ]
            },
        ];
    }
}
