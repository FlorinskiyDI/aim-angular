import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// core
import { AppVersionService } from './core-services/version.service';
import { GlobalErrorService } from './core-error/global-error.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  appVersion = 'Loading...';

  constructor(
    private versionService: AppVersionService,
    private globalErrorService: GlobalErrorService,
  ) { }

  ngOnInit(): void {
    this.versionService.getVersion().subscribe((data) => {
      this.appVersion = data.version;
    });

    this.globalErrorService.error$.subscribe((error: any) => {
      alert(error);
    });
  }

  pushError(){
    throw new Error('Test error');
  }

  title = 'aim-angular';
}
