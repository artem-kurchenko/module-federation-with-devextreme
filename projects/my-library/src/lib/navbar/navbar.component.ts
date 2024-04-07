import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterContentInit{

  @ContentChild(DxDataGridComponent, { static: false }) dataGrid?: DxDataGridComponent;

  @ContentChild(MatIcon) matIcon?: MatIcon;

  @ContentChild('text') text: any;

  ngAfterContentInit(): void {
    // setTimeout(() => {
      console.log('#######', this.dataGrid, this.matIcon, this.text);

    // }, 2000)
  }

}
