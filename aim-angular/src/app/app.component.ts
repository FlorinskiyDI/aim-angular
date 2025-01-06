import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// core
import { AppVersionService } from './core-services/version.service';
import { GlobalErrorService } from './core-error/global-error.service';
import { environment } from '../environments/environment';
// controls - material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// controls - primeng
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    // @angular
    RouterOutlet,
    //  controls - material
    MatIconModule,
    MatButtonModule,
    // controls - primeng
    ButtonModule
  ]  
})

export class AppComponent {
  appVersion = 'Loading...';
  appEnviroment = 'Loading...';

  constructor(
    private versionService: AppVersionService,
    private globalErrorService: GlobalErrorService,
  ) { }

  ngOnInit(): void {
    this.versionService.getVersion().subscribe((data) => {
      this.appVersion = data.version;
    });
    this.appEnviroment = environment.env;

    this.globalErrorService.error$.subscribe((error: any) => {
      alert(error);
    });
  }

  pushError(){
    throw new Error('Test error');
  }

  title = 'aim-angular';
}
