import { Component } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDrawer, MatDrawerContainer } from "@angular/material/sidenav";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { MatListItem, MatNavList } from "@angular/material/list";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from "@angular/material/icon";
import { MatAnchor, MatButton, MatIconButton } from "@angular/material/button";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../../../iam/services/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatDrawerContainer,
    RouterOutlet,
    MatNavList,
    MatListItem,
    RouterLink,
    RouterLinkActive,
    MatDrawer,
    MatIcon,
    MatButton,
    MatSidenavModule,
    MatMenuTrigger,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatAnchor
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentUsername: string = '';
  currentId: number = 0;
  constructor(private authenticationService: AuthenticationService) {
  }

  logout() {
    this.authenticationService.signOut();
  }
}
