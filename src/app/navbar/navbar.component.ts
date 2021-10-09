import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../register/login/login.component';
import { RegisterComponent } from '../register/register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogRegister() {
    const dialogConfig = new MatDialogConfig();


    dialogConfig.width = "60%";
    dialogConfig.height = "60%";

    this.dialog.open(LoginComponent, dialogConfig);

  }

  openDialogLogin() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "60%";
    dialogConfig.height = "auto";
    this.dialog.open(RegisterComponent, dialogConfig);
  }

}
